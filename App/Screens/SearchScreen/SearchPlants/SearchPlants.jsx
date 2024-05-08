import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./SearchPlants.Styles";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../Constants";
import useAllPlantsRecommend from "./useAllPlantsRecommend";
import { MaterialIcons } from "@expo/vector-icons";
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
  const {
    dataAllPlantsRecommned,
    isSuccessAllPlantsRecommned,
    isLoadingAllPlantsRecommned,
  } = useAllPlantsRecommend();

  const [filteredContacts, setFilteredContacts] = useState(
    dataAllPlantsRecommned
  );

  useEffect(() => {
    setFilteredContacts(dataAllPlantsRecommned);
  }, [dataAllPlantsRecommned]);
  const [searchText, setSearchText] = useState("");
  // display filter
  const [displayFilter, setDisplayFilter] = useState(false);
  // selected filter location
  const [selectedFilterLocation, setSelectedFilterLocation] = useState(null);
  // select plants
  const [selectedPlants, setSelectedPlants] = useState(false);
  const handleFilterPress = (index) => {
    setSelectedFilterLocation(index);
  };
  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = dataAllPlantsRecommned.filter((plants) => {
      return plants.plant_name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredContacts(filtered);
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
          <TextInput
            placeholder="Chọn cây muốn trồng(Có thể chọn nhiều)"
            value={searchText}
            onChangeText={handleSearch}
            onFocus={() => setSelectedPlants(true)}
          />
        </View>
        <TouchableOpacity
          onPress={() => setDisplayFilter(true)}
          style={styles.filterBtn}
        >
          <Ionicons name="options" size={28} color="white" />
        </TouchableOpacity>
      </View>
      {/* Filter */}
      {displayFilter && (
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
                  selectedFilterLocation === index && {
                    backgroundColor: COLORS.primary,
                  },
                ]}
                key={index}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* List plants */}
      {isSuccessAllPlantsRecommned && (
        <View>
          {selectedPlants && (
            <ScrollView>
              <View style={styles.result}>
                <Text text={styles.textResult}>
                  Có {filteredContacts.length} kết quả
                </Text>
                <TouchableOpacity onPress={() => setSelectedPlants(false)}>
                  <MaterialIcons name="cancel" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <FlatList
                data={filteredContacts}
                renderItem={({ item }) =>
                  item ? (
                    <View style={styles.itemContainer}>
                      <Image
                        style={styles.image}
                        source={{ uri: item.plant_thumb }}
                      />
                      <View style={styles.textContainer}>
                        <Text style={styles.nameText}>{item.plant_name}</Text>
                        <Text style={styles.phoneText}>{item.plant_type}</Text>
                      </View>
                    </View>
                  ) : (
                    <View style={{ marginTop: 20 }}>
                      <Text>Không tìm thấy cây trồng </Text>
                    </View>
                  )
                }
                keyExtractor={(item) => item.id.toString()}
              />
            </ScrollView>
          )}
        </View>
      )}
      {isLoadingAllPlantsRecommned && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </ScrollView>
  );
};

export default SearchPlants;
