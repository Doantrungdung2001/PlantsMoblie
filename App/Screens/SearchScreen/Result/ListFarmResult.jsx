import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./ListFarmResult.Styles";
import NotData from "../../../Components/NotData/NotData";
const ListFarmResult = ({ dataListFarmResult }) => {
  const navigation = useNavigation();
  const [dataFarm, setDataFarm] = useState(dataListFarmResult);
  useEffect(() => {
    setDataFarm(dataListFarmResult);
  }, [dataListFarmResult]);
  return (
    <View>
      {dataListFarmResult?.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={dataFarm}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => {
              return item.id;
            }}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() =>
                    navigation.push("farm-detail", { farmInfo: item })
                  }
                >
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.cardImage}
                      source={{ uri: item.avatar }}
                    />
                  </View>
                  <View style={styles.cardContent}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.count}>{item.district}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : (
        <View style={{marginLeft: 5, marginRight: 5}}>
          <NotData text={"Không tìm thấy nông trại phù hợp"} />
        </View>
      )}
    </View>
  );
};

export default ListFarmResult;
