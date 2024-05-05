import {
  ScrollView,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { COLORS } from "../../../../Constants";
import CultivationProcess from "../CultivationProcess/CultivationProcess";
import CameraExtraction from "../CameraExtraction/CameraExtraction";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PlantFarming from "../PlantFarming/PlantFarming";
import InfoMyGarden from "../InforMyGarden/InfoMyGarden";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "./MyGardenScreen.Styles";
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
  const param = useRoute().params;
  const [dataGarden, setDataGarden] = useState(param.dataMyGarden);
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
            <TouchableOpacity
              onPress={() => navigation.push("profile/my-garden/livecamera")}
            >
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
          {selectedHeader == 0 && <InfoMyGarden infor={dataGarden} />}
          {selectedHeader == 1 && <PlantFarming gardenId={dataGarden.id} />}
          {selectedHeader == 2 && (
            <CultivationProcess gardenId={dataGarden.id} />
          )}
          {selectedHeader == 3 && <CameraExtraction gardenId={dataGarden.id} />}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <MaterialCommunityIcons
          name="truck-delivery"
          size={45}
          color="green"
          onPress={() =>
            navigation.push("profile/my-garden/delivery", {
              garden: dataGarden,
            })
          }
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
    </View>
  );
};

export default MyGardenScreen;
