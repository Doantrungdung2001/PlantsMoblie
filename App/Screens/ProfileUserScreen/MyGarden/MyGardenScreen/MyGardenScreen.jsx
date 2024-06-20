import {
  ScrollView,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { COLORS } from "../../../../Constants";
import CultivationProcess from "../CultivationProcess/CultivationProcess";
import CameraExtraction from "../CameraExtraction/CameraExtraction";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PlantFarming from "../PlantFarming/PlantFarming";
import InfoMyGarden from "../InforMyGarden/InfoMyGarden";
import { useRoute, useNavigation } from "@react-navigation/native";
import usePlantFarming from "../PlantFarming/usePlantFarming";
import useListProcess from "../CultivationProcess/useCultivationProcess";
import useCameraExtraction from "../CameraExtraction/useCameraExtraction";
import styles from "./MyGardenScreen.Styles";

const tabs = [
  {
    name: "Thông tin",
    component: InfoMyGarden,
  },
  {
    name: "Quy trình",
    component: PlantFarming,
  },
  {
    name: "Quá trình",
    component: CultivationProcess,
  },
  {
    name: "Trích xuất",
    component: CameraExtraction,
  },
];

const MyGardenScreen = () => {
  const [selectedHeader, setSelectedHeader] = useState(0);
  const [loading, setLoading] = useState(false);
  const param = useRoute().params;
  const [dataGarden, setDataGarden] = useState(param.dataMyGarden);
  const navigation = useNavigation();

  // Update dataGarden when route params change
  useEffect(() => {
    if (param?.dataMyGarden) {
      setDataGarden(param.dataMyGarden);
    }
  }, [param.dataMyGarden]);

  const { refetcPlantFarming } = usePlantFarming({
    gardenId: dataGarden.id,
  });

  const { refetcAllProcess } = useListProcess({
    gardenId: dataGarden.id,
  });

  const { refetcCameraExtraction } = useCameraExtraction({
    gardenId: dataGarden.id,
  });

  const SelectedComponent = tabs[selectedHeader].component;

  const handleTabChange = (index) => {
    setLoading(true);
    setSelectedHeader(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedHeader === 1) {
        await refetcPlantFarming();
      } else if (selectedHeader === 2) {
        await refetcAllProcess();
      } else if (selectedHeader === 3) {
        await refetcCameraExtraction();
      }
      setLoading(false);
    };

    fetchData();
  }, [
    selectedHeader,
    refetcPlantFarming,
    refetcAllProcess,
    refetcCameraExtraction,
  ]);

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
              {tabs.map((tab, index) => (
                <View style={{ marginRight: 17 }} key={index}>
                  <Pressable onPress={() => handleTabChange(index)}>
                    <Text
                      style={[
                        styles.titleHeader,
                        selectedHeader === index && {
                          color: COLORS.green,
                          fontSize: 20,
                        },
                      ]}
                    >
                      {tab.name}
                    </Text>

                    {selectedHeader === index && <View style={styles.line} />}
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <SelectedComponent gardenId={dataGarden.id} infor={dataGarden} />
          )}
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
