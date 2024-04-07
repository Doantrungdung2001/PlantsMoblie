import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../Constants";
import { FontAwesome } from "@expo/vector-icons";

const typeSearch = [
  "Nearest",
  "All",
  "Bac",
  "Trung",
  "Nam",
];
const Search = () => {
  const [activeJobSearch, setActiveJobSearch] = useState("All");
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Nhập tên trang trại" style={styles.textInput} />
        <FontAwesome
          name="search"
          size={24}
          color={COLORS.primary}
          style={styles.searchbtn}
        />
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={typeSearch}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobSearch, item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.green,
    borderRadius: 25,
  },
  searchBarContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    width: "85%",
  },
  searchbtn: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 8,
  },
  tabsContainer: {},
});
