import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  Button,
} from "react-native";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import React, { useState, useEffect } from "react";
import styles from "./SearchPlants.Styles";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../Constants";
import useAllPlantsRecommend from "./useAllPlantsRecommend";
import { MaterialIcons } from "@expo/vector-icons";
import { renderTypePlant } from "../../../Utils/helper";
import ListFarmResult from "../Result/ListFarmResult";
import SEARCH_FARM from "../../../Services/SearchFarmService";

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
  const [displayFilterLocation, setDisplayFilterLocation] = useState(false);
  // selected filter location
  const [selectedFilterLocation, setSelectedFilterLocation] = useState(null);

  // select plants
  const [displayFilterPlants, setDisplayFilterPlants] = useState(false);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [selectedPlantsName, setSelectedPlantsName] = useState([]);
  const [showListFarmResult, setShowListFarmResult] = useState(false);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(100000);

  //result filter farm
  const [resultFarm, setResultFarm] = useState([]);

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

  const handlePlantSelect = (plant) => {
    setSearchText("");
    const isAlreadySelected = selectedPlants.some(
      (selectedPlant) => selectedPlant.id === plant.id
    );
    if (!isAlreadySelected) {
      // If the plant is not already selected, add it to the selectedPlants array
      setSelectedPlants([...selectedPlants, plant]);
      setSelectedPlantsName([...selectedPlantsName, plant.plant_name]);
    }
  };

  const handleRemovePlant = (plant) => {
    const updatedPlants = selectedPlants.filter(
      (selectedPlant) => selectedPlant.id !== plant.id
    );
    setSelectedPlants(updatedPlants);
  };

  const onCreateFilter = async (values) => {
    console.log("Gia tri filter ---------", values);
    try {
      if (values) {
        const result = await SEARCH_FARM.getFarmFilter(values);
        console.log("ket qua tra ve -----", result.data.metadata);
        if (result.data.status === 200) {
          setResultFarm(result.data.metadata);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchResult = () => {
    setSearchText("");
    setDisplayFilterPlants(false);
    setShowListFarmResult(true);
    onCreateFilter({
      priceRange: {
        min: minPrice,
        max: maxPrice,
      },
      squareRange: {
        min: minArea,
        max: maxArea,
      },
      plantNames: selectedPlantsName,
    });
  };

  return (
    <ScrollView>
      <PageHeading title={"Tìm kiếm rau trồng"} />
      <View style={styles.searchSectionWrapper}>
        <View style={styles.searchBar}>
          <TouchableOpacity onPress={() => setDisplayFilterLocation(true)}>
            <Ionicons name="options" size={25} color="black" />
          </TouchableOpacity>

          <TextInput
            placeholder="Chọn cây muốn trồng(Có thể chọn nhiều)"
            value={searchText}
            onChangeText={handleSearch}
            onFocus={() => setDisplayFilterPlants(true)}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            handleSearchResult();
          }}
          style={styles.filterBtn}
        >
          <AntDesign name="search1" size={25} color="black" />
        </TouchableOpacity>
      </View>
      {/* display plants selected */}
      {selectedPlants.length > 0 && (
        <View>
          <ScrollView
            horizontal
            contentContainerStyle={{
              gap: 5,
              paddingVertical: 10,
              marginBottom: 10,
            }}
          >
            {selectedPlants.map((plant, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleRemovePlant(plant)}
                style={styles.filterContainer}
              >
                <Text style={styles.selectedPlantText}>{plant.plant_name}</Text>
                <MaterialIcons name="cancel" size={20} color="black" />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
      {/* Filter */}
      {displayFilterLocation && (
        <View style={{ margin: 5 }}>
          <View style={styles.filterUnDisplay}>
            <Text style={styles.filterTitle}>Lọc</Text>
            <TouchableOpacity onPress={() => setDisplayFilterLocation(false)}>
              <MaterialIcons name="cancel" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            {/* Price */}
            <View style={styles.inputContainer}>
              <Text>Giá từ</Text>
              <TextInput
                style={styles.input}
                placeholder="0"
                value={minPrice}
                onChangeText={(text) => setMinPrice(text)}
                keyboardType="numeric"
              />
              <Text>Đến</Text>
              <TextInput
                style={styles.input}
                placeholder="10000"
                value={maxPrice}
                onChangeText={(text) => setMaxPrice(text)}
                keyboardType="numeric"
              />
            </View>
            {/* Area */}
            <View style={styles.inputContainer}>
              <Text>Diện tích từ</Text>
              <TextInput
                style={styles.input}
                placeholder="0"
                value={minArea}
                onChangeText={(text) => setMinArea(text)}
                keyboardType="numeric"
              />
              <Text>Đến</Text>
              <TextInput
                style={styles.input}
                placeholder="0"
                value={maxArea}
                onChangeText={(text) => setMaxArea(text)}
                keyboardType="numeric"
              />
            </View>
          </View>

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
          <CustomButton label={"Áp dụng "} onPress={() => {}} />
        </View>
      )}
      {/* List plants */}
      {isSuccessAllPlantsRecommned && (
        <View>
          {displayFilterPlants && (
            <ScrollView>
              <View style={styles.result}>
                <Text text={styles.textResult}>
                  Có {filteredContacts.length} kết quả
                </Text>
                <TouchableOpacity onPress={() => setDisplayFilterPlants(false)}>
                  <MaterialIcons name="cancel" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <FlatList
                data={filteredContacts}
                renderItem={({ item }) =>
                  item ? (
                    <TouchableOpacity
                      style={styles.itemContainer}
                      onPress={() => handlePlantSelect(item)}
                    >
                      <Image
                        style={styles.image}
                        source={{ uri: item.plant_thumb }}
                      />
                      <View style={styles.textContainer}>
                        <Text style={styles.nameText}>{item.plant_name}</Text>
                        <Text style={styles.phoneText}>
                          {renderTypePlant(item.plant_type)}
                        </Text>
                      </View>
                    </TouchableOpacity>
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
      {showListFarmResult && <ListFarmResult dataListFarmResult={resultFarm} />}
    </ScrollView>
  );
};

export default SearchPlants;
