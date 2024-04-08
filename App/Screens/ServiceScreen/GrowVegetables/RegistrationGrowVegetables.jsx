import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import PageHeading from "../../../Components/PageHeading";
import Heading from "../../../Components/Heading";
import { COLORS } from "../../../Constants";

const RegistrationGrowVegetables = () => {
  const [note, setNote] = useState();
  const [time,setTime] = useState();
  return (
    <View style={{ padding: 20 }}>
      <PageHeading title={"Đăng ký"} />
      <View style={{ paddingTop: 20 }}>
        <Heading text={"Thời gian"} />
        <TextInput
          placeholder="90 ngày,..."
          numberOfLines={1}
          multiline={true}
          style={styles.noteTextArea}
          onChange={(text) => setTime(text)}
        />
      </View>
      <View style={{ paddingTop: 20 }}>
        <Heading text={"Ghi chú"} />
        <TextInput
          placeholder="Ghi chú thêm"
          numberOfLines={4}
          multiline={true}
          style={styles.noteTextArea}
          onChange={(text) => setNote(text)}
        />
      </View>
      {/* Bottom Confirm */}
      <TouchableOpacity style={{ marginTop: 15 }}>
        <Text style={styles.confirmBtn}>Gửi đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationGrowVegetables;

const styles = StyleSheet.create({
  noteTextArea: {
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: "top",
    padding: 20,
    fontSize: 16,
    fontFamily: "regular",
    borderColor: COLORS.primary,
  },
  confirmBtn: {
    textAlign: "center",
    fontFamily: "regular",
    fontSize: 17,
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    padding: 15,
    borderRadius: 99,
    elevation: 2,
  },
});
