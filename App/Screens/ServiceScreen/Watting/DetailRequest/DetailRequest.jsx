import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import styles from "./DetailRequest.Styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { formatDateTime, renderTypePlant } from "../../../../Utils/helper";
import ToastMessage from "../../../../Components/ToastMessage/ToastMessage";
import GARDEN_SERVICE_REQUEST from "../../../../Services/GardenRequestService";

const DetailRequest = () => {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [detailRequest, setDetailRequest] = useState(param.requestInfo);
  const [isLoading, setIsLoading] = useState(false);

  // Update dataGarden when route params change
  useEffect(() => {
    if (param?.requestInfo) {
      setDetailRequest(param.requestInfo);
    }
  }, [param.requestInfo]);

  const refetchAllGardenRequest = param.refetchAllGardenRequest;
  const toastRef = useRef(null);
  const [typeToast, setTypeToast] = useState("success");
  const [textToast, setTextToast] = useState();
  const [descriptionToast, setDescriptionToast] = useState();

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      if (id) {
        const result = await GARDEN_SERVICE_REQUEST.deleteGardenServiceRequest(
          id
        );
        console.log("Du lieu tra ve:", result?.data?.status);
        if (result?.data?.status === 200 || result?.data?.status === 201) {
          setTypeToast("success");
          setTextToast("Thành công");
          setDescriptionToast("Xoá thành công");
          handleShowToast();

          refetchAllGardenRequest();
          setTimeout(() => {
            navigation.goBack();
          }, 3000);
        }
      }
    } catch (error) {
      console.log(error);
      setTypeToast("danger");
      setTextToast("Không thành công");
      setDescriptionToast("Yêu cầu xóa thất bại");
      handleShowToast();
    } finally {
      setIsLoading(false);
    }
  };

  const confirmDelete = () => {
    Alert.alert("Xác nhận", "Bạn có muốn hủy không?", [
      {
        text: "Không",
        style: "cancel",
      },
      {
        text: "Có",
        onPress: () => {
          handleDelete(detailRequest.id);
        },
      },
    ]);
  };

  return (
    <ScrollView>
      <ToastMessage
        type={typeToast}
        text={textToast}
        description={descriptionToast}
        ref={toastRef}
      />
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
          <Text style={styles.itemText}>Sản lượng giao hàng</Text>
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
        <TouchableOpacity style={styles.button} onPress={confirmDelete}>
          {isLoading && <ActivityIndicator size="large" color="white" />}
          <Text style={styles.buttonText}>Hủy yêu cầu</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

export default DetailRequest;
