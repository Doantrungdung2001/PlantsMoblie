import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./Header.Styles";
const HeaderComponents = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Hà Nội- Hai Bà Trưng</Text>
          <Text style={styles.headerSubtitle}>24 March, 18pm - 19pm</Text>
        </View>

        <View style={styles.body}>
          <Image
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
            }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Mr. Cody Fisher</Text>
            <Text style={styles.userRole}>Professor</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderComponents;
