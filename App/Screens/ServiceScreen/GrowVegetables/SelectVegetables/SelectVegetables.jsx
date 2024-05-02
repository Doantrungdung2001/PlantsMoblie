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
} from "react-native";
import React, { useState, useRef } from "react";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { COLORS } from "../../../../Constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import styles from "./SelectVegetables.Styles";
import ToastMessage from "../../../../Components/ToastMessage/ToastMessage";
const tabs = [
  {
    name: "Rau ăn lá",
    options: [
      {
        id: 1,
        title: "Option 1",
        image: "https://img.icons8.com/color/70/000000/cottage.png",
      },
      {
        id: 2,
        title: "Option 2",
        image: "https://img.icons8.com/color/70/000000/administrator-male.png",
      },
      {
        id: 3,
        title: "Option 3",
        image: "https://img.icons8.com/color/70/000000/filled-like.png",
      },
    ],
  },
  {
    name: "Rau thơm",
    options: [
      {
        id: 1,
        title: "Option 1",
        image: "https://img.icons8.com/color/70/000000/cottage.png",
      },
      {
        id: 2,
        title: "Option 2",
        image: "https://img.icons8.com/color/70/000000/administrator-male.png",
      },
      {
        id: 3,
        title: "Option 3",
        image: "https://img.icons8.com/color/70/000000/filled-like.png",
      },
      {
        id: 4,
        title: "Option 4",
        image: "https://img.icons8.com/color/70/000000/facebook-like.png",
      },
    ],
  },
  {
    name: "Củ",
    options: [
      {
        id: 1,
        title: "Option 1",
        image: "https://img.icons8.com/color/70/000000/cottage.png",
      },
      {
        id: 2,
        title: "Option 2",
        image: "https://img.icons8.com/color/70/000000/administrator-male.png",
      },
      {
        id: 3,
        title: "Option 3",
        image: "https://img.icons8.com/color/70/000000/filled-like.png",
      },
      {
        id: 4,
        title: "Option 4",
        image: "https://img.icons8.com/color/70/000000/facebook-like.png",
      },
      {
        id: 5,
        title: "Option 5",
        image: "https://img.icons8.com/color/70/000000/shutdown.png",
      },
    ],
  },
  {
    name: "Quả",
    options: [
      {
        id: 1,
        title: "Option 1",
        image: "https://img.icons8.com/color/70/000000/cottage.png",
      },
      {
        id: 2,
        title: "Option 2",
        image: "https://img.icons8.com/color/70/000000/administrator-male.png",
      },
      {
        id: 3,
        title: "Option 3",
        image: "https://img.icons8.com/color/70/000000/filled-like.png",
      },
      {
        id: 4,
        title: "Option 4",
        image: "https://img.icons8.com/color/70/000000/facebook-like.png",
      },
      {
        id: 5,
        title: "Option 5",
        image: "https://img.icons8.com/color/70/000000/shutdown.png",
      },
      {
        id: 6,
        title: "Option 6",
        image: "https://img.icons8.com/color/70/000000/traffic-jam.png",
      },
    ],
  },
];

cart = [
  {
    id: 1,
    title: "Option 1",
    image: "https://img.icons8.com/color/70/000000/cottage.png",
  },
  {
    id: 2,
    title: "Option 2",
    image: "https://img.icons8.com/color/70/000000/administrator-male.png",
  },
  {
    id: 3,
    title: "Option 3",
    image: "https://img.icons8.com/color/70/000000/filled-like.png",
  },
];

const cartSelectVegetables = [];
const SelectVegetables = () => {
  const [selectedHeader, setSelectedHeader] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [countItem, setCountItem] = useState(cartSelectVegetables.length);
  const toastRef = useRef(null);
  const [typeToast, setTypeToast] = useState("success");
  const [textToast, setTextToast] = useState();
  const [descriptionToast, setDescriptionToast] = useState();
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

        <View style={styles.header}>
          {tabs.map((data, index) => (
            <Pressable onPress={() => setSelectedHeader(index)}>
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
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Feather
            name="shopping-cart"
            size={45}
            color="green"
            onPress={() => setShowModal(!showModal)}
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

        <TouchableOpacity style={styles.bookingBtn}>
          <Text style={styles.textBtn}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={showModal}>
        <View style={styles.containerModal}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => setShowModal(!showModal)}
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
                    <Text
                      style={{
                        fontFamily: "regular",
                        color: COLORS.black,
                        fontSize: 17,
                      }}
                    >
                      afasd
                    </Text>
                    <Text
                      style={{
                        fontFamily: "regular",
                        color: COLORS.gray,
                        fontSize: 14,
                      }}
                    >
                      km
                    </Text>
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
    </View>
  );
};

export default SelectVegetables;
