import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  Modal,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./NewPlants.Styles";
import { MaterialIcons } from "@expo/vector-icons";
import useAllPlantsRecommend from "../../../../SearchScreen/SearchPlants/useAllPlantsRecommend";
import { renderTypePlant } from "../../../../../Utils/helper";
import { COLORS } from "../../../../../Constants";
import GARDEN from "../../../../../Services/GardenService";

const NewPlants = ({ infor }) => {
  const {
    dataAllPlantsRecommned,
    isSuccessAllPlantsRecommned,
    isLoadingAllPlantsRecommned,
  } = useAllPlantsRecommend();

  const [contacts, setContacts] = useState(dataAllPlantsRecommned);
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [searchText, setSearchText] = useState("");
  const [showModalBtn, setShowModalBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useState("");
  const [message, setMessage] = useState({ text: "", color: "" });
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    setFilteredContacts(dataAllPlantsRecommned);
  }, [dataAllPlantsRecommned]);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = contacts.filter((contact) =>
      contact.plant_name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handlePlantSelect = (plant) => {
    setSelectedPlant(plant);
    setSearchText(plant.plant_name);
    setIsDropdownVisible(false);
  };

  const handleRequestNewPlants = async () => {
    setIsLoading(true);
    const data = {
      type: "newPlant",
      newPlant: selectedPlant.id,
      note: note,
    };
    try {
      const res = await GARDEN.addRequestInGarden(infor.id, data);
      if (res.data.status === 200 || res.data.status === 201) {
        setNote("");
        setMessage({ text: "Gửi yêu cầu thành công", color: "green" });
        setSelectedPlant(null); // Reset selected plant
        setSearchText(""); // Reset search text
      } else {
        setMessage({ text: "Gửi yêu cầu thất bại", color: "red" });
      }
    } catch (error) {
      setMessage({ text: "Gửi yêu cầu thất bại", color: "red" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (message.text !== "") {
      const timer = setTimeout(() => {
        setMessage({ text: "", color: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <View>
      <ScrollView style={{ height: "92%" }}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm cây"
            value={searchText}
            onChangeText={handleSearch}
            onFocus={() => setIsDropdownVisible(true)}
          />
          {isDropdownVisible && isSuccessAllPlantsRecommned && (
            <ScrollView style={{ marginBottom: 15 }}>
              <FlatList
                data={filteredContacts}
                renderItem={({ item }) => (
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
                        {renderTypePlant(item.type)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            </ScrollView>
          )}
          {isLoadingAllPlantsRecommned && (
            <ActivityIndicator size="large" color="#00ff00" />
          )}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => setShowModalBtn(!showModalBtn)}
        >
          <Text style={styles.continueButtonText}>Gửi yêu cầu</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Modal animationType="slide" visible={!showModalBtn}>
          <View style={styles.containerModal}>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => setShowModalBtn(false)}
            >
              <MaterialIcons name="cancel" size={30} color="red" />
            </TouchableOpacity>
            <View>
              <View style={styles.detailInfo}>
                <Text style={styles.subject}>Ghi chú</Text>
                <View style={styles.body}>
                  <TextInput
                    placeholder="Nhập ghi chú"
                    placeholderTextColor={COLORS.darkgray}
                    style={styles.bodyText}
                    multiline={true}
                    numberOfLines={10}
                    onChangeText={(note) => setNote(note)}
                    value={note}
                  />
                </View>
              </View>
              {message.text !== "" && (
                <Text
                  style={{ color: message.color, marginTop: 10, fontSize: 20 }}
                >
                  {message.text}
                </Text>
              )}
              <TouchableOpacity
                style={styles.btnSubmit}
                onPress={() => handleRequestNewPlants()}
              >
                {isLoading ? (
                  <ActivityIndicator size="small" color={COLORS.white} />
                ) : (
                  <Text style={styles.textBtnSubmit}>Gửi yêu cầu</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default NewPlants;
