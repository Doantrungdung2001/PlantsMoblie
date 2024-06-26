import { Text, View, ScrollView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import styles from "./CultivationProcess.Styles";
import {
  formatTime,
  renderTypeProcess,
  formatDate,
} from "../../../../../Utils/helper";
import PageHeading from "../../../../../Components/PageHeading/PageHeading";
import { COLORS } from "../../../../../Constants";
const CultivationProcess = () => {
  const param = useRoute().params;
  const [dataProcess, setDataProcess] = useState(param.processInfo);

  // Update dataGarden when route params change
  useEffect(() => {
    if (param?.processInfo) {
      setDataProcess(param.processInfo);
    }
  }, [param.processInfo]);

  const getBackgroundColor = (type) => {
    switch (type) {
      case "cultivation":
        return "#E0FFFF";
      case "planting":
        return "#E6E6FA";
      case "pesticide":
        return "#FAF0E6";
      case "fertilize":
        return "#FAFAD2";
      default:
        return "#ff7f50";
    }
  };

  const renderClassItem = ({ item }) => (
    <View style={styles.classItem}>
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>{formatTime(item.time)}</Text>
          {/* <Text style={styles.endTime}>{item.endTime}</Text> */}
        </View>

        <View
          style={[
            styles.card,
            { backgroundColor: getBackgroundColor(item.type) },
          ]}
        >
          <Text style={styles.cardTitle}>{renderTypeProcess(item.type)}</Text>
          <Text style={styles.cardDate}>{formatDate(item.time)}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <PageHeading title={"Chi tiết quá trình canh tác"} />
      {dataProcess?.length > 0 ? (
        <View>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 16 }}
            data={dataProcess}
            renderItem={renderClassItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 30,
              fontWeight: "600",
              textAlign: "center",
              marginTop: 40,
            }}
          >
            Hoạt động chưa cập nhật
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default CultivationProcess;
