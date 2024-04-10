import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Heading from "./Heading";
import { COLORS } from "../Constants";

const data = [
  {
    id: 1,
    title: "Product 1",
    count: 4,
    image: "https://bootdey.com/image/400x200/FFB6C1/000000",
  },
  {
    id: 2,
    title: "Product 2",
    count: 4,
    image: "https://bootdey.com/image/400x200/87CEEB/000000",
  },
  {
    id: 3,
    title: "Product 3",
    count: 4,
    image: "https://bootdey.com/image/400x200/6A5ACD/000000",
  },
  {
    id: 4,
    title: "Product 4",
    count: 4,
    image: "https://bootdey.com/image/400x200/4682B4/000000",
  },
  {
    id: 5,
    title: "Product 5",
    count: 4,
    image: "https://bootdey.com/image/400x200/40E0D0/000000",
  },
  {
    id: 6,
    title: "Product 6",
    count: 4,
    image: "https://bootdey.com/image/400x200/008080/000000",
  },
  {
    id: 7,
    title: "Product 7",
    count: 4,
    image: "https://bootdey.com/image/400x200/FF6347/000000",
  },
  {
    id: 8,
    title: "Product 8",
    count: 4,
    image: "https://bootdey.com/image/400x200/4169E1/000000",
  },
  {
    id: 9,
    title: "Product 9",
    count: 4,
    image: "https://bootdey.com/image/400x200/6A5ACD/000000",
  },
  {
    id: 9,
    title: "Product 10",
    count: 4,
    image: "https://bootdey.com/image/400x200/FA8072/000000",
  },
];
const ListProject = () => {
  const [results, setResults] = useState(data);
  return (
    <View style={styles.container}>
      <Heading text={"Danh sách dự án"} />
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={results}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={(post) => {
          const item = post.item;
          return (
            <TouchableOpacity style={styles.card}>
              <View style={styles.imageContainer}>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity style={[styles.button, styles.google]}>
                  <Text style={styles.buttonText}>Chi tiết</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ListProject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer: {
    alignItems: "center",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    marginVertical: 8,
    backgroundColor: "white",
    flexBasis: "45%",
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 17,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
    color: "#778899",
  },
  count: {
    fontSize: 18,
    flex: 1,
    color: "#B0C4DE",
  },

  button: {
    width: "90%",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  google: {
    backgroundColor: COLORS.green,
  },
});
