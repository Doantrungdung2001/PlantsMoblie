import { Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./Service.Styles";
import { COLORS, icons } from "../../Constants";
const featureData = [
  {
    id: 1,
    icon: icons.send,
    color: COLORS.yellow,
    backgroundColor: COLORS.lightyellow,
    description: "Transfer",
  },
  {
    id: 2,
    icon: icons.internet,
    color: COLORS.primary,
    backgroundColor: COLORS.lightGreen,
    description: "Internet",
  },
  {
    id: 3,
    icon: icons.wallet,
    color: COLORS.red,
    backgroundColor: COLORS.lightRed,
    description: "Wallet",
  },
  {
    id: 4,
    icon: icons.bill,
    color: COLORS.yellow,
    backgroundColor: COLORS.lightyellow,
    description: "Bill",
  },
  {
    id: 5,
    icon: icons.more,
    color: COLORS.purple,
    backgroundColor: COLORS.lightpurple,
    description: "More",
  },
];
const ListService = () => {
  const [feature, setFeatures] = useState(featureData);
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      key={index}
      onPress={() =>
        navigation.push(`service-screen/${item.description}`, {
          category: item.description,
        })
      }
    >
      <View style={styles.itemCard}>
        <Image
          source={item.icon}
          resizeMode="contain"
          style={styles.itemImage}
        />
      </View>
      <Text style={styles.itemText}>{item.description}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresText}>Dịch vụ</Text>
      </View>
      <View>
        <FlatList
          ListHeaderComponent={Header}
          data={feature}
          numColumns={4}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          style={styles.renderFlast}
        />
      </View>
    </View>
  );
};

export default ListService;
