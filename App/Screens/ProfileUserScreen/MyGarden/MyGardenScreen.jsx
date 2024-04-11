import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import PageHeading from "../../../Components/PageHeading";
import { COLORS } from "../../../Constants";
import CultivationProcess from "./CultivationProcess";
import CameraExtraction from "./CameraExtraction";
const tabs = [
  {
    name: "Quá trình nông trại",
    data: [],
  },
  {
    name: "Trích xuất hệ thống",
    data: [],
  },
];
const MyGardenScreen = () => {
  const [selectedHeader, setSelectedHeader] = useState(0);
  return (
    <ScrollView style={{ marginTop: 15 }}>
      <View>
        <PageHeading title={"Vườn của tôi"} />
        <Text
          style={{
            fontSize: 30,
            fontFamily: "RobotoCondensed-Bold",
            textAlign: "center",
          }}
        >
          Tên dự án{" "}
        </Text>
        <View style={styles.header}>
          {tabs.map((data, index) => (
            <Pressable onPress={() => setSelectedHeader(index)}>
              <Text
                style={[
                  styles.titleHeader,
                  selectedHeader == index && { color: COLORS.green },
                ]}
              >
                {data.name}
              </Text>

              {selectedHeader == index && <View style={styles.line} />}
            </Pressable>
          ))}
        </View>
        {selectedHeader == 0 && <CultivationProcess />}
        {selectedHeader == 1 && <CameraExtraction />}
      </View>
    </ScrollView>
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
    width: 120,
    height: 5,
    backgroundColor: COLORS.green,
    alignSelf: "center",
    marginTop: 3,
    borderRadius: 10,
  },
});
