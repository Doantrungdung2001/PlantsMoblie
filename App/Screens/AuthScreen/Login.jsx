import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../Constants";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const Login = () => {
  const navigation = useNavigation();
  const [selectDisplayPassword, setSelectDisplayPassowrd] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Đăng nhập</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={COLORS.darkgray}
            style={styles.textInputEmail}
          />
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
                  style={styles.displayPassword}
                />
              ) : (
                <Entypo
                  name="eye"
                  size={24}
                  color="black"
                  style={styles.displayPassword}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Bạn quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textBtnLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.push("Register")}
        >
          <Text style={styles.textBtnRegister}>Bạn chưa có tài khoản?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 20,
  },
  header: {
    alignItems: "center",
  },
  headerText: {
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
  displayPassword: {
    position: "absolute",
    right: 20,
  },
  forgetPassword: {
    fontFamily: "Roboto-BoldItalic",
    fontSize: 18,
    alignSelf: "flex-end",
    color: COLORS.primary,
  },
  btnLogin: {
    padding: 20,
    backgroundColor: COLORS.primary,
    marginVertical: 30,
    borderRadius: 10,
    shadowColor: COLORS.green,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textBtnLogin: {
    fontFamily: "RobotoCondensed-Bold",
    color: COLORS.white,
    textAlign: "center",
    fontSize: 25,
  },
  btnRegister: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: COLORS.green,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textBtnRegister: {
    fontFamily: "RobotoCondensed-Bold",
    color: COLORS.black,
    textAlign: "center",
    fontSize: 19,
  },
});
