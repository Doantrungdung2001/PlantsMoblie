import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from "@expo/vector-icons";
import styles from "./CultivationProcess.Styles";
import useListProcess from "./useCultivationProcess";
import { formatDate, formatTime } from "../../../../Utils/helper";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../Constants";
// const classes = [
//   {
//     startTime: "09:00",
//     endTime: "10:30",
//     title: "History of Physics",
//     bgColor: "#E0FFFF",
//     students: [
//       {
//         id: "1",
//         name: "John",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
//       },
//       {
//         id: "2",
//         name: "Emily",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
//       },
//       {
//         id: "3",
//         name: "Michael",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
//       },
//       {
//         id: "4",
//         name: "Michael",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
//       },
//       {
//         id: "5",
//         name: "Michael",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
//       },
//     ],
//   },
//   {
//     startTime: "10:30",
//     endTime: "11:00",
//     title: "History of Physics",
//     bgColor: "#E6E6FA",
//     students: [
//       {
//         id: "6",
//         name: "Sarah",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
//       },
//       {
//         id: "7",
//         name: "David",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
//       },
//       {
//         id: "8",
//         name: "Sophia",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
//       },
//     ],
//   },
//   {
//     startTime: "11:00",
//     endTime: "11:30",
//     title: "History of Physics",
//     bgColor: "#FAF0E6",
//     students: [
//       {
//         id: "9",
//         name: "Sarah",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
//       },
//       {
//         id: "10",
//         name: "David",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
//       },
//       {
//         id: "11",
//         name: "Sophia",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
//       },
//     ],
//   },
//   {
//     startTime: "11:30",
//     endTime: "12:30",
//     title: "History of Physics",
//     bgColor: "#FAFAD2",
//     students: [
//       {
//         id: "12",
//         name: "Sarah",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
//       },
//       {
//         id: "13",
//         name: "David",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
//       },
//       {
//         id: "14",
//         name: "Sophia",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
//       },
//     ],
//   },
//   // Add more classes as needed
// ];
const CultivationProcess = ({ gardenId }) => {
  const { allProcess, isSuccessAllProcess, isLoadingAllProcess } =
    useListProcess({
      gardenId: gardenId,
    });
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [detailProcess, setDetailProcess] = useState();

  const renderClassItem = ({ item }) => (
    <View style={styles.classItem}>
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>{formatDate(item.startDate)}</Text>
          <Text style={styles.endTime}>{formatTime(item.startDate)}</Text>
        </View>

        <TouchableOpacity
          style={styles.cardProcess}
          onPress={() => {
            setShowModal(!showModal);
            setDetailProcess(item.process);
          }}
        >
          <Text style={styles.cardTitle}>{item.plant.plant_name}</Text>
          <Text style={styles.cardDate}>{item.status}</Text>
          {/* <FlatList
            contentContainerStyle={styles.studentListContainer}
            data={item.students}
            keyExtractor={(student) => student.id}
            renderItem={({ item: student }) => (
              <Image
                source={{ uri: student.avatar }}
                style={styles.studentAvatar}
              />
            )}
            horizontal
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Hoạt động canh tác</Text>
          <Text style={styles.headerSubtitle}>24 March, 18pm - 19pm</Text>
        </View>
        <TouchableOpacity onPress={() => setShowPicker(!showPicker)}>
          <Fontisto name="date" size={30} color="white" />
        </TouchableOpacity>
      </View>
      {showPicker && (
        <DateTimePicker mode="date" display="spinner" value={date} />
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
    <View style={styles.container}>
      <Text style={styles.title}>Hoạt động canh tác</Text>
      {isSuccessAllProcess && (
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 16 }}
          data={allProcess}
          ListHeaderComponent={renderHeader}
          renderItem={renderClassItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <Modal animationType="slide" visible={showModal}>
        <View style={{ padding: 20, paddingTop: 70 }}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
            onPress={() => setShowModal(!showModal)}
          >
            <Ionicons name="arrow-back" size={30} color="black" />
            <Text
              style={{
                fontSize: 23,
                fontWeight: "600",
              }}
            >
              Thông tin hoạt động
            </Text>
          </TouchableOpacity>
        </View>
        {detailProcess ? (
          <ScrollView>
            {console.log("detail process", detailProcess)}
            <View
              style={{
                padding: 10,
                justifyContent: "center",
                borderRadius: 10,
                backgroundColor: COLORS.green,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 30,
                marginBottom: 30,
              }}
            ></View>
            {detailProcess.map((info) => (
              <View>
                console.log("asfsdfdsfdf",info)
                <View style={styles.detailInfo}>
                  <Text style={styles.subject}>
                    {info?.cultivationActivity?.name}
                  </Text>
                  <View style={styles.body}>
                    <Text style={styles.bodyText}>
                      {info?.cultivationActivity?.description}
                    </Text>
                  </View>
                </View>
                <View style={{ marginBottom: 30 }}></View>
              </View>
            ))}
          </ScrollView>
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
      </Modal>
    </View>
  );
};

export default CultivationProcess;
