import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import styles from "./Delivery.Styles";
import {
  formatDateTime,
  renderTypeStatusDelivery,
} from "../../../../Utils/helper";
import useListDelivery from "./useDelivery";
const Delivery = () => {
  const [showModal, setShowModal] = useState(false);
  const param = useRoute().params;
  const { allDelivery, isSuccessAllDelivery, isLoadingAllDelivery } =
    useListDelivery({
      gardenId: param.garden.id,
    });
  const [deleveryDetail, setDeleveryDetail] = useState(null);
  return (
    <ScrollView>
      <PageHeading title={"Thông tin giao hàng"} />
      {isSuccessAllDelivery && (
        <View style={{ padding: 10, marginTop: 10 }}>
          {allDelivery.map((data, index) => (
            <TouchableOpacity
              style={
                data.status === "cancel"
                  ? styles.cardCanceled
                  : data.status === "coming"
                  ? styles.cardComming
                  : styles.cardDone
              }
              onPress={() => {
                setShowModal(!showModal);
                setDeleveryDetail(data?.deliveryDetails);
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
                  <Text style={styles.headerStatus}>
                    {renderTypeStatusDelivery(data.status)}
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={{ marginTop: 8, fontSize: 18 }}>Chi tiết</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {isLoadingAllDelivery && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
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
          {deleveryDetail ? (
            <View>
              <View style={styles.detailInfo}>
                <Text style={styles.subject}>Thông tin giao rau</Text>
                <View style={styles.body}>
                  {deleveryDetail.map((data, index) => {
                    return (
                      data.amount > 0 && (
                        <View
                          key={index}
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text style={styles.bodyText}>
                            {data.plant.plant_name}
                          </Text>
                          <Text style={styles.bodyText}>
                            {data.amount} (kg)
                          </Text>
                        </View>
                      )
                    );
                  })}
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
          ) : (
            <Text>Không có dữ liệu</Text>
          )}
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Delivery;
