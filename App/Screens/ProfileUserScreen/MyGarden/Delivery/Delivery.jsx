import {
  View,
  Text,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../../../Constants";
import { useRoute, useNavigation } from "@react-navigation/native";
import { formatDateTime } from "../../../../Utils/helper";
const Delivery = () => {
  const [showModal, setShowModal] = useState(false);
  const param = useRoute().params;
  const [dataDelivery, setDataDelivery] = useState(param.delivery);
  const [deleveryDetail, setDeleveryDetail] = useState(null);
  return (
    <ScrollView>
      <PageHeading title={"Thông tin giao hàng"} />
      <View style={{ padding: 10, marginTop: 10 }}>
        {dataDelivery.map((data, index) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => setShowModal(!showModal)}
            key={index}
          >
            <View style={styles.header}>
              <View>
                <Text style={styles.headerTitle}>
                  Giao hàng lần thứ {index + 1}
                </Text>
                <Text style={styles.headerSubtitle}>
                  {formatDateTime(data.time)}
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={{ marginTop: 8, fontSize: 18 }}>Chi tiết</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
      <Modal animationType="slide" visible={showModal}>
        <View style={{ padding: 20, marginTop: 20 }}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              marginBottom: 40,
            }}
            onPress={() => setShowModal(!showModal)}
          >
            <MaterialIcons name="cancel" size={35} color="red" />
          </TouchableOpacity>
          <View style={styles.detailInfo}>
            <Text style={styles.subject}>Thông tin giao rau</Text>
            <View style={styles.body}>
              <Text style={styles.bodyText}>Nội dung .................</Text>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.login]}
              //   onPress={() => navigation.push("Login")}
            >
              <Text style={styles.buttonText}>Xác nhận</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.register]}
              //   onPress={() => navigation.push("Register")}
            >
              <Text style={styles.buttonText}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Delivery;
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#ff7f50",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#ffffff",
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
  buttonsContainer: {
    flex: 2,
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "space-around",
  },
  button: {
    width: "48%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  login: {
    backgroundColor: COLORS.green,
    shadowColor: COLORS.green,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
  },
  register: {
    backgroundColor: "#DB4437",
    shadowColor: "#DB4437",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
  },
});
