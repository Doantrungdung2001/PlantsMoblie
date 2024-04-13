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

const Login = () => {
  const navigation = useNavigation();
  const [selectDisplayPassword, setSelectDisplayPassowrd] = useState(false);
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
            Đăng nhập
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
          onPress={() => navigation.push("Register")}
        >
          <Text
            style={{
              fontFamily: "RobotoCondensed-Bold",
              color: COLORS.black,
              textAlign: "center",
              fontSize: 19,
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
const styles = StyleSheet.create({});
