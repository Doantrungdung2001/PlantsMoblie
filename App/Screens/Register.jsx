import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../Constants";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
const Register = () => {
  const navigation = useNavigation();
  const [selectDisplayPassword, setSelectDisplayPassowrd] = useState(false);
  const [selectConfirmDisplayPassword, setSelectConfirmDisplayPassowrd] =
    useState(false);

  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCheckEmail = () => {
    if (isValidEmail(email)) {
      Alert.alert("Email hợp lệ");
    } else {
      Alert.alert("Email không hợp lệ");
    }
  };
  return (
    <SafeAreaView style={{ marginTop: 60 }}>
      <View style={{ padding: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 40,
              color: COLORS.primary,
              fontFamily: "RobotoCondensed-Bold",
            }}
          >
            Đăng ký tài khoản
          </Text>
        </View>
        <View style={{ marginVertical: 30 }}>
          <View>
            <TextInput
              placeholder="Email"
              placeholderTextColor={COLORS.darkgray}
              style={{
                fontFamily: "Roboto-Medium",
                fontSize: 20,
                padding: 20,
                backgroundColor: COLORS.white,
                borderRadius: 10,
                marginVertical: 10,
              }}
              value={email}
              onChangeText={setEmail}
            />
            {/* <Button title="Kiểm tra Email" onPress={handleCheckEmail} /> */}
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor={COLORS.darkgray}
              secureTextEntry={!selectDisplayPassword}
              style={{
                fontFamily: "Roboto-Medium",
                fontSize: 20,
                padding: 20,
                backgroundColor: COLORS.white,
                borderRadius: 10,
                marginVertical: 10,
                flex: 1,
              }}
            />
            <TouchableOpacity
              style={{ justifyContent: "center" }}
              onPress={() => setSelectDisplayPassowrd(!selectDisplayPassword)}
            >
              {selectDisplayPassword ? (
                <Entypo
                  name="eye-with-line"
                  size={24}
                  color="black"
                  style={{ position: "absolute", right: 20 }}
                />
              ) : (
                <Entypo
                  name="eye"
                  size={24}
                  color="black"
                  style={{ position: "absolute", right: 20 }}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              placeholder="Xác nhận mật khẩu"
              placeholderTextColor={COLORS.darkgray}
              secureTextEntry={!selectConfirmDisplayPassword}
              style={{
                fontFamily: "Roboto-Medium",
                fontSize: 20,
                padding: 20,
                backgroundColor: COLORS.white,
                borderRadius: 10,
                marginVertical: 10,
                flex: 1,
              }}
            />
            <TouchableOpacity
              style={{ justifyContent: "center" }}
              onPress={() =>
                setSelectConfirmDisplayPassowrd(!selectConfirmDisplayPassword)
              }
            >
              {selectConfirmDisplayPassword ? (
                <Entypo
                  name="eye-with-line"
                  size={24}
                  color="black"
                  style={{ position: "absolute", right: 20 }}
                />
              ) : (
                <Entypo
                  name="eye"
                  size={24}
                  color="black"
                  style={{ position: "absolute", right: 20 }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            padding: 20,
            backgroundColor: COLORS.primary,
            marginVertical: 30,
            borderRadius: 10,
            shadowColor: COLORS.green,
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              fontFamily: "RobotoCondensed-Bold",
              color: COLORS.white,
              textAlign: "center",
              fontSize: 25,
            }}
          >
            Đăng ký
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: COLORS.white,
            borderRadius: 10,
            shadowColor: COLORS.green,
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              fontFamily: "RobotoCondensed-Bold",
              color: COLORS.black,
              textAlign: "center",
              fontSize: 19,
            }}
          >
            Bạn đã có tài khoản?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
