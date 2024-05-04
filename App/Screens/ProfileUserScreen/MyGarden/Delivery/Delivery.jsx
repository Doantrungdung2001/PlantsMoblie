import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "./Delivery.Styles";
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
            onPress={() => {
              setShowModal(!showModal);
              setDataDelivery(data?.deliveryDetails);
            }}
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
