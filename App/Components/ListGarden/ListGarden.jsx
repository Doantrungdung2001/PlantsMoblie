import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Heading from "../Heading/Heading";
import styles from "./ListGarden.Styles";
import useListGarden from "./useListGarden";

const ListGarden = ({ farmId }) => {
  const { dataAllGarden, isSuccessAllGarden, isLoadingAllGarden } =
    useListGarden({ farmId });
  return (
    <View style={styles.container}>
      <Heading text={"Danh sách vườn"} />
      {isSuccessAllGarden && (
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={dataAllGarden}
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
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.image }}
                  />
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
      )}
      {isLoadingAllGarden && <ActivityIndicator size="large" color="#00ff00" />}
    </View>
  );
};

export default ListGarden;
