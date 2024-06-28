import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { useNavigation } from "@react-navigation/native";
import styles from "./ListMyGarden.Style";
import UserInfoAsyncStorage from "../../../../Utils/UserInfoAsyncStorage";
import useListGarden from "./useListMyGarden";
import { getStatusText } from "../../../../Utils/helper";
import ToastMessage from "../../../../Components/ToastMessage/ToastMessage";
import GARDEN from "../../../../Services/GardenService";
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

  const toastRef = useRef(null);
  const [typeToast, setTypeToast] = useState("success");
  const [textToast, setTextToast] = useState();
  const [descriptionToast, setDescriptionToast] = useState();

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const searchFilter = (item) => {
    const query = searchQuery.toLowerCase();
    return item.farm.name.toLowerCase().includes(query);
  };

  const handleUpdateGarden = async (gardenId) => {
    try {
      if (gardenId) {
        const result = await GARDEN.updateGardenByClient(gardenId, {
          status: "cancel",
        });
        console.log("Du lieu tra ve:", result?.data?.status);
        refetcAllGarden();
        if (result?.data?.status === 200 || result?.data?.status === 201) {
          setTypeToast("success");
          setTextToast("Thành công");
          setDescriptionToast("Xác nhận huỷ thành công");
          handleShowToast();
        }
      }
    } catch (error) {
      console.log(error);
      setTypeToast("danger");
      setTextToast("Không thành công");
      setDescriptionToast("Xác nhận hủy thất bại");
      handleShowToast();
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteGarden = async (gardenId) => {
    try {
      if (gardenId) {
        const result = await GARDEN.deleteGardenByClient(gardenId);
        console.log("Du lieu tra ve:", result?.data?.status);
        refetcAllGarden();
        if (result?.data?.status === 200 || result?.data?.status === 201) {
          setTypeToast("success");
          setTextToast("Thành công");
          setDescriptionToast("Xác nhận xóa thành công");
          handleShowToast();
        }
      }
    } catch (error) {
      console.log(error);
      setTypeToast("danger");
      setTextToast("Không thành công");
      setDescriptionToast("Xác nhận hủy thất bại");
      handleShowToast();
    } finally {
      setIsLoading(false);
    }
  };

  const confirmCancel = (gardenId) => {
    Alert.alert("Xác nhận", "Bạn có muốn hủy không?", [
      {
        text: "Không",
        style: "cancel",
      },
      {
        text: "Có",
        onPress: () => {
          handleUpdateGarden(gardenId);
        },
      },
    ]);
  };

  const confirmDelete = (gardenId, status) => {
    Alert.alert("Xác nhận", "Bạn có muốn xóa không?", [
      {
        text: "Không",
        style: "cancel",
      },
      {
        text: "Có",
        onPress: () => {
          if (status === "cancel") {
            handleDeleteGarden(gardenId);
          } else {
            setTypeToast("danger");
            setTextToast("Không thành công");
            setDescriptionToast("Chỉ có thể xóa vườn khi vườn đã hủy");
            handleShowToast();
          }
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <ToastMessage
        type={typeToast}
        text={textToast}
        description={descriptionToast}
        ref={toastRef}
      />
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
                    <View style={styles.buttons}>
                      {item.status === "started" && (
                        <TouchableOpacity
                          style={styles.button}
                          onPress={() => {
                            confirmCancel(item.id);
                          }}
                        >
                          <Text style={styles.buttonText}>Hủy</Text>
                        </TouchableOpacity>
                      )}
                      {item.status === "cancel" && (
                        <TouchableOpacity
                          style={styles.button}
                          onPress={() => {
                            confirmDelete(item.id, item.status);
                          }}
                        >
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
