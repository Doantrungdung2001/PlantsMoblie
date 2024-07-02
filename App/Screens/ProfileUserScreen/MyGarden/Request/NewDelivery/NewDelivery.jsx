import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import styles from "./NewDelivery.Styles";
import { COLORS } from "../../../../../Constants";
import GARDEN from "../../../../../Services/GardenService";

const ProductCard = ({ item, onIncrement, onDecrement }) => {
  return (
    <View style={styles.productCard}>
      <Image source={{ uri: item?.url }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
      </View>
      <View style={styles.productAmount}>
        <TouchableOpacity style={styles.amountButton} onPress={onDecrement}>
          <Text style={styles.amountButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.amountText}>{item.amount}kg</Text>
        <TouchableOpacity style={styles.amountButton} onPress={onIncrement}>
          <Text style={styles.amountButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NewDelivery = ({ infor, refetch }) => {
  const [showModalBtn, setShowModalBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useState("");
  const [message, setMessage] = useState({ text: "", color: "" });

  const initialPlantsState = infor.listPlants.map((plant) => ({
    plant: plant.id,
    name: plant.plants_name,
    url: plant.plants_thumb,
    amount: 0,
  }));

  const [plants, setPlants] = useState(initialPlantsState);

  const handleIncrement = (item) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.plant === item.plant
          ? { ...plant, amount: plant.amount + 1 }
          : plant
      )
    );
  };

  const handleDecrement = (item) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.plant === item.plant
          ? { ...plant, amount: Math.max(0, plant.amount - 1) }
          : plant
      )
    );
  };

  const renderProductItem = ({ item }) => (
    <ProductCard
      item={item}
      onIncrement={() => handleIncrement(item)}
      onDecrement={() => handleDecrement(item)}
    />
  );

  const handleRequestDelivery = async () => {
    setIsLoading(true);
    const data = {
      type: "deliveryRequest",
      deliveryDetails: plants,
      note: note,
    };
    try {
      const res = await GARDEN.addRequestInGarden(infor.id, data);
      if (res.data.status === 200 || res.data.status === 201) {
        setNote("");
        setMessage({ text: "Gửi yêu cầu thành công", color: "green" });
        setPlants(initialPlantsState); // Reset plants
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
        setShowModalBtn(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <View>
      <ScrollView
        style={{
          height: "92%",
          flex: 1,
          backgroundColor: "#f7f7f7",
          paddingTop: 10,
        }}
      >
        <View>
          <FlatList
            data={plants}
            style={styles.productList}
            renderItem={renderProductItem}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingBottom: 100,
            }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => setShowModalBtn(!showModalBtn)}
      >
        <Text style={styles.continueButtonText}>Gửi yêu cầu</Text>
      </TouchableOpacity>

      <View>
        <Modal animationType="slide" visible={showModalBtn}>
          <View style={styles.containerModal}>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => setShowModalBtn(!showModalBtn)}
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
                  style={{
                    color: message.color,
                    marginTop: 10,
                    fontSize: 20,
                  }}
                >
                  {message.text}
                </Text>
              )}
              <TouchableOpacity
                style={styles.btnSubmit}
                onPress={() => handleRequestDelivery()}
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

export default NewDelivery;
