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
          <Text style={styles.infoValue}>jane.doe@example.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoValue}>San Francisco, CA</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Bio:</Text>
          <Text style={styles.infoValue}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </Text>
        </View>
      </View>
      <View style={styles.updateBtn}>
        <CustomButton label={"Chỉnh sửa thông tin"} onPress={() => {}} />
      </View>
    </View>
  );
};

export default ProfileInformation;
