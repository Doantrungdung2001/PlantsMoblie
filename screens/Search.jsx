//rnfes
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.serchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={30} style={styles.serchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => navigation.navigate("Search")}
            placeholder="Tên nông trại bạn muốn tìm ...."
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

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
    color: COLORS.gray,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary2,
    marginRight: SIZES.small,
    borderRadius: SIZES.xxSamll,
    height: 35,
  },
  searchInput: {
    fontFamily: "regular",
    marginHorizontal: SIZES.small,
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
