import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../Constants";
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
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Đăng ký tài khoản</Text>
        </View>
        <View style={styles.content}>
          <View>
            <TextInput
              placeholder="Email"
              placeholderTextColor={COLORS.darkgray}
              style={styles.textInputEmail}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.password}>
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor={COLORS.darkgray}
              secureTextEntry={!selectDisplayPassword}
              style={styles.textInputPassword}
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
                  style={styles.dispalyPassword}
                />
              ) : (
                <Entypo
                  name="eye"
                  size={24}
                  color="black"
                  style={styles.dispalyPassword}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.password}>
            <TextInput
              placeholder="Xác nhận mật khẩu"
              placeholderTextColor={COLORS.darkgray}
              secureTextEntry={!selectConfirmDisplayPassword}
              style={styles.textInputPassword}
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
                  style={styles.dispalyPassword}
                />
              ) : (
                <Entypo
                  name="eye"
                  size={24}
                  color="black"
                  style={styles.dispalyPassword}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textBtnRegister}>Đăng ký</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textBtnLogin}>Bạn đã có tài khoản?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 20,
  },
  header: {
    alignItems: "center",
  },
  textHeader: {
    fontSize: 40,
    color: COLORS.primary,
    fontFamily: "RobotoCondensed-Bold",
  },
  content: {
    marginVertical: 30,
  },
  textInputEmail: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginVertical: 10,
  },
  password: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInputPassword: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginVertical: 10,
    flex: 1,
  },
  dispalyPassword: {
    position: "absolute",
    right: 20,
  },
  btnRegister: {
    padding: 20,
    backgroundColor: COLORS.primary,
    marginVertical: 30,
    borderRadius: 10,
    shadowColor: COLORS.green,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textBtnRegister: {
    fontFamily: "RobotoCondensed-Bold",
    color: COLORS.white,
    textAlign: "center",
    fontSize: 25,
  },
  btnLogin: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: COLORS.green,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textBtnLogin: {
    fontFamily: "RobotoCondensed-Bold",
    color: COLORS.black,
    textAlign: "center",
    fontSize: 19,
  },
});
