import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../../Constants";
import { Camera, CameraType } from "expo-camera";

const Scan = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 100,
          paddingHorizontal: SIZES.padding * 3,
        }}
      >
        <TouchableOpacity
          style={{
            width: 45,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("HomeNavigation")}
        >
          <Image
            source={icons.close}
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {/* <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Scan</Text> */}
        </View>

        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            backgroundColor: COLORS.green,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.info}
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderPayment() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 150,
          padding: SIZES.padding * 3,
          borderTopLeftRadius: SIZES.radius,
          borderTopRightRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}
      >
        {/* <Text style={{ ...FONTS.h4 }}>Another</Text> */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: SIZES.padding * 1,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => console.log("Phone Number")}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.lightpurple,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Image
                source={icons.phone}
                resizeMethod="cover"
                style={{
                  height: 25,
                  width: 25,
                  tintColor: COLORS.purple,
                }}
              />
            </View>
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>
              Phone Number
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: SIZES.padding * 2,
            }}
            onPress={() => console.log("Barcode")}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.lightGreen,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Image
                source={icons.barcode}
                resizeMode="cover"
                style={{
                  height: 25,
                  width: 25,
                  tintColor: COLORS.primary,
                }}
              />
            </View>
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>
              Barcode
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderScanFoucus() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.focus}
          resizeMode="stretch"
          style={{
            marginTop: "-120%",
            width: 300,
            height: 300,
          }}
        />
      </View>
    );
  }

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  return (
    // <View style={{ flex: 1, backgroundColor: COLORS.transparent }}>
    //   <RNCamera
    //     ref={(ref) => {
    //       this.camera = ref;
    //     }}
    //     style={{ flex: 1 }}
    //     captureAudio={false}
    //     type={RNCamera.Constants.Type.back}
    //     flashMode={RNCamera.Constants.FlashMode.off}
    //     onBarCodeRead={onBarCodeRead}
    //     androidCameraPermissionOptions={{
    //       title: "Permission to use camera",
    //       message: "Camera is required for barcode scanning",
    //       buttonPositive: "Ok",
    //       buttonNegative: "Cancel",
    //     }}
    //   >
    //     {renderHeader()}
    //   </RNCamera>
    // </View>
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Scan</Text>
          </TouchableOpacity>
        </View>
        {renderHeader()}
        {renderPayment()}
        {renderScanFoucus()}
        {/* {onBarCodeRead()} */}
      </Camera>
    </View>
  );
};
export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
