import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./ListPlants";
import useListProcess from "../useCultivationProcess";

const ListPlant = ({ gardenId }) => {
  const navigation = useNavigation();
  const { allProcess, isSuccessAllProcess, isLoadingAllProcess } =
    useListProcess({
      gardenId: gardenId,
    });

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.push("profile/my-garden/cultivation", {
            processInfo: item.process,
          });
        }}
      >
        <View style={styles.row}>
          <Image source={{ uri: item.plant.plant_thumb }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.plant.plant_name}
              </Text>
              <Text style={styles.mblTxt}>Chi tiết</Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {isSuccessAllProcess && (
        <FlatList
          data={allProcess}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={renderItem}
        />
      )}
      {isLoadingAllProcess && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </View>
  );
};

export default ListPlant;
