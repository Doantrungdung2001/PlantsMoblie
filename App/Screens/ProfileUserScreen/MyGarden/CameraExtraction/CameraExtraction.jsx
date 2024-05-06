import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from "@expo/vector-icons";
import styles from "./CameraExtraction.Styles";
import useCameraExtraction from "./useCameraExtraction";
import { Video, ResizeMode } from "expo-av";

const CameraExtraction = ({ gardenId }) => {
  const { allVideos, isSuccessCameraExtraction, isLoadingCameraExtraction } =
    useCameraExtraction({
      gardenId: gardenId,
    });

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const handleTimeChange = (event, selectedDate) => {
    setShowPicker(false); // Hide the picker after selecting a time
    setSelectedTime(selectedDate); // Update the selected time
    console.log("Selected time:", selectedDate); // Log the selected time
  };

  const renderItem = ({ item }) => {
    console.log("Du lieu video : ", item);
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
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title}>{item.date}</Text>
          {/* <Text style={styles.channel}>{item.channel}</Text>
          <View style={styles.viewCount}>
            <Text style={styles.views}>{item.views}</Text>
            <Text style={styles.duration}>{item.duration}</Text>
          </View> */}
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
    <View>
      {isSuccessCameraExtraction && (
        <FlatList
          style={styles.container}
          data={allVideos}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default CameraExtraction;
