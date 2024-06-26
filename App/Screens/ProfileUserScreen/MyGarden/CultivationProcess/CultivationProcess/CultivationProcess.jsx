import { Text, View, ScrollView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const CultivationProcess = () => {
  const param = useRoute().params;
  const [dataProcess, setDataProcess] = useState(param.processInfo);

  // Update dataGarden when route params change
  useEffect(() => {
    if (param?.processInfo) {
      setDataProcess(param.processInfo);
    }
  }, [param.processInfo]);

  const renderClassItem = ({ item }) => (
    <View style={styles.classItem}>
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>{item.startTime}</Text>
          <Text style={styles.endTime}>{item.endTime}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: item.bgColor }]}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDate}>24 March, 18pm - 19pm</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 16 }}
          data={classes}
          renderItem={renderClassItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default CultivationProcess;
