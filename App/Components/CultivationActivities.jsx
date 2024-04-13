import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import Heading from "./Heading";
import { COLORS } from "../Constants";
import { MaterialIcons } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    name: "Vệ sinh vườn",
    description:
      "Vệ sinh vườn, dọn sạch các tàn dư thực vật của vụ trước, rải vôi cày xới kỹ sâu khoảng 20-25cm. ",
  },
  {
    id: 2,
    name: "Xử lý đất bằng Nebijin 0.3DP ",
    description:
      "Ở những vườn các vụ trước đã trồng bắp cải cần xử lý đất bằng Nebijin 0.3DP để hạn chế bệnh sưng rễ.",
  },
  {
    id: 3,
    name: "Nhúng rễ cây vào dung dịch Sherpa 0,1-0,15%",
    description:
      "Trước khi trồng nhúng rễ cây vào dung dịch Sherpa 0,1-0,15%. Nếu sử dụng polietylen phủ đất, sau khi bón lót, phủ kín mặt luống, dùng đất chèn kỹ mép luống và đục lỗ trồng.",
  },
  {
    id: 4,
    name: "Nhúng rễ cây vào dung dịch Sherpa 0,1-0,15%",
    description:
      "Trước khi trồng nhúng rễ cây vào dung dịch Sherpa 0,1-0,15%. Nếu sử dụng polietylen phủ đất, sau khi bón lót, phủ kín mặt luống, dùng đất chèn kỹ mép luống và đục lỗ trồng.",
  },
  {
    id: 5,
    name: "Nhúng rễ cây vào dung dịch Sherpa 0,1-0,15%",
    description:
      "Trước khi trồng nhúng rễ cây vào dung dịch Sherpa 0,1-0,15%. Nếu sử dụng polietylen phủ đất, sau khi bón lót, phủ kín mặt luống, dùng đất chèn kỹ mép luống và đục lỗ trồng.",
  },
];

const CultivationActivities = () => {
  const [eventList, setEventList] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [selectDetail, setSelectDeatil] = useState(false);
  showAlert = (viewId) => {
    Alert.alert("alert", "event clicked " + viewId);
  };
  return (
    <View>
      <View>
        <Heading text={"Hoạt động làm đất"} />
      </View>
      <View style={styles.container}>
        <FlatList
          enableEmptySections={true}
          style={styles.eventList}
          data={eventList}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setShowModal(!showModal), setSelectDeatil(item);
                }}
              >
                <View style={styles.eventBox}>
                  <View style={styles.eventDate}>
                    <Text style={styles.eventDay}>{item.id}</Text>
                  </View>
                  <View style={styles.eventContent}>
                    <Text style={styles.description}>{item.name}</Text>
                    <Text
                      style={{
                        color: "blue",
                        marginTop: 6,
                        alignSelf: "flex-end",
                      }}
                    >
                      Chi tiết
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
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
            <MaterialIcons name="cancel" size={30} color="red" />
          </TouchableOpacity>
        </View>
        {selectDetail ? (
          <View>
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
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 30,
                  fontWeight: "600",
                }}
              >
                Thông tin hoạt động
              </Text>
            </View>
            <View style={styles.detailInfo}>
              <Text style={styles.subject}>{selectDetail.name}</Text>
              <View style={styles.body}>
                <Text style={styles.bodyText}>{selectDetail.description}</Text>
              </View>
            </View>
          </View>
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

export default CultivationActivities;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    margin: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: COLORS.green,
  },
  eventList: {
    marginTop: 20,
  },
  eventBox: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
  },
  eventDate: {
    flexDirection: "column",
    justifyContent: "center",
  },
  eventDay: {
    fontSize: 35,
    color: COLORS.primary,
    fontWeight: "600",
  },
  eventContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
    backgroundColor: COLORS.green,
    padding: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.white,
  },
  detailInfo: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: COLORS.green,
    borderRadius: 10,
  },
  subject: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "#222",
  },
  body: {
    marginTop: 5,
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
  },
  bodyText: {
    fontSize: 19,
    lineHeight: 24,
    color: "black",
  },
});
