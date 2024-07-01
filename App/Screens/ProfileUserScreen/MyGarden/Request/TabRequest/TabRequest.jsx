import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import React from "react";
import PageHeading from "../../../../../Components/PageHeading/PageHeading";
import { COLORS } from "../../../../../Constants";
import styles from "./TabRequest.Styles";
const TabRequest = () => {
  return (
    <ScrollView style={{ padding: 20 }}>
      <PageHeading title={" Yêu cầu "} />
      {/* <View style={{ paddingTop: 20 }}>
        <Heading text={"Thời gian"} />
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
      </View> */}
      <TouchableOpacity style={{ marginTop: 15 }}>
        <Text style={styles.confirmBtn}>Gửi yêu cầu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TabRequest;

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
