import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import YoutubeIframe from 'react-native-youtube-iframe';

const LiveCamera = () => {
  return (
    <View>
      <PageHeading title={"Carmera"} />
      <View>
        <YoutubeIframe
          height={600}
          play={true}
          videoId={"KNDSF0Pytvs"} // Thay {VIDEO_ID} bằng ID của video YouTube hoặc livestream
        />
      </View>
    </View>
  );
};

export default LiveCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
