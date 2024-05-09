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
  const cartSelectVegetables = [];
  const param = useRoute().params;
  const [farmId, setFarmId] = useState(param.serviceInfo.farm);
  
  const { tabs, isSuccessAllPlant, isLoadingAllPlant } = usePlant({
    farmId: farmId,
  });
  const [selectedHeader, setSelectedHeader] = useState(0);

  const [showModalCart, setShowModalCart] = useState(false);
  const [showModalBtn, setShowModalBtn] = useState(false);
  const [countItem, setCountItem] = useState(cartSelectVegetables.length);
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

  const addToCart = (vegestables) => {
    console.log("Insert into cart", vegestables);
    const isExisted = cartSelectVegetables.some(
      (item) => item.id === vegestables.id
    );
    if (!isExisted) {
      if (cartSelectVegetables.length < 4) {
        cartSelectVegetables.push(vegestables);
        setCountItem(countItem + 1);
        setTypeToast("success");
        setTextToast("Thành công");
        setDescriptionToast("Cây trồng đã được thêm vào");
        handleShowToast();
      } else {
        Alert.alert("Số cây trồng không được vượt quá 4");
      }
    } else {
      setTypeToast("danger");
      setTextToast("Không thành công");
      setDescriptionToast("Cây trồng đã tồn tại");
      handleShowToast();

      console.log("Item is existed in cart!!");
    }
    console.log(cartSelectVegetables);
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
        {isSuccessAllPlant && (
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={tabs[selectedHeader].options}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={(item, index) => {
              return (
                <ScrollView>
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                      addToCart(item.item);
                    }}
                    key={index}
                  >
                    <Image
                      style={styles.cardImage}
                      source={{ uri: item.item.image }}
                    />
                  </TouchableOpacity>

                  <View style={styles.cardHeader}>
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text style={styles.title}>{item.item.title}</Text>
                    </View>
                  </View>
                </ScrollView>
              );
            }}
          />
        )}
        {isLoadingAllPlant && (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Feather
            name="shopping-cart"
            size={45}
            color="green"
            onPress={() => setShowModalCart(!showModalCart)}
          />
          <View
            style={{
              position: "absolute",
              top: -5,
              right: -5,
              backgroundColor: "red",
              borderRadius: 10,
              width: 20,
              height: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>{countItem}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bookingBtn}
          onPress={() => setShowModalBtn(!showModalBtn)}
        >
          <Text style={styles.textBtn}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
      {/* Modal Cart */}
      <Modal animationType="slide" visible={showModalCart}>
        <View style={styles.containerModal}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => setShowModalCart(!showModalCart)}
          >
            <MaterialIcons name="cancel" size={30} color="red" />
          </TouchableOpacity>
          <FlatList
            data={cartSelectVegetables}
            renderItem={({ item, index }) => (
              <ScrollView>
                <TouchableOpacity style={styles.cardContainerModal} key={index}>
                  <Image
                    source={{ uri: item?.image }}
                    style={styles.imageModal}
                  />
                  <View style={styles.subContainerModal}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                  </View>
                  <AntDesign
                    name="delete"
                    size={40}
                    color="red"
                    style={styles.deleteBtn}
                  />
                </TouchableOpacity>
              </ScrollView>
            )}
          />
        </View>
      </Modal>
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
