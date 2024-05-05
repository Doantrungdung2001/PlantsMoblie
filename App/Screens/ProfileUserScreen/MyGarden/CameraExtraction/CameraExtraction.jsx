import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from "@expo/vector-icons";
import styles from "./CameraExtraction.Styles";
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
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeChange = (event, selectedDate) => {
    setShowPicker(false); // Hide the picker after selecting a time
    setSelectedTime(selectedDate); // Update the selected time
    console.log("Selected time:", selectedDate); // Log the selected time
  };

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

  const renderHeader = () => (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Video trích xuất từ hệ thống</Text>
          <Text style={styles.headerSubtitle}>
            {selectedTime
              ? `Thời gian: ${selectedTime.getDate()}/${
                  selectedTime.getMonth() + 1
                }/${selectedTime.getFullYear()}`
              : "Chọn thời gian"}
          </Text>
        </View>
        <TouchableOpacity onPress={() => setShowPicker(!showPicker)}>
          <Fontisto name="date" size={30} color="white" />
        </TouchableOpacity>
      </View>
      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={selectedTime || date} // Pass the selected time or the current time
          onChange={handleTimeChange}
        />
      )}
      <View style={styles.body}>
        <Image
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Mr. Cody Fisher</Text>
          <Text style={styles.userRole}>Professor</Text>
        </View>
      </View>
    </View>
  );
  return (
    <FlatList
      style={styles.container}
      data={data}
      ListHeaderComponent={renderHeader}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CameraExtraction;
