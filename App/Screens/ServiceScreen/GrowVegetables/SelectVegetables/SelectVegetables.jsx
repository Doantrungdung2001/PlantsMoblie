import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Modal,
  Alert,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { COLORS } from "../../../../Constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import styles from "./SelectVegetables.Styles";
import ToastMessage from "../../../../Components/ToastMessage/ToastMessage";
import usePlant from "./UsePlant";

const SelectVegetables = () => {
  const param = useRoute().params;
  const [farmId, setFarmId] = useState(param.serviceInfo.farm);
  const [serviceInfo, setServiceInfo] = useState(param.serviceInfo);

  useEffect(() => {
    setFarmId(farmId);
  }, [farmId]);
  useEffect(() => {
    setServiceInfo(serviceInfo);
  }, [serviceInfo]);

  const [selectedItems, setSelectedItems] = useState([]);

  const { tabs, isSuccessAllPlant, isLoadingAllPlant } = usePlant({
    farmId: farmId,
  });
  const [selectedHeader, setSelectedHeader] = useState(0);

  const [showModalBtn, setShowModalBtn] = useState(false);

  const toastRef = useRef(null);
  const [typeToast, setTypeToast] = useState("success");
  const [textToast, setTextToast] = useState();

  const [descriptionToast, setDescriptionToast] = useState();

  const [note, setNote] = useState("");

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const countTypes = (items, typePlants) => {
    let typeCounts = 0;

    items.forEach((item) => {
      if (item.type === typePlants) {
        typeCounts++;
      }
    });
    return typeCounts;
  };
  const countLeaf = countTypes(selectedItems, "leafyMax");
  const countHerb = countTypes(selectedItems, "herbMax");
  const countRoot = countTypes(selectedItems, "rootMax");
  const countFruit = countTypes(selectedItems, "fruitMax");
  const addToCart = (plant) => {
    const isExisted = selectedItems.some(
      (item) => item.id === plant.id && item.type === plant.type
    );
    if (!isExisted) {
      setSelectedItems([...selectedItems, plant]);
      setTypeToast("success");
      setTextToast("Thành công");
      setDescriptionToast("Cây trồng đã được thêm vào");
      handleShowToast();
    } else {
      setTypeToast("danger");
      setTextToast("Không thành công");
      setDescriptionToast("Cây trồng đã tồn tại");
      handleShowToast();
    }
  };
  const handleRemovePlant = (plant) => {
    const updatedPlants = selectedItems.filter(
      (selectedItem) =>
        selectedItem.id !== plant.id || selectedItem.type !== plant.type
    );
    setSelectedItems(updatedPlants);
  };

  return (
    <View>
      <ToastMessage
        type={typeToast}
        text={textToast}
        description={descriptionToast}
        ref={toastRef}
      />
      <ScrollView style={{ height: "93%" }}>
        <View>
          <PageHeading title={"Lựa chọn rau trồng"} />
        </View>
        {isSuccessAllPlant && (
          <View style={styles.header}>
            {tabs.map((data, index) => (
              <Pressable onPress={() => setSelectedHeader(index)} key={index}>
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
        )}
        {isLoadingAllPlant && (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
        <Text
          style={{
            color: "red",
            fontWeight: 600,
            fontSize: 17,
            marginLeft: 10,
          }}
        >
          Chọn tối đa : {serviceInfo.leafyMax} Rau ăn lá, {serviceInfo.herbMax}{" "}
          Rau thơm, {serviceInfo.rootMax} Củ , {serviceInfo.fruitMax} Quả
        </Text>
        {selectedItems.length > 0 && (
          <View>
            <ScrollView
              horizontal
              contentContainerStyle={{
                gap: 5,
                paddingVertical: 10,
                marginBottom: 10,
              }}
            >
              {selectedItems.map((plant, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleRemovePlant(plant)}
                  style={styles.filterContainer}
                >
                  <Text style={styles.selectedPlantText}>{plant.title}</Text>
                  <MaterialIcons name="cancel" size={20} color="black" />
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Text
              style={{ marginLeft: 15, color: COLORS.primary, fontSize: 17 }}
            >
              {" "}
              Đã chọn : {countLeaf} Rau ăn lá,
              {countHerb} Rau thơm, {countRoot} Củ , {countFruit} Quả
            </Text>
          </View>
        )}
        {isSuccessAllPlant && (
          <FlatList
            data={tabs[selectedHeader].options}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={(item, index) => (
              <View>
                <TouchableOpacity
                  key={index}
                  style={styles.itemContainer}
                  onPress={() => {
                    if (
                      countLeaf <= serviceInfo.leafyMax &&
                      countHerb <= serviceInfo.herbMax &&
                      countRoot <= serviceInfo.rootMax &&
                      countFruit <= serviceInfo.fruitMax
                    ) {
                      addToCart(item.item);
                    } else {
                      Alert.alert("Số cây trồng không được vượt quá tối đa ");
                    }
                  }}
                >
                  <Image
                    style={styles.image}
                    source={{ uri: item.item.image }}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{item.item.title}</Text>
                    <Text style={styles.phoneText}>{item.phone}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
        {isLoadingAllPlant && (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </ScrollView>
      {/* footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.bookingBtn}
          onPress={() => setShowModalBtn(!showModalBtn)}
        >
          <Text style={styles.textBtn}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
      {/* Modal Btn */}
      <Modal animationType="slide" visible={showModalBtn}>
        <View style={styles.containerModal}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => setShowModalBtn(!showModalBtn)}
          >
            <MaterialIcons name="cancel" size={30} color="red" />
          </TouchableOpacity>
          <View>
            <View style={styles.detailInfo}>
              <Text style={styles.subject}>Ghi chú</Text>
              <View style={styles.body}>
                <TextInput
                  placeholder="Nhập ghi chú"
                  placeholderTextColor={COLORS.darkgray}
                  style={styles.bodyText}
                  onChangeText={(note) => setNote(note)}
                />
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.button, styles.login]}
                //   onPress={() => navigation.push("Login")}
              >
                <Text style={styles.buttonText}>Gửi đăng ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SelectVegetables;
