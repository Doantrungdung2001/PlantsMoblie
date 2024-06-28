import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../Constants";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import AUTH from "../../../Services/AuthService";
import UserInfoAsyncStorage from "../../../Utils/UserInfoAsyncStorage";
import styles from "./Login.Style";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectDisplayPassword, setSelectDisplayPassowrd] = useState();
  const [LoginStatus, setLoginStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add this state

  const handleLogin = async (email, password) => {
    setIsLoading(true); // Start loading
    try {
      const res = await AUTH.login({
        email: email,
        password: password,
      });
      if (res.data.status === 200) {
        setLoginStatus("success");
        UserInfoAsyncStorage.storeUser("UserInfo", res.data.metadata.metadata);
        navigation.push("Home");
      } else {
        setLoginStatus("false");
      }
    } catch (error) {
      if (error?.response?.data.code) {
        setLoginStatus("false");
      }
    } finally {
      setIsLoading(false); // End loading
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
            value={email}
          />
          <View style={styles.password}>
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor={COLORS.darkgray}
              secureTextEntry={!selectDisplayPassword}
              style={styles.textInputPassword}
              onChangeText={(password) => setPassword(password)}
              value={password}
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
        <TouchableOpacity onPress={() => navigation.push("EmailConfirm")}>
          <Text style={styles.forgetPassword}>Bạn quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => handleLogin(email, password)}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? ( // Show spinner if loading
            <ActivityIndicator size="small" color={COLORS.white} />
          ) : (
            <Text style={styles.textBtnLogin}>Đăng nhập</Text>
          )}
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
