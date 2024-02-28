import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import {Feather, Ionicons} from "@expo/vector-icons"
import { TextInput } from "react-native-gesture-handler";
const Welcoms = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomTxt}>Tìm kiếm nhiều nhất</Text>
      </View>

      <View style={styles.serchContainer}>
        <TouchableOpacity>
            <Feather name="search" size={30} style={styles.serchIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput 
                style={styles.searchInput}
                value=""
                onPressIn={() => {}}
                placeholder="Tên nông trại bạn muốn tìm ...."
            />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  welcomTxt: {
    fontFamily: "boldltalic",
    fontSize: SIZES.xxLarge - 10,
    marginTop: 2,
    color: COLORS.black,
  },
  serchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary2,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
  },
  serchIcon: {
    marginHorizontal: 15,
    color: COLORS.gray
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary2,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
export default Welcoms;
