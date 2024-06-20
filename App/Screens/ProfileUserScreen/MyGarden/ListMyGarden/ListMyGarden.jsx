import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { useNavigation } from "@react-navigation/native";
import styles from "./ListMyGarden.Style";
import UserInfoAsyncStorage from "../../../../Utils/UserInfoAsyncStorage";
import useListGarden from "./useListMyGarden";
import { getStatusText } from "../../../../Utils/helper";
const ListMyGarden = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await UserInfoAsyncStorage.getUserInfo("UserInfo");
        setUserId(result.farm._id);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  const { allGarden, isSuccessAllGarden, isLoadingAllGarden, refetcAllGarden } =
    useListGarden({
      clientId: userId,
    });

  const getStatusStyles = (status) => {
    switch (status) {
      case "started":
        return {
          dotStyle: styles.startedDot,
          textStyle: styles.startedText,
          borderTopStyle: "deepskyblue",
        };
      case "cancel":
        return {
          dotStyle: styles.cancelDot,
          textStyle: styles.cancelText,
          borderTopStyle: "red",
        };
      case "completed":
        return {
          dotStyle: styles.completedDot,
          textStyle: styles.completedText,
          borderTopStyle: "green",
        };
      default:
        return {
          dotStyle: styles.defaultDot,
          textStyle: styles.defaultText,
          borderTopStyle: "grey",
        };
    }
  };

  const searchFilter = (item) => {
    const query = searchQuery.toLowerCase();
    return item.farm.name.toLowerCase().includes(query);
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeading title={"Danh sách vườn đang ký"} />
      <View style={{ margin: 20 }}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tên nông trại..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <View>
        {isSuccessAllGarden && (
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={allGarden.filter(searchFilter)}
            renderItem={({ item }) => {
              const statusStyles = getStatusStyles(item.status);
              return (
                <TouchableOpacity
                  style={[
                    styles.card,
                    {
                      // backgroundColor: item.backgroundColor,
                      borderTopWidth: 4,
                      borderTopColor: statusStyles.borderTopStyle,
                    },
                  ]}
                  onPress={() => {
                    navigation.push("profile/my-garden/detail", {
                      dataMyGarden: item,
                    });
                    refetcAllGarden();
                  }}
                >
                  <Text style={styles.cardTitle}>{item.farm.name}</Text>
                  <View style={styles.cardDates}>
                    <Text style={styles.cardDate}>
                      Diện tích: {item.gardenServiceTemplate.square}(m²)
                    </Text>
                    <Text style={styles.cardDate}>
                      Giá: {item.gardenServiceTemplate.price}(VND)
                    </Text>
                  </View>
                  <View style={styles.statusContainer}>
                    <View style={[styles.dot, statusStyles.dotStyle]} />
                    <Text style={[styles.msgTxt, statusStyles.textStyle]}>
                      {getStatusText(item.status)}
                    </Text>
                  </View>
                  <View style={styles.cardContent}>
                    <View style={styles.attendeesContainer}>
                      {item.listPlants?.map((attendee, index) => (
                        <Image
                          key={index}
                          source={{ uri: attendee.plants_thumb }}
                          style={styles.attendeeImage}
                        />
                      ))}
                    </View>
                    {console.log("Status", item.status)}
                    <View style={styles.buttons}>
                      {item.status === "started" && (
                        <TouchableOpacity style={styles.button}>
                          <Text style={styles.buttonText}>Hủy</Text>
                        </TouchableOpacity>
                      )}
                      {item.status === "cancel" && (
                        <TouchableOpacity style={styles.button}>
                          <Text style={styles.buttonText}>Xóa</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        {isLoadingAllGarden && (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </View>
    </ScrollView>
  );
};

export default ListMyGarden;
