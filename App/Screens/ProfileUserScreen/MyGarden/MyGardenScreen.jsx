import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import PageHeading from "../../../Components/PageHeading";
import { COLORS } from "../../../Constants";
import CultivationProcess from "./CultivationProcess";
import CameraExtraction from "./CameraExtraction";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FarmingProcess from "./FarmingProcess";
import InfoMyGarden from "./InfoMyGarden";
const tabs = [
  {
    name: "Thông tin",
    data: [],
  },
  {
    name: "Quy trình",
    data: [],
  },
  {
    name: "Quá trình",
    data: [],
  },
  {
    name: "Trích xuất",
    data: [],
  },
];
const MyGardenScreen = () => {
  const [selectedHeader, setSelectedHeader] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView style={{ height: "93%" }}>
        <View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <PageHeading title={"Vườn của tôi"} />
            <TouchableOpacity>
              <AntDesign
                name="camera"
                size={50}
                color={COLORS.green}
                style={{
                  alignItems: "center",
                  marginTop: 30,
                  paddingRight: 10,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.header}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {tabs.map((data, index) => (
                <View style={{ marginRight: 17 }}>
                  <Pressable onPress={() => setSelectedHeader(index)}>
                    <Text
                      style={[
                        styles.titleHeader,
                        selectedHeader == index && {
                          color: COLORS.green,
                          fontSize: 20,
                        },
                      ]}
                    >
                      {data.name}
                    </Text>

                    {selectedHeader == index && <View style={styles.line} />}
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </View>
          {selectedHeader == 0 && <InfoMyGarden />}
          {selectedHeader == 1 && <FarmingProcess />}
          {selectedHeader == 2 && <CultivationProcess />}
          {selectedHeader == 3 && <CameraExtraction />}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <MaterialCommunityIcons
          name="truck-delivery"
          size={45}
          color="green"
          onPress={() => setShowModal(!showModal)}
        />
        <TouchableOpacity
          style={styles.bookingBtn}
          onPress={() => navigation.push("profile/my-garden/request")}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "RobotoCondensed-Bold",
              color: COLORS.white,
              fontSize: 20,
            }}
          >
            Yêu cầu
          </Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={showModal}>
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
            onPress={() => setShowModal(!showModal)}
          >
            <MaterialIcons name="cancel" size={35} color="red" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default MyGardenScreen;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleHeader: {
    fontSize: 17,
    fontWeight: "600",
    color: COLORS.black,
    textAlign: "center",
  },
  line: {
    width: 100,
    height: 5,
    backgroundColor: COLORS.green,
    alignSelf: "center",
    marginTop: 3,
    borderRadius: 10,
  },
  bookingBtn: {
    width: "70%",
    padding: 13,
    backgroundColor: COLORS.green,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 99,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 99,
    borderBlockColor: COLORS.white,
    paddingLeft: 25,
    elevation: 4, // Add elevation for shadow
  },

  /**************** Modal *****************/
  containerModal: {
    marginTop: 30,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: COLORS.lightGray,
    alignItems: "center",
  },
});
