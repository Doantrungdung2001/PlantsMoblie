import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import YoutubeIframe from "react-native-youtube-iframe";
import axios from "axios";
import NotData from "../../../../Components/NotData/NotData";
import useListCamera from "./useLiveCamera";

const Live = () => {
  const param = useRoute().params;
  const [gardenId, setGardenId] = useState(param?.gardenId);

  useEffect(() => {
    if (param?.gardenId) {
      setGardenId(param.gardenId);
    }
  }, [param.gardenId]);

  console.log("gardenId : ", gardenId);

  const [liveStreamIds, setLiveStreamIds] = useState([]);
  const [liveStreamId, setLiveStreamId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "AIzaSyC19A5x6_LBr00qaFUOKrh5fscbnFs5znc";

  // Custom hook to fetch camera data
  const {
    dataAllCamera,
    isSuccessAllCamera,
    isLoadingAllCamera,
    refetchAllCamera,
  } = useListCamera({
    gardenId: gardenId,
  });

  console.log("DU lieu camera", dataAllCamera);

  // Update liveStreamIds when dataAllCamera changes
  useEffect(() => {
    if (isSuccessAllCamera && dataAllCamera) {
      const livestreamIds = dataAllCamera
        .map((camera) => camera.livestreamId)
        .filter(Boolean);
      setLiveStreamIds(livestreamIds);
    }
  }, [isSuccessAllCamera, dataAllCamera]);

  useEffect(() => {
    const checkLiveStatus = async () => {
      setIsLoading(true);
      let foundLiveStreamId = null;

      console.log("b");
      for (let i = 0; i < liveStreamIds.length; i++) {
        const liveStreamId = liveStreamIds[i];
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20liveStreamingDetails&id=${liveStreamId}&key=${apiKey}`
          );
          const video = response.data.items[0];
          if (
            video &&
            video.liveStreamingDetails &&
            !video.liveStreamingDetails.actualEndTime
          ) {
            foundLiveStreamId = liveStreamId;
            break; // Found a live stream, no need to continue
          }
        } catch (error) {
          console.error("Error fetching video information:", error);
        }
      }

      setLiveStreamId(foundLiveStreamId);
      setIsLoading(false);
    };

    if (liveStreamIds.length > 0) {
      checkLiveStatus();
    }
  }, [liveStreamIds]);

  console.log("id", liveStreamId);

  return (
    <View>
      <PageHeading title={"Camera"} />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : liveStreamId ? (
        <YoutubeIframe height={600} play={true} videoId={liveStreamId} />
      ) : (
        <View style={styles.noDataContainer}>
          <NotData text={"Luồng trực tiếp chưa sẵn sàng"} />
        </View>
      )}
    </View>
  );
};

export default Live;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataContainer: {
    margin: 10,
  },
});
