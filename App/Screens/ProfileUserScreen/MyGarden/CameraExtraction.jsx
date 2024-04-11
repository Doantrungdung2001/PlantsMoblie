import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
const data = [
  {
    id: "1",
    thumbnail: "https://via.placeholder.com/640x360",
    title: "Video 1",
    channel: "Channel 1",
    views: "1.2M views",
    duration: "5:01",
  },
  {
    id: "2",
    thumbnail: "https://via.placeholder.com/640x360",
    title: "Video 2",
    channel: "Channel 2",
    views: "2.3M views",
    duration: "10:02",
  },
  {
    id: "3",
    thumbnail: "https://via.placeholder.com/640x360",
    title: "Video 3",
    channel: "Channel 3",
    views: "3.4M views",
    duration: "15:03",
  },
  {
    id: "4",
    thumbnail: "https://via.placeholder.com/640x360",
    title: "Video 3",
    channel: "Channel 3",
    views: "3.4M views",
    duration: "15:03",
  },
  {
    id: "5",
    thumbnail: "https://via.placeholder.com/640x360",
    title: "Video 3 ",
    channel: "Channel 3",
    views: "3.4M views",
    duration: "15:03",
  },
  {
    id: "6",
    thumbnail: "https://via.placeholder.com/640x360",
    title: "Video 3",
    channel: "Channel 3",
    views: "3.4M views",
    duration: "15:03",
  },
  {
    id: "7",
    thumbnail: "https://via.placeholder.com/640x360",
    title: "Video 3",
    channel: "Channel 3",
    views: "3.4M views",
    duration: "15:03",
  },
  {
    id: "8",
    thumbnail: "https://via.placeholder.com/640x360",
    title: "Video 3",
    channel: "Channel 3",
    views: "3.4M views",
    duration: "15:03",
  },
];
const CameraExtraction = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.video} onPress={() => {}}>
        <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.channel}>{item.channel}</Text>
          <View style={styles.viewCount}>
            <Text style={styles.views}>{item.views}</Text>
            <Text style={styles.duration}>{item.duration}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CameraExtraction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    margin:5,
  },
  video: {
    flexDirection: "row",
    marginBottom: 20,
  },
  thumbnail: {
    width: "35%",
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  details: {
    padding: 10,
    width: "65%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  channel: {
    color: "#999",
    fontSize: 14,
    marginTop: 5,
  },
  viewCount: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  views: {
    color: "#999",
    fontSize: 14,
  },
  duration: {
    color: "#999",
    fontSize: 14,
    marginLeft: 10,
  },
});
