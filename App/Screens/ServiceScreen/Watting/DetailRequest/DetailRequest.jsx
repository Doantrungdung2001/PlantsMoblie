import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./DetailRequest.Styles";
import { useRoute } from "@react-navigation/native";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { formatDateTime, renderTypePlant } from "../../../../Utils/helper";
const DetailRequest = () => {
  const param = useRoute().params;
  const [detailRequest, setDetailRequest] = useState(param.requestInfo);

  // Update dataGarden when route params change
  useEffect(() => {
    if (param?.requestInfo) {
      setDetailRequest(param.requestInfo);
    }
  }, [param.requestInfo]);
  return (
    <View>
      <PageHeading title={"Thông tin chi tiết"} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Thông tin yêu cầu</Text>
        <Text style={styles.date}>{formatDateTime(detailRequest.time)}</Text>
        <View style={styles.info}>
          <Text style={styles.infoText}>
            Nông trại: {detailRequest.farm_name}
          </Text>
          <Text style={styles.infoText}>{detailRequest.farm.address}</Text>
          <Text style={styles.infoText}>
            Thông tin liên hệ: {detailRequest.farm?.email[0]} hoặc{" "}
            {detailRequest.farm?.phone[0]}
          </Text>
          <Text style={styles.infoText}>
            Ghi chú thêm : {detailRequest.note}
          </Text>
        </View>
        <View style={styles.divider} />
        {detailRequest?.listplant?.length > 0 &&
          detailRequest.listplant.map((item, index) => (
            <View style={styles.itemRow} key={index}>
              <Text style={styles.itemText}>{item.plant_name}</Text>
              <Text style={styles.itemText}>
                {renderTypePlant(item.plant_type)}
              </Text>
            </View>
          ))}

        <View style={styles.divider} />
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>Sản lượng dự kiến</Text>
          <Text style={styles.itemText}>
            {detailRequest?.gardenServiceTemplate?.expectedOutput} kg
          </Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>Tuần suất giao hàng</Text>
          <Text style={styles.itemText}>
            {detailRequest?.gardenServiceTemplate?.expectDeliveryPerWeek}/ tuần
          </Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>Số lượng giao hàng</Text>
          <Text style={styles.itemText}>
            {detailRequest?.gardenServiceTemplate?.expectDeliveryAmount}/ 1 lần
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Tổng tiền</Text>
          <Text style={styles.totalText}>
            {detailRequest?.gardenServiceTemplate?.price} VND
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hủy yêu cầu</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DetailRequest;
