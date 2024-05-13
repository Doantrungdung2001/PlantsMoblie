import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./ProfileInformation.Styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../../../Components/CustomButton/CustomButton";
const ProfileInformation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.styleGoBack}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
          }}
          style={styles.avatar}
        />
        <Text style={[styles.name, styles.textWithShadow]}>Jane Doe</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>doantrungdung2001@gmail.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoValue}>
            Vinh Trai, Trung Xa , Luong Tai , Bac Ninh
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Ngay sinh</Text>
          <Text style={styles.infoValue}>19/10/2001</Text>
        </View>
      </View>
      <View style={styles.updateBtn}>
        <CustomButton
          label={"Chỉnh sửa thông tin"}
          onPress={() => navigation.push("profile/update-info")}
        />
      </View>
    </View>
  );
};

export default ProfileInformation;
