import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./SearchPlants.Styles";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../Constants";
const dataFilter = [
  {
    title: "Gần nhất",
    key_code: "nearst",
  },
  {
    title: "Miền bắc",
    key_code: "north",
  },
  {
    title: "Miền Trung",
    key_code: "central",
  },
  {
    title: "Miền Nam",
    key_code: "south",
  },
];
const SearchPlants = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterPress = (index) => {
    setSelectedFilter(index);
  };
  return (
    <ScrollView>
      <PageHeading title={"Tìm kiếm rau trồng"} />
      <View style={styles.searchSectionWrapper}>
        <View style={styles.searchBar}>
          <AntDesign
            name="search1"
            size={25}
            color="black"
            style={{ marginRight: 5 }}
          />
          <TextInput placeholder="Nhập cây muốn trồng" />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
          <Ionicons name="options" size={28} color="white" />
        </TouchableOpacity>
      </View>
      {/* Filter */}
      <View style={{ margin: 5 }}>
        <Text style={styles.filterTitle}>Lọc</Text>
        <ScrollView
          horizontal
          contentContainerStyle={{
            gap: 10,
            paddingVertical: 10,
            marginBottom: 10,
          }}
        >
          {dataFilter.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                handleFilterPress(index);
              }}
              style={[
                styles.filterContainer,
                selectedFilter === index && { backgroundColor: COLORS.primary },
              ]}
              key={index}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default SearchPlants;
