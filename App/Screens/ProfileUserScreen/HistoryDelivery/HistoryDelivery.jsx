import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import PageHeading from "../../../Components/PageHeading/PageHeading";
import NotData from "../../../Components/NotData/NotData";
import UserInfoAsyncStorage from "../../../Utils/UserInfoAsyncStorage";
import useListDelivery from "../../ServiceScreen/Delivery/useDelivery";
import { COLORS } from "../../../Constants";
import styles from "./HistoryDelivery.Styles";
import {
  formatDateTime,
  renderTypeStatusDelivery,
} from "../../../Utils/helper";

const dataFilter = [
  {
    title: "Đã hoàn thành",
    key_code: "completed",
  },
  {
    title: "Đã hủy",
    key_code: "canceled",
  },
];

const HistoryGrowVegetables = () => {
  let totalAmount = 0;
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [completedDeliveries, setCompletedDeliveries] = useState([]);
  const [canceledDeliveries, setCanceledDeliveries] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(0); // Mặc định là đã hoàn thành
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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

  useEffect(() => {
    if (!allDelivery) return;

    // Lọc và cập nhật danh sách đã hoàn thành
    const filteredCompleted = allDelivery.filter(
      (delivery) => delivery.status === "done"
    );
    setCompletedDeliveries(filteredCompleted);

    // Lọc và cập nhật danh sách đã hủy
    const filteredCanceled = allDelivery.filter(
      (delivery) => delivery.status === "cancel"
    );
    setCanceledDeliveries(filteredCanceled);
  }, [allDelivery]);

  const handleFilterPress = (index) => {
    setSelectedFilter(index);
  };

  const renderDeliveryCards = (deliveries) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentDeliveries = deliveries.slice(startIndex, endIndex);

    if (currentDeliveries.length > 0) {
      return currentDeliveries.map((data, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.cardContainer, data.status === "done" ? styles.cardDone : styles.cardCanceled]}
          onPress={() => {
            setShowModal(!showModal);
            setDeleveryDetail(data);
          }}
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
            <Text style={{ marginTop: 8, fontSize: 18 }}>Chi tiết</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ));
    } else {
      return <NotData text={"Không có đơn giao hàng"} />;
    }
  };

  const totalPages = Math.ceil(
    selectedFilter === 0
      ? completedDeliveries.length / itemsPerPage
      : canceledDeliveries.length / itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeading title={"Lịch sử giao hàng"} />

      {/* Filter */}
      <View style={{ marginLeft: 15 }}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            gap: 10,
            paddingVertical: 10,
            marginBottom: 10,
          }}
        >
          {dataFilter.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleFilterPress(index)}
              style={[
                styles.filterContainer,
                selectedFilter === index && { backgroundColor: COLORS.primary },
              ]}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Render danh sách */}
      {selectedFilter === 0 && isSuccessAllDelivery && (
        <View style={{ padding: 10, marginTop: 10 }}>
          {renderDeliveryCards(completedDeliveries)}
        </View>
      )}

      {selectedFilter === 1 && isSuccessAllDelivery && (
        <View style={{ padding: 10, marginTop: 10 }}>
          {renderDeliveryCards(canceledDeliveries)}
        </View>
      )}

      {/* Hiển thị loading khi đang tải dữ liệu */}
      {isLoadingAllDelivery && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}

      {/* Modal hiển thị chi tiết đơn hàng */}
      <Modal animationType="slide" visible={showModal}>
        <View style={{ padding: 20, marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => setShowModal(!showModal)}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <MaterialIcons name="cancel" size={35} color="red" />
          </TouchableOpacity>
          {deleveryDetail ? (
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
                    <Text style={styles.itemText}>{item.plant.plant_name}</Text>
                    <Text style={styles.itemText}>{item.amount} kg</Text>
                  </View>
                );
              })}
              <View style={styles.divider} />
              <View style={styles.totalRow}>
                <Text style={styles.totalText}>Tổng số lượng</Text>
                <Text style={styles.totalText}>{totalAmount} kg</Text>
              </View>
            </ScrollView>
          ) : (
            <NotData text={"Không có dữ liệu"} />
          )}
        </View>
      </Modal>

      {/* Phân trang */}
      <View style={styles.paginationContainer}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationButton,
              currentPage === index + 1 && styles.paginationButtonActive,
            ]}
            onPress={() => handlePageChange(index + 1)}
          >
            <Text style={styles.paginationText}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default HistoryGrowVegetables;
