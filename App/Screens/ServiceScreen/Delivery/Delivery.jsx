import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import { MaterialIcons } from "@expo/vector-icons";
import UserInfoAsyncStorage from "../../../Utils/UserInfoAsyncStorage";
import styles from "./Delivery.Styles";
import {
  formatDateTime,
  renderTypeStatusDelivery,
} from "../../../Utils/helper";
import useListDelivery from "./useDelivery";
import NotData from "../../../Components/NotData/NotData";
const Delivery = () => {
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(null);
  let totalAmount = 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await UserInfoAsyncStorage.getUserInfo("UserInfo");
        setUserId(result.farm._id);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  const {
    allDelivery,
    isSuccessAllDelivery,
    isLoadingAllDelivery,
    refetchDelivery,
  } = useListDelivery({
    clientId: userId,
  });
  const [deleveryDetail, setDeleveryDetail] = useState(null);
  return (
    <ScrollView>
      <PageHeading title={"Thông tin giao hàng"} />
      {isSuccessAllDelivery && (
        <View style={{ padding: 10, marginTop: 10 }}>
          {allDelivery?.length > 0 ? (
            <View>
              {allDelivery?.map(
                (data, index) =>
                  data.status === "coming" && (
                    <TouchableOpacity
                      style={styles.cardComming}
                      onPress={() => {
                        setShowModal(!showModal);
                        setDeleveryDetail(data);
                      }}
                      key={index}
                    >
                      <View style={styles.header}>
                        <View>
                          <Text style={styles.headerTitle}>
                            Nông trại {data.farm.name} giao hàng
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
                        <Text style={{ marginTop: 8, fontSize: 18 }}>
                          Chi tiết
                        </Text>
                      </TouchableOpacity>
                    </TouchableOpacity>
                  )
              )}
            </View>
          ) : (
            <NotData text={"Không có đơn giao hàng"} />
          )}
        </View>
      )}
      {isLoadingAllDelivery && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
      <Modal animationType="slide" visible={showModal}>
        <ScrollView style={{ padding: 20, marginTop: 20 }}>
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
              <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Thông tin giao hàng</Text>
                <Text style={styles.date}>
                  {formatDateTime(deleveryDetail.time)}
                </Text>
                <Text style={styles.deliveryid}>
                  Mã đơn hàng : {deleveryDetail.id}
                </Text>
                <View style={styles.info}>
                  <Text style={styles.infoText}>
                    Từ : {deleveryDetail.farm.name}
                  </Text>
                  <Text style={styles.infoText}>
                    Đến: {deleveryDetail.client.name}
                  </Text>
                  <Text style={styles.infoText}>
                    Địa chỉ nhận hàng: {deleveryDetail.client.address}{" "}
                  </Text>
                  <Text style={styles.infoText}>
                    Thông tin liên hệ: {deleveryDetail.farm.email[0]}{" "}
                  </Text>
                  <Text style={styles.infoText}>
                    Hoặc: {deleveryDetail.farm.phone[0]}{" "}
                  </Text>
                </View>
                <Text style={styles.deliveryid}>
                  Ghi chú : {deleveryDetail.note}
                </Text>
                <View style={styles.divider} />
                {deleveryDetail.infoDetail.map((item, index) => {
                  totalAmount += item.amount; // Tính tổng số lượng
                  return (
                    <View style={styles.itemRow} key={index}>
                      <Text style={styles.itemText}>
                        {item.plant.plant_name}
                      </Text>
                      <Text style={styles.itemText}>{item.amount} kg</Text>
                    </View>
                  );
                })}

                <View style={styles.divider} />
                {/* <View style={styles.itemRow}>
                  <Text style={styles.itemText}>Tổng số lượng</Text>
                  <Text style={styles.itemText}>$10,300.00</Text>
                </View> */}

                {/* <View style={styles.divider} /> */}
                <View style={styles.totalRow}>
                  <Text style={styles.totalText}>Tổng số lượng</Text>
                  <Text style={styles.totalText}>{totalAmount} kg</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Đã nhận hàng</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          ) : (
            <NotData text={"Không có dữ liệu"} />
          )}
        </ScrollView>
      </Modal>
    </ScrollView>
  );
};

export default Delivery;
