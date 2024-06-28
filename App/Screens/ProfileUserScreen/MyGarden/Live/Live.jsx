import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import YoutubeIframe from "react-native-youtube-iframe";
import axios from "axios";
import NotData from "../../../../Components/NotData/NotData";

const Live = () => {
  const [isLive, setIsLive] = useState(false);
  const liveStreamId = "FanG--ZXdlE"; // Thay {LIVESTREAM_ID} bằng live stream ID của YouTube
  const apiKey = "AIzaSyC19A5x6_LBr00qaFUOKrh5fscbnFs5znc"; // Thay YOUR_YOUTUBE_API_KEY bằng khóa API của bạn

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20liveStreamingDetails&id=${liveStreamId}&key=${apiKey}`
      )
      .then((response) => {
        const video = response.data.items[0];
        console.log("Dữ liệu trả về:", video);
        if (
          video &&
          video?.liveStreamingDetails &&
          video?.liveStreamingDetails?.actualEndTime
        ) {
          console.log("Vào đây a");

          setIsLive(false);
        } else {
          console.log("Vào đây b");
          setIsLive(true);
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy thông tin video:", error);
      });
  }, []);
  console.log("Trang thasi live", isLive);
  return (
    <View>
      <PageHeading title={"Carmera "} />
      {isLive ? (
        <YoutubeIframe height={600} play={true} videoId={liveStreamId} />
      ) : (
        <View styles={{ margin: 10 }}>
          <NotData text={"Luồng phát trực tiếp chưa sẵn sàng"} />
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
});
