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
import AUTH from "../../../Services/AuthService";
import UserInfoAsyncStorage from "../../../Utils/UserInfoAsyncStorage";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectDisplayPassword, setSelectDisplayPassowrd] = useState();
  const [LoginStatus, setLoginStatus] = useState("");
  const handleLogin = async (email, password) => {
    try {
      const res = await AUTH.login({
        email: email,
        password: password,
      });
      // setLoginSucces(true);
      // console.log("res: ", res);
      // const accessToken = res?.data?.metadata?.metadata?.tokens?.accessToken;
      // const refreshToken = res?.data?.metadata?.metadata?.tokens?.refreshToken;
      // if (accessToken) {
      //   setAccessToken(accessToken);
      // }
      // if (refreshToken) {
      //   setRefreshToken(refreshToken);
      // }
      // const id = res?.data?.metadata?.metadata?.farm?._id;
      // if (id) {
      //   localStorage.setItem("id", id);
      // }
      if (res.data.status === 200) {
        setLoginStatus("succes");
        // UserInfoAsyncStorage.storeUser("UserInfo", res.data.metadata.metadata);
        UserInfoAsyncStorage.clearUserInfo();
      }
      console.log("Login success");

      // UserInfoAsyncStorage.getUserInfo("UserInfo")
      //   .then((result) => {
      //     console.log("Data :", result);
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //   });
      // navigation.push("Home")
    } catch (error) {
      console.error(error?.response?.data);
      if (error?.response?.data.code) {
        setLoginStatus("false");
      }
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Đăng nhập</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={COLORS.darkgray}
            style={styles.textInputEmail}
            onChangeText={(email) => setEmail(email)}
          />
          <View style={styles.password}>
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor={COLORS.darkgray}
              secureTextEntry={!selectDisplayPassword}
              style={styles.textInputPassword}
              onChangeText={(password) => setPassword(password)}
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
          {LoginStatus === "false" && (
            <Text style={styles.alertLogin}>
              Tài khoản hoặc mật khẩu đã sai
            </Text>
          )}
        </View>
        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Bạn quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => handleLogin(email, password)}
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
  alertLogin: {
    color: "red",
    fontSize: 17,
  },
});
