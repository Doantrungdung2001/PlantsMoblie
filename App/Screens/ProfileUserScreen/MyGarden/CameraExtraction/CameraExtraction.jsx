import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import { formatDateTime, formatDate } from "../../../../Utils/helper";
import { COLORS } from "../../../../Constants";
import useCameraExtraction from "./useCameraExtraction";
import styles from "./CameraExtraction.Styles";

const CameraExtraction = ({ gardenId }) => {
  const { allVideos, isSuccessCameraExtraction, isLoadingCameraExtraction } =
    useCameraExtraction({
      gardenId: gardenId,
    });

  const [filteredVideos, setFilteredVideos] = useState(allVideos);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    setFilteredVideos(allVideos);
  }, [allVideos]);

  const handleTimeChange = (event, selectedDate) => {
    setShowPicker(false); // Close the picker after selecting a time
    setSelectedTime(selectedDate);

    const startDate = new Date(2024, 0, 20); // January 20th, 2024
    const endDate = new Date(2024, 4, 20);   // May 20th, 2024

    if (
      selectedDate >= startDate &&
      selectedDate <= endDate
    ) {
      const filtered = allVideos.filter(video => {
        const videoDate = new Date(video.date);
        return videoDate >= startDate && videoDate <= endDate;
      });
      setFilteredVideos(filtered);
    } else {
      alert("Please select a date between January 20th, 2024 and May 20th, 2024.");
    }
  };

  const togglePicker = () => {
    setShowPicker(!showPicker); // Toggle the state of showPicker
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.video} onPress={() => {}}>
      <View>
        <Video
          style={styles.playvideo}
          source={{ uri: item.video_url }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{item.date}</Text>
        <Text style={styles.channel}>{formatDateTime(item.start_time)}</Text>
        <Text style={styles.channel}>{formatDateTime(item.end_time)}</Text>
      </View>
    </TouchableOpacity>
  );

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
        <TouchableOpacity onPress={togglePicker}>
          <Fontisto name="date" size={30} color="white" />
        </TouchableOpacity>
      </View>
      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={selectedTime || new Date()}
          onChange={handleTimeChange}
        />
      )}
    </View>
  );

  return (
    <View>
      {isSuccessCameraExtraction && filteredVideos.length > 0 ? (
        <FlatList
          style={styles.container}
          data={filteredVideos}
          // ListHeaderComponent={renderHeader}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 30,
              fontWeight: "600",
              textAlign: "center",
              marginTop: 40,
            }}
          >
            Hoạt động chưa cập nhật
          </Text>
        </View>
      )}
      {isLoadingCameraExtraction && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </View>
  );
};

export default CameraExtraction;
