import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import PageHeading from "../../../Components/PageHeading";
import { COLORS } from "../../../Constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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
const SelectVegetables = () => {
  const [selectedHeader, setSelectedHeader] = useState(0);
  const [status, setStatus] = useState(tabs[0].name);
  const [showModal, setShowModal] = useState(false);
  const cartVegestable = [];
  const addToCart = (vegestables) => {
    console.log("Du lieu them vao", vegestables);
    cartVegestable?.map((item, index) => {
      if (item.id === vegestables.id) {
        console.log("vegestables is exited !!");
      } else {
        cartVegestable.push(vegestables);
      }
    });
    console.log(cartVegestable.length);
  };

  return (
    <View>
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
        <Feather
          name="shopping-cart"
          size={45}
          color="green"
          onPress={() => setShowModal(!showModal)}
        />
        <TouchableOpacity style={styles.bookingBtn}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "RobotoCondensed-Bold",
              color: COLORS.white,
              fontSize: 20,
            }}
          >
            Xác nhận
          </Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={showModal}>
        <View style={{ padding: 20, paddingTop: 70 }}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
            onPress={() => setShowModal(!showModal)}
          >
            <MaterialIcons name="cancel" size={30} color="red" />
          </TouchableOpacity>
          <FlatList
            data={cart}
            renderItem={({ item, key }) => (
              <ScrollView>
                <TouchableOpacity style={styles.containerModal}>
                  <Image
                    source={{ uri: item?.image }}
                    style={styles.imageModal}
                  />
                  <View style={styles.subContainerModal}>
                    <Text
                      style={{
                        fontFamily: "RobotoCondensed-Bold",
                        fontSize: 25,
                      }}
                    >
                      {item.title}
                    </Text>
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
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 90,
                    }}
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

const styles = StyleSheet.create({
  header: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleHeader: {
    fontSize: 17,
    fontWeight: "600",
    color: COLORS.black,
    textAlign: "center",
  },
  line: {
    width: 70,
    height: 5,
    backgroundColor: COLORS.green,
    alignSelf: "center",
    marginTop: 3,
    borderRadius: 10,
  },
  container: {
    height: "90%",
    marginTop: 40,
    backgroundColor: "#f6f6f6",
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#f6f6f6",
  },
  listContainer: {
    alignItems: "center",
  },
  /******** card **************/
  card: {
    shadowColor: "#474747",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: "#e2e2e2",
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 100,
    width: 100,
    alignSelf: "center",
    borderRadius: 50,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    alignSelf: "center",
    color: "#696969",
  },
  bookingBtn: {
    width: "70%",
    padding: 13,
    backgroundColor: COLORS.green,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 99,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 99,
    borderBlockColor: COLORS.white,
    paddingLeft: 25,
    elevation: 4, // Add elevation for shadow
  },

  /**************** Modal *****************/
  containerModal: {
    marginTop: 30,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: COLORS.lightGray,
    alignItems: "center",
  },
  subContainerModal: {
    display: "flex",
    gap: 8,
  },
  imageModal: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
