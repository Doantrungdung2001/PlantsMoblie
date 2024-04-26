import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, FONT } from "../../Constants";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const typeSearch = ["Nearest", "All", "Bac", "Trung", "Nam"];
const Search = () => {
  const [activeJobSearch, setActiveJobSearch] = useState("All");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Nhập tên trang trại"
          value=""
          onChange={() => {}}
          style={styles.textInput}
        />
        <FontAwesome
          name="search"
          size={24}
          color={COLORS.primary}
          style={styles.searchBtn}
        />
      </View>
      <View style={styles.tabsContainer}>
        <Entypo name="bookmarks" size={30} color="white" />
        <FlatList
          data={typeSearch}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobSearch, item)}
              onPress={() => {
                setActiveJobSearch(item);
                // navigation.push(`/search/${item}`);
                console.log(item);
              }}
            >
              <Text style={styles.tabTexts(activeJobSearch, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
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
  searchBtn: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
  },
  tabsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: SIZES.medium,
    gap: 20,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.white,
  }),
  tabTexts: (activeJobType, item) => ({
    // fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.white,
  }),
});
