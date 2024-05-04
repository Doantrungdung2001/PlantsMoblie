import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../Constants";
import styles from "./Fertilization.Styles";

const FertilizationActivities = ({dataFertilizationActivity}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectActivity, setSelectActivity] = useState();
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={dataFertilizationActivity}
          style={styles.productList}
          renderItem={(activity, index) => {
            return (
              <TouchableOpacity
                style={styles.productCard}
                onPress={() => {
                  setShowModal(!showModal);
                  setSelectActivity(activity);
                }}
                key={index}
              >
                <View style={{ alignSelf: "flex-start" }}>
                  <Text style={styles.productName}>
                    {activity.item.fertilizationTime}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-end",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <AntDesign name="infocirlce" size={24} color="black" />
                </View>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
      <Modal animationType="slide" visible={showModal}>
        <View style={{ padding: 20, paddingTop: 70 }}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
            onPress={() => setShowModal(!showModal)}
          >
            <Ionicons name="arrow-back" size={30} color="black" />
            <Text
              style={{
                fontSize: 23,
                fontWeight: "600",
              }}
            >
              Thông tin hoạt động
            </Text>
          </TouchableOpacity>
        </View>
        {selectActivity ? (
          <ScrollView>
            <View
              style={{
                padding: 10,
                justifyContent: "center",
                borderRadius: 10,
                backgroundColor: COLORS.green,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 30,
                marginBottom: 30,
              }}
            ></View>
            <View style={styles.detailInfo}>
              <Text style={styles.subject}>
                {selectActivity.item.fertilizationTime}
              </Text>
              <View style={styles.body}>
                <Text style={styles.bodyText}>
                  {selectActivity.item.description}
                </Text>
              </View>
            </View>
            <View style={{ marginBottom: 30 }}></View>
          </ScrollView>
        ) : (
          <View>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: 30,
                fontWeight: "600",
                textAlign: "center",
                marginTop: 40,
              }}
            >
              Hoạt động chưa cập nhật
            </Text>
          </View>
        )}
      </Modal>
    </View>
  );
};

export default FertilizationActivities;
