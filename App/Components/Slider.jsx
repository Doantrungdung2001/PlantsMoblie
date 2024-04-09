import { FlatList, Image, StyleSheet, Text, Button, View } from "react-native";
import React from "react";
import Heading from "./Heading";
import { COLORS, images } from "../Constants";

const data = [
  {
    id: 1,
    name: "Rau ăn lá",
    image: "https://bloganchoi.com/wp-content/uploads/2021/03/rau-cu.jpg",
  },
  {
    id: 2,
    name: "Rau ăn củ",
    image:
      "https://media.doisongvietnam.vn/u/rootimage/editor/2017/08/22/12/22/w825/11503357754_5582.jpg",
  },
  {
    id: 3,
    name: "Rau ăn fads",
    image:
      "https://giamcanthai.com/wp-content/uploads/2018/02/rau-cu-qua-1.jpg",
  },
  {
    id: 1,
    name: "Rau ăn fasd",
    image:
      "http://favri.org.vn/images/anh_tin_tuc/Rau_duoc_chia_lam_2_loai.jpg",
  },
];

const Slider = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Heading text={"Dịch vụ trồng rau"} />

      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  marginTop: 15,
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
              <View style={styles.buttonBtn}>
                <Button
                  // onPress={}
                  title="Chi tiết"
                  color={COLORS.white}
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  buttonBtn: {
    marginTop: 10,
    backgroundColor: COLORS.green,
    borderRadius: 15,
  },
});
