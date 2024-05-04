import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styles from "./PestAndDisease.Styles";
import { renderTypePestAndDisease } from "../../Utils/helper";
const PestAndDiseaseControlActivities = ({dataPestAndDiseaseControlActivities}) => {
  const [selectActivity, setSelectActivity] = useState();
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={dataPestAndDiseaseControlActivities}
          style={styles.productList}
          renderItem={(activity, index) => {
            return (
              <TouchableOpacity
                style={styles.productCard}
                onPress={() => {
                  setSelectActivity(activity);
                  setShowModal(!showModal);
                }}
              >
                <View style={styles.productInfo}>
                  <View style={{ alignSelf: "flex-start" }}>
                    <Text style={styles.productName}>{activity.item.name}</Text>
                  </View>
                  <View style={{ alignSelf: "flex-end" }}>
                    <AntDesign name="infocirlce" size={24} color="black" />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>

      <Modal animationType="slide" visible={showModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalBtn}
            onPress={() => setShowModal(!showModal)}
          >
            <Ionicons name="arrow-back" size={30} color="black" />
            <Text style={styles.modalText}>Thông tin hoạt động</Text>
          </TouchableOpacity>
        </View>
        {selectActivity ? (
          <ScrollView>
            <View style={styles.modalSpace}></View>
            <View style={styles.detailInfo}>
              <Text style={styles.subject}>{selectActivity.item.name}</Text>
              <View style={styles.body}>
                <Text style={styles.bodyText}>
                  {renderTypePestAndDisease(selectActivity.item.type)}
                </Text>
              </View>
            </View>
            <View style={styles.detailInfo}>
              <Text style={styles.subject}>Dấu hiệu nhận biết</Text>
              <View style={styles.body}>
                <Text style={styles.bodyText}>
                  {selectActivity.item.symptoms}
                </Text>
              </View>
            </View>
            <View style={styles.detailInfo}>
              <Text style={styles.subject}>Giải pháp</Text>
              <View style={styles.body}>
                {selectActivity.item.solution.map((infor, index) => (
                  <Text style={styles.bodyText}>
                    {index + 1} -- {infor}
                  </Text>
                ))}
              </View>
            </View>
            <View style={{ marginBottom: 30 }}></View>
          </ScrollView>
        ) : (
          <View>
            <Text style={styles.textDefault}>Hoạt động chưa cập nhật</Text>
          </View>
        )}
      </Modal>
    </View>
  );
};

export default PestAndDiseaseControlActivities;
