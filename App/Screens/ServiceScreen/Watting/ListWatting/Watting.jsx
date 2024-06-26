import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../Constants";
import useGardenRequest from "./useGardenRequestClient";
import styles from "./Watting.Styles";
import { formatDateTime } from "../../../../Utils/helper";

const Watting = () => {
  const navigation = useNavigation();
  const {
    allGardenRequest,
    isSuccessAllGardenRequest,
    isLoadingAllGardenRequest,
    refetchAllGardenRequest,
  } = useGardenRequest();
  const renderClassItem = ({ item }) => {
    return (
      <View style={styles.classItem}>
        <View style={styles.classContent}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.push("service-screen/request-detail", {
                requestInfo: item,
                refetchAllGardenRequest: refetchAllGardenRequest,
              });
            }}
          >
            <Text style={styles.cardTitle}>{item.farm_name}</Text>
            <Text style={styles.cardDate}>{formatDateTime(item.time)}</Text>
            <FlatList
              contentContainerStyle={styles.studentListContainer}
              data={item.listplant}
              renderItem={({ item: plant, index }) => (
                <Image
                  key={index.toString()}
                  source={{ uri: plant.plant_thumb }}
                  style={styles.studentAvatar}
                />
              )}
              horizontal
              keyExtractor={(plant, index) => index.toString()}
            />
            <View style={{ alignItems: "flex-end", paddingRight: 10 }}>
              <Text style={{ fontSize: 16, color: "#333" }}>Chi tiết</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{ padding: 20, paddingTop: 60 }}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Đang chờ xác nhận
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {isSuccessAllGardenRequest && (
          <View>
            {allGardenRequest.length > 0 ? (
              <FlatList
                contentContainerStyle={{
                  paddingHorizontal: 16,
                  marginTop: 10,
                  marginBottom: 10,
                }}
                data={allGardenRequest}
                renderItem={renderClassItem}
                keyExtractor={(item, index) => index.toString()}
              />
            ) : (
              <Text
                style={{
                  color: COLORS.gray,
                  fontSize: 30,
                  textAlign: "center",
                  marginTop: "20%",
                }}
              >
                Không có yêu đang đợi
              </Text>
            )}
          </View>
        )}
        {isLoadingAllGardenRequest && (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </ScrollView>
    </ScrollView>
  );
};

export default Watting;
