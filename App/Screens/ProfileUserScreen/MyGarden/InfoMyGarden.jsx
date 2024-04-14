import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../../../Constants";

const seed = {
  _id: "65d477f4b4c8b6de45c88406",
  plant: "65d42739189dcc81b9155174",
  seed_name: "Giống K.K.cross của Nhât",
  seed_thumb:
    "https://res.cloudinary.com/agritech/image/upload/c_fill,h_500,w_500/v1/image/65bf53967517b61da58eaaba/shmcrgps6te9uodobdue.jpg?_a=BAMCcSca0",
  seed_description:
    "đây là loại giống F1 thích hợp với các vùng đồng bằng ở phía Nam. Thời gian phát triển đến lúc thu hoạch gần 3 tháng. Giống K.K.cross có thể cho năng suất lên tới 40 tấn/ hecta.",
  isSeedDefault: false,
  isDeleted: false,
  createdAt: "2024-02-20T09:59:16.805Z",
  updatedAt: "2024-02-26T13:44:25.456Z",
  seed_slug: "Giong-K.K.cross-cua-Nhat",
  __v: 0,
};
const InfoMyGarden = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.postInfo}>
        <Text style={styles.title}>{seed.seed_name}</Text>
        <View style={styles.meta}>
          {/* <Text style={styles.author}>by {post.author}</Text> */}
          <Text style={styles.date}>{seed.createdAt}</Text>
        </View>
        <Image source={{ uri: seed.seed_thumb }} style={styles.image} />
        <Text style={styles.content}>{seed.seed_description}</Text>
      </View>
    </ScrollView>
  );
};

export default InfoMyGarden;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 10,
  },
  postInfo: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  meta: {
    flexDirection: "row",
    marginBottom: 20,
  },
  author: {
    fontSize: 14,
    color: "#999",
    marginRight: 10,
  },
  date: {
    fontSize: 14,
    color: "#999",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    marginTop: 20,
  },
});
