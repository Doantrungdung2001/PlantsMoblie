import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./ListFarmResult.Styles";

const ListFarmResult = ({ dataListFarmResult }) => {
  // Hàm để kiểm tra nếu số lượng phần tử là lẻ và thêm một đối tượng trống nếu đúng
  const modifiedData =
    dataListFarmResult.length % 2 !== 0
      ? [...dataListFarmResult, { id: "placeholder", placeholder: true }]
      : dataListFarmResult;

  return (
    <View>
      {dataListFarmResult?.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={modifiedData}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => {
              return item.id;
            }}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
            renderItem={({ item }) => {
              // Không hiển thị gì cho phần tử giữ chỗ
              if (item.placeholder) {
                return <View style={styles.placeholderCard} />;
              }
              return (
                <TouchableOpacity style={styles.card}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.cardImage}
                      source={{ uri: item.image }}
                    />
                  </View>
                  <View style={styles.cardContent}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.count}>({item.count} Photos)</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : (
        <View>
          <Text>Không có nông trại nào phù hợp</Text>
        </View>
      )}
    </View>
  );
};

export default ListFarmResult;
