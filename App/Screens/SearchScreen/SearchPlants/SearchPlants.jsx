import React, { useState, useEffect } from "react";
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
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import styles from "./SearchPlants.Styles";
import useAllPlantsRecommend from "./useAllPlantsRecommend";
import ListFarmResult from "../Result/ListFarmResult";
import SEARCH_FARM from "../../../Services/SearchFarmService";
import InputFilter from "../../../Components/InputFilter/InputFilter";
import { COLORS } from "../../../Constants";
import { renderTypePlant } from "../../../Utils/helper";

const SearchPlants = () => {
  const {
    dataAllPlantsRecommned,
    isSuccessAllPlantsRecommned,
    isLoadingAllPlantsRecommned,
    getAllPlantsRecommend,
  } = useAllPlantsRecommend();

  const [filteredContacts, setFilteredContacts] = useState(
    dataAllPlantsRecommned
  );

  useEffect(() => {
    setFilteredContacts(dataAllPlantsRecommned);
  }, [dataAllPlantsRecommned]);

  const [searchText, setSearchText] = useState("");
  const [displayFilterLocation, setDisplayFilterLocation] = useState(false);
  const [displayFilterPlants, setDisplayFilterPlants] = useState(false);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [selectedPlantsName, setSelectedPlantsName] = useState([]);
  const [showListFarmResult, setShowListFarmResult] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(100000);
  const [resultFarm, setResultFarm] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // State để theo dõi trạng thái tìm kiếm

  const handleSearch = async (text) => {
    setSearchText(text);
    const filtered = dataAllPlantsRecommned.filter((plants) =>
      plants.plant_name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handlePlantSelect = (plant) => {
    setSearchText("");
    const isAlreadySelected = selectedPlants.some(
      (selectedPlant) => selectedPlant.id === plant.id
    );
    if (!isAlreadySelected) {
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
    try {
      setIsSearching(true); // Bắt đầu tìm kiếm, hiển thị loading
      if (values) {
        const result = await SEARCH_FARM.getFarmFilter(values);
        if (result.data.status === 200) {
          setResultFarm(result.data.metadata);
          setShowListFarmResult(true);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSearching(false); // Kết thúc tìm kiếm, ẩn loading
    }
  };

  const handleSearchResult = () => {
    setDisplayFilterLocation(false)
    setSearchText("");
    setDisplayFilterPlants(false);
    setShowListFarmResult(false); // Reset showListFarmResult
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

  const resetSearch = () => {
    setSearchText("");
    setFilteredContacts(dataAllPlantsRecommned);
    setSelectedPlants([]);
    setSelectedPlantsName([]);
    setShowListFarmResult(false);
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
            placeholder="Chọn cây muốn trồng (Có thể chọn nhiều)"
            value={searchText}
            onChangeText={handleSearch}
            onFocus={() => {
              setDisplayFilterPlants(true);
              resetSearch();
            }}
          />
        </View>
        <TouchableOpacity onPress={handleSearchResult} style={styles.filterBtn}>
          <AntDesign name="search1" size={25} color="black" />
        </TouchableOpacity>
      </View>

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

      {displayFilterLocation && (
        <View style={{ margin: 5 }}>
          <View style={styles.filterUnDisplay}>
            <Text style={styles.filterTitle}>Lọc</Text>
            <TouchableOpacity onPress={() => setDisplayFilterLocation(false)}>
              <MaterialIcons name="cancel" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.filterMoreContainer}>
            <View style={styles.inputContainer}>
              <Text style={{ marginRight: 35 }}>Giá từ:</Text>
              <InputFilter
                placeholderText={0}
                value={minPrice}
                onChangeFunction={setMinPrice}
              />
              <Text>Đến:</Text>
              <InputFilter
                placeholderText={10000000}
                value={maxPrice}
                onChangeFunction={setMaxPrice}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Diện tích từ:</Text>
              <InputFilter
                placeholderText={0}
                value={minArea}
                onChangeFunction={setMinArea}
              />

              <Text>Đến:</Text>
              <InputFilter
                placeholderText={1000}
                value={maxArea}
                onChangeFunction={setMaxArea}
              />
            </View>
          </View>

          <CustomButton
            label={"Áp dụng "}
            onPress={() => {
              handleSearchResult(); // Khi nhấn Áp dụng cũng search luôn
            }}
          />
        </View>
      )}

      {isSuccessAllPlantsRecommned && displayFilterPlants && (
        <View style={styles.result}>
          <Text style={styles.textResult}>
            Có {filteredContacts?.length} cây trồng
          </Text>
          <TouchableOpacity onPress={() => setDisplayFilterPlants(false)}>
            <MaterialIcons name="cancel" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}

      {isSuccessAllPlantsRecommned && displayFilterPlants && (
        <FlatList
          data={filteredContacts}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => handlePlantSelect(item)}
            >
              <Image style={styles.image} source={{ uri: item.plant_thumb }} />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.plant_name}</Text>
                <Text style={styles.phoneText}>
                  {renderTypePlant(item.plant_type)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      {isLoadingAllPlantsRecommned && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}

      {showListFarmResult && <ListFarmResult dataListFarmResult={resultFarm} />}

      {isSearching && <ActivityIndicator size="large" color="#00ff00" />}
    </ScrollView>
  );
};

export default SearchPlants;
