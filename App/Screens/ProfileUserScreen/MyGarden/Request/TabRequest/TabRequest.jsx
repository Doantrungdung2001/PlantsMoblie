import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import PageHeading from "../../../../../Components/PageHeading/PageHeading";
import { COLORS } from "../../../../../Constants";
import styles from "./TabRequest.Styles";
import NewPlants from "../NewPlants/NewPlants";
import NewDelivery from "../NewDelivery/NewDelivery";
import Other from "../Other/Other";
import { useRoute } from "@react-navigation/native";

const tabsRequest = [
  {
    name: "Cây trồng mới",
    component: NewPlants,
  },
  {
    name: "Giao hàng",
    component: NewDelivery,
  },
  {
    name: "Khác",
    component: Other,
  },
];

const TabRequest = () => {
  const [selectedHeader, setSelectedHeader] = useState(0);
  const [loading, setLoading] = useState(false);
  const param = useRoute().params;
  const [dataGarden, setDataGarden] = useState(param.dataMyGarden);

  // Update dataGarden when route params change
  useEffect(() => {
    if (param?.dataMyGarden) {
      setDataGarden(param.dataMyGarden);
    }
  }, [param.dataMyGarden]);

  const SelectedComponent = tabsRequest[selectedHeader].component;

  const handleTabChange = (index) => {
    setLoading(true);
    setSelectedHeader(index);
    setLoading(false);
  };

  return (
    <ScrollView style={{ padding: 15 }}>
      <View>
        <PageHeading title={"Yêu cầu"} />

        <View style={styles.header}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tabsRequest.map((tab, index) => (
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
  );
};

export default TabRequest;
