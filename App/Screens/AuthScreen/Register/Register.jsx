import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useRef } from "react";
import { COLORS } from "../../../Constants";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import styles from "./Register.Style";
import AUTH from "../../../Services/AuthService";
import ToastMessage from "../../../Components/ToastMessage/ToastMessage";

const Register = () => {
  const navigation = useNavigation();
  const [selectDisplayPassword, setSelectDisplayPassowrd] = useState(false);
  const [selectConfirmDisplayPassword, setSelectConfirmDisplayPassowrd] =
    useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [confirmPasswordClicked, setConfirmPasswordClicked] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(true);
  const [loading, setLoading] = useState(false); // Loading state

  const toastRef = useRef(null);
  const [typeToast, setTypeToast] = useState("success");
  const [textToast, setTextToast] = useState();
  const [descriptionToast, setDescriptionToast] = useState();

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailValid(isValidEmail(text));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordsMatch(text === confirmPassword);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setPasswordsMatch(text === password);
  };

  const handleConfirmPasswordFocus = () => {
    setConfirmPasswordClicked(true);
  };

  const Register = async (name, email, password) => {
    try {
      const res = await AUTH.register({
        name: name,
        email: email,
        password: password,
      });
      if (res.data.status === 200 || res.data.status === 201) {
        setTypeToast("success");
        setTextToast("Đăng ký thành công");
        setDescriptionToast(
          "Bạn sẽ được chuyển đến trang đăng nhập trong giây lát"
        );
        handleShowToast();
        setTimeout(() => {
          navigation.push("Login");
        }, 3000);
      }
      console.log("Register success");
    } catch (error) {
      if (error?.response?.data.code) {
        setTypeToast("danger");
        setTextToast("Không thành công");
        setDescriptionToast("Tài khoản đã tồn tại");
        handleShowToast();
      }
      console.log("Register fail: --", error);
    } finally {
      setLoading(false); // Stop loading after the registration process
    }
  };

  const handleRegisterPress = () => {
    if (!name || !email || !password || !confirmPassword) {
      setAllFieldsFilled(false);
      return;
    }

    if (emailValid && passwordsMatch) {
      setLoading(true); // Start loading when the registration process starts
      Register(name, email, password);
    } else {
      alert("Vui lòng nhập email hợp lệ và mật khẩu khớp");
    }
  };

  return (
    <SafeAreaView>
      <ToastMessage
        type={typeToast}
        text={textToast}
        description={descriptionToast}
        ref={toastRef}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Đăng ký tài khoản</Text>
        </View>
        <View style={styles.content}>
          <View>
            <TextInput
              placeholder="Tên"
              placeholderTextColor={COLORS.darkgray}
              style={styles.textInputEmail}
              value={name}
              onChangeText={handleNameChange}
            />
          </View>
          <View>
            <TextInput
              placeholder="Email"
              placeholderTextColor={COLORS.darkgray}
              style={styles.textInputEmail}
              value={email}
              onChangeText={handleEmailChange}
            />
            {!emailValid && (
              <Text style={styles.errorText}>Email không hợp lệ</Text>
            )}
          </View>

          <View style={styles.password}>
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor={COLORS.darkgray}
              secureTextEntry={!selectDisplayPassword}
              style={styles.textInputPassword}
              value={password}
              onChangeText={handlePasswordChange}
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
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              onFocus={handleConfirmPasswordFocus}
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
          {!passwordsMatch && confirmPasswordClicked && (
            <Text style={styles.errorText}>Mật khẩu không khớp</Text>
          )}
          {/* {!allFieldsFilled && (
            <Text style={styles.errorText}>
              Tất cả các trường phải được điền
            </Text>
          )} */}
        </View>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleRegisterPress}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.white} />
          ) : (
            <Text style={styles.textBtnRegister}>Đăng ký</Text>
          )}
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
