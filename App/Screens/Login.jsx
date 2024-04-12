import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS} from "../Constants";

const Login = () => {
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
            Đăng nhập
          </Text>
        </View>
        <View style={{ marginVertical: 30 }}>
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
          />
          <TextInput
            placeholder="Mật khẩu"
            placeholderTextColor={COLORS.darkgray}
            secureTextEntry
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 20,
              padding: 20,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              marginVertical: 10,
            }}
          />
        </View>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "Roboto-BoldItalic",
              fontSize: 18,
              alignSelf: "flex-end",
              color: COLORS.primary,
            }}
          >
            Bạn quên mật khẩu?
          </Text>
        </TouchableOpacity>
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
        >
          <Text
            style={{
              fontFamily: "RobotoCondensed-Bold",
              color: COLORS.white,
              textAlign: "center",
              fontSize: 25,
            }}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 20,
            backgroundColor: COLORS.white,
            borderRadius: 10,
            shadowColor: COLORS.green,
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoCondensed-Bold",
              color: COLORS.black,
              textAlign: "center",
              fontSize: 25,
            }}
          >
            Bạn chưa có tài khoản?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
});
