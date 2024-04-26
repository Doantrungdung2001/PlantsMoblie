import React, { useState } from "react";
import {
  Text,
  View,
  Alert,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { COLORS } from "../../Constants";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import styles from "./Cultivation.Styles";
const dataCutivation = [
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
  const [showModal, setShowModal] = useState(false);
  const [selectDetail, setSelectDeatil] = useState(false);
  console.log(selectDetail);
  showAlert = (viewId) => {
    Alert.alert("alert", "event clicked " + viewId);
  };
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={dataCutivation}
          style={styles.productList}
          renderItem={(activity, index) => {
            return (
              <TouchableOpacity
                style={styles.productCard}
                onPress={() => {
                  setSelectDeatil(activity);
                  setShowModal(!showModal);
                }}
              >
                <View style={styles.productInfo}>
                  <View style={{ alignSelf: "flex-start" }}>
                    <Text style={styles.productName}>{activity.item.name}</Text>
                  </View>
                  <View style={{ alignSelf: "flex-end" }}>
                    <AntDesign name="infocirlce" size={24} color="black" />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{ paddingHorizontal: 16 }}
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
            ></View>
            <View style={styles.detailInfo}>
              <Text style={styles.subject}>{selectDetail.item.name}</Text>
              <View style={styles.body}>
                <Text style={styles.bodyText}>
                  {selectDetail.item.description}
                </Text>
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
