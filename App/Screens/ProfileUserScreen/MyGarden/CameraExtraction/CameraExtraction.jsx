import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from "@expo/vector-icons";
import styles from "./CameraExtraction.Styles";
import useCameraExtraction from "./useCameraExtraction";
import { Video, ResizeMode } from "expo-av";
import { formatDateTime, formatDate } from "../../../../Utils/helper";
const CameraExtraction = ({ gardenId }) => {
  const { allVideos, isSuccessCameraExtraction, isLoadingCameraExtraction } =
    useCameraExtraction({
      gardenId: gardenId,
    });
  const [fillterVideos, setFillterVideos] = useState(allVideos);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const video = React.useRef(null);

  useEffect(() => {
    setFillterVideos(allVideos);
  }, [allVideos]);
  const handleTimeChange = (event, selectedDate) => {
    setShowPicker(false); // Hide the picker after selecting a time
    setSelectedTime(selectedDate);
    const formatTime = formatDate(selectedDate);
    setFillterVideos(allVideos.filter((video) => video.date === formatTime));
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.video} onPress={() => {}}>
        <View>
          <Video
            ref={video}
            style={styles.playvideo}
            source={{
              uri: item.video_url,
            }}
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
    </View>
  );
  return (
    <View>
      {isSuccessCameraExtraction && (
        <FlatList
          style={styles.container}
          data={fillterVideos}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
      {isLoadingCameraExtraction && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </View>
  );
};

export default CameraExtraction;
