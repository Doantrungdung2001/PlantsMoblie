import React, { useState, useRef, useEffect } from "react";
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
import { useRoute, useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { COLORS } from "../../../../Constants";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./SelectVegetables.Styles";
import ToastMessage from "../../../../Components/ToastMessage/ToastMessage";
import usePlant from "./UsePlant";
import GARDEN_SERVICE_REQUEST from "../../../../Services/GardenRequestService";

const SelectVegetables = () => {
  const navigation = useNavigation(); // Initialize useNavigation hook
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
  const [selectedPlantName, setSelectedPlantName] = useState(""); // State to store the selected plant name

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

  const addPlants = (plant) => {
    const isExisted = selectedItems.some(
      (item) => item.id === plant.id && item.type == plant.type
    );
    if (!isExisted) {
      setSelectedItems([...selectedItems, plant]); // Update selectedItems state
      setSelectedPlantName(plant.title); // Update selected plant name
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

  const SeparationByType = (data) => {
    let SelectPlants = {
      Leaf: [],
      Herb: [],
      Root: [],
      Fruit: [],
    };
    data?.forEach((item) => {
      if (item.type === "leafyMax") {
        SelectPlants.Leaf.push(item);
      } else if (item.type === "herbMax") {
        SelectPlants.Herb.push(item);
      } else if (item.type === "rootMax") {
        SelectPlants.Root.push(item);
      } else {
        SelectPlants.Fruit.push(item);
      }
    });
    return SelectPlants;
  };

  let dataSeparationByType = SeparationByType(selectedItems);

  const getPlantId = (data) => {
    let listId = [];
    data?.forEach((item) => {
      return listId.push(item.plant_id);
    });
    return listId;
  };

  const handleRemovePlant = (plant) => {
    const updatedPlants = selectedItems.filter(
      (selectedItem) =>
        selectedItem.id !== plant.id || selectedItem.type !== plant.type
    );
    setSelectedItems(updatedPlants);
    setSelectedPlantName(""); // Clear selected plant name when removing plant
  };

  const onCreate = async (values) => {
    try {
      if (values) {
        const result = await GARDEN_SERVICE_REQUEST.addGardenServiceRequest(
          values
        );
        console.log("trang thai", result.data.status);
        if (result.data.status === 200) {
          setTypeToast("success");
          setTextToast("Thành công");
          setDescriptionToast("Đã gửi yêu cầu thành công");
          handleShowToast();

          // Navigate to home screen after 3 seconds

          setTimeout(() => {
            setShowModalBtn(!showModalBtn);
            navigation.push("home");
          }, 3000);
        }
      }
    } catch (error) {
      console.log(error);
      setTypeToast("danger");
      setTextToast("Không thành công");
      setDescriptionToast("Gửi yêu cầu thất bại");
      handleShowToast();
    }
  };

  return (
    <View>
      <ToastMessage
        type={typeToast}
        text={textToast}
        description={descriptionToast}
        ref={toastRef}
      />
      <ScrollView style={{ height: "92%" }}>
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
              Đã chọn : {dataSeparationByType.Leaf.length} Rau ăn lá,{" "}
              {dataSeparationByType.Herb.length} Rau thơm,{" "}
              {dataSeparationByType.Root.length} Củ ,{" "}
              {dataSeparationByType.Fruit.length} Quả
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
                    const { type } = item.item;

                    const isLeafOverLimit =
                      type === "leafyMax" &&
                      dataSeparationByType.Leaf.length >= serviceInfo.leafyMax;
                    const isHerbOverLimit =
                      type === "herbMax" &&
                      dataSeparationByType.Herb.length >= serviceInfo.herbMax;
                    const isRootOverLimit =
                      type === "rootMax" &&
                      dataSeparationByType.Root.length >= serviceInfo.rootMax;
                    const isFruitOverLimit =
                      type === "fruitMax" &&
                      dataSeparationByType.Fruit.length >= serviceInfo.fruitMax;

                    if (
                      isLeafOverLimit ||
                      isHerbOverLimit ||
                      isRootOverLimit ||
                      isFruitOverLimit
                    ) {
                      Alert.alert("Số cây trồng không được vượt quá tối đa");
                    } else {
                      addPlants(item.item);
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
        <ToastMessage
          type={typeToast}
          text={textToast}
          description={descriptionToast}
          ref={toastRef}
        />
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
                  multiline={true}
                  numberOfLines={10}
                  onChangeText={(note) => setNote(note)}
                />
              </View>
            </View>
            {/* Selected Plant Name Display */}
            {/* {selectedPlantName !== "" && (
              <Text style={styles.selectedPlantText}>
                Đã chọn: {selectedPlantName}
              </Text>
            )} */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.button, styles.login]}
                onPress={() =>
                  onCreate({
                    time: new Date(),
                    gardenServiceTemplateId: serviceInfo.id,
                    herbListId: getPlantId(dataSeparationByType.Leaf),
                    leafyListId: getPlantId(dataSeparationByType.Herb),
                    rootListId: getPlantId(dataSeparationByType.Root),
                    fruitListId: getPlantId(dataSeparationByType.Fruit),
                    note: note,
                  })
                }
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
