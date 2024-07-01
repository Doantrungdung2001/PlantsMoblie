import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Other.Styles";
import { COLORS } from "../../../../../Constants";
import GARDEN from "../../../../../Services/GardenService";

const Other = ({ gardenId }) => {
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", color: "" });

  const handleRequestOther = async () => {
    setIsLoading(true);
    const data = {
      type: "other",
      note: note,
    };
    try {
      const res = await GARDEN.addRequestInGarden(gardenId, data);
      if (res.data.status === 200 || res.data.status === 201) {
        setNote("");
        setMessage({ text: "Gửi yêu cầu thành công", color: "green" });
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
    <ScrollView>
      <View>
        <View style={styles.detailInfo}>
          <Text style={styles.subject}>Ghi chú</Text>
          <View style={styles.body}>
            <TextInput
              placeholder="Nhập ghi chú"
              placeholderTextColor={COLORS.darkgray}
              style={styles.bodyText}
              multiline={true}
              numberOfLines={20}
              onChangeText={(note) => setNote(note)}
              value={note}
            />
          </View>
        </View>
      </View>
      {message.text !== "" && (
        <Text style={{ color: message.color, marginTop: 10, fontSize: 20 }}>
          {message.text}
        </Text>
      )}
      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => handleRequestOther(note)}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={COLORS.white} />
        ) : (
          <Text style={styles.textBtnSubmit}>Gửi yêu cầu</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Other;
