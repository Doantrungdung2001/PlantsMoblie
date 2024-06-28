import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import styles from "./UpdateInformation.Styles";
import InputField from "../../../Components/InputField/InputField";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import ToastMessage from "../../../Components/ToastMessage/ToastMessage";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import CLIENT from "../../../Services/ClientService";

const UpdateInformation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { dataClient, refetchClientInformation } = route.params;

  // State cho từng trường input
  const [name, setName] = useState(dataClient.name);
  const [phone, setPhone] = useState(dataClient.phone);
  const [address, setAddress] = useState(dataClient.address);

  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastRef = useRef(null);
  const [typeToast, setTypeToast] = useState("success");
  const [textToast, setTextToast] = useState("");
  const [descriptionToast, setDescriptionToast] = useState("");

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
      setIsToastVisible(true);
    }
  };

  const updateInfoUser = async (name, phone, address) => {
    try {
      const res = await CLIENT.updateInfo({ name, phone, address });
      refetchClientInformation();
      if (res.data.status === 200 || res.data.status === 201) {
        setTypeToast("success");
        setTextToast("Thành công");
        setDescriptionToast("Cập nhật thông tin tài khoản thành công");
        handleShowToast();
      }
      console.log("update success,", name, phone, address);
    } catch (error) {
      if (error?.response?.data.code) {
        setTypeToast("danger");
        setTextToast("Không thành công");
        setDescriptionToast("Cập nhật thất bại");
        handleShowToast();
      }
      console.log("fail: --", error);
    }
  };

  useEffect(() => {
    if (isToastVisible) {
      setTimeout(() => {
        navigation.navigate("profile/info-view");
        setIsToastVisible(false);
      }, 3000);
    }
  }, [isToastVisible]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ToastMessage
        type={typeToast}
        text={textToast}
        description={descriptionToast}
        ref={toastRef}
      />
      <PageHeading title={"Chỉnh sửa thông tin"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <InputField
          label={"Họ và tên"}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          value={name}
          onChangeText={setName}
        />
        <InputField
          label={"Số điện thoại"}
          icon={
            <Foundation
              name="telephone"
              size={22}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          value={phone}
          onChangeText={setPhone}
        />
        <InputField
          label={"Địa chỉ nhà"}
          icon={
            <FontAwesome5
              name="house-user"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          value={address}
          onChangeText={setAddress}
        />
        <TouchableOpacity
          onPress={() => navigation.push("profile/change-password")}
        >
          <Text style={styles.forgetPassword}>Đổi mật khẩu?</Text>
        </TouchableOpacity>
        <CustomButton
          label={"Cập nhật"}
          onPress={() => {
            updateInfoUser(name, phone, address);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateInformation;
