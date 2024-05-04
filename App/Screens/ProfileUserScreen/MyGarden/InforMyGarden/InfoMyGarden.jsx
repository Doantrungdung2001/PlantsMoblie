import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Heading from "../../../../Components/Heading/Heading";
import styles from "./InforMyGarden.Styles";

const InfoMyGarden = ({ infor }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Informaion Overview */}
      <View style={styles.postInfo}>
        <Heading text={"Thông tin vườn rau"} />
        <View style={styles.serviceInformation}>
          <View style={styles.information}>
            <Text style={styles.nameInformation}>Giá thành</Text>
            <Text style={styles.detailInformation}>
              {infor.gardenServiceTemplate.price}/1m2
            </Text>
          </View>
          <View style={styles.information}>
            <Text style={styles.nameInformation}>Diện tích</Text>
            <Text style={styles.detailInformation}>
              {infor.gardenServiceTemplate.square}m2
            </Text>
          </View>
          <View style={styles.information}>
            <Text style={styles.nameInformation}>Rau ăn lá</Text>
            <Text style={styles.detailInformation}>
              {infor.gardenServiceTemplate.leafyMax} loại cây
            </Text>
          </View>
          <View style={styles.information}>
            <Text style={styles.nameInformation}>Rau gia vị</Text>
            <Text style={styles.detailInformation}>
              {infor.gardenServiceTemplate.herbMax} loại cây
            </Text>
          </View>
          <View style={styles.information}>
            <Text style={styles.nameInformation}>Củ</Text>
            <Text style={styles.detailInformation}>
              {infor.gardenServiceTemplate.rootMax} loại cây
            </Text>
          </View>
          <View style={styles.information}>
            <Text style={styles.nameInformation}>Quả</Text>
            <Text style={styles.detailInformation}>
              {infor.gardenServiceTemplate.fruitMax} loại cây
            </Text>
          </View>
          <View style={styles.information}>
            <Text style={styles.nameInformation}>Số lần giao</Text>
            <Text style={styles.detailInformation}>
              {infor.gardenServiceTemplate.expectDeliveryPerWeek} lần/tuần
            </Text>
          </View>
          <View style={styles.information}>
            <Text style={styles.nameInformation}>Đầu ra kỳ vọng</Text>
            <Text style={styles.detailInformation}>
              {infor.gardenServiceTemplate.expectedOutput}kg
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.postInfo}>
        <Heading text={"Thông tin cây trồng"} />
        <View>
          {infor.gardenServiceRequest?.herbList && (
            <View>
              <Heading text={"Rau gia vị"} />
              {infor.gardenServiceRequest.herbList.map((vegetables, index) => (
                <View key={index}>
                  <Text style={styles.title}>{vegetables.plant_name}</Text>
                  <View style={styles.meta}>
                    <Text style={styles.date}>{vegetables.createdAt}</Text>
                  </View>
                  <Image
                    source={{ uri: vegetables.plant_thumb }}
                    style={styles.image}
                  />
                  <Text style={styles.content}>
                    {vegetables.plant_description}
                  </Text>
                </View>
              ))}
            </View>
          )}
          {infor.gardenServiceRequest?.leafyList && (
            <View>
              <Heading text={"Rau ăn lá"} />
              {infor.gardenServiceRequest.leafyList.map((vegetables, index) => (
                <View key={index}>
                  <Text style={styles.title}>{vegetables.plant_name}</Text>
                  <View style={styles.meta}>
                    <Text style={styles.date}>{vegetables.createdAt}</Text>
                  </View>
                  <Image
                    source={{ uri: vegetables.plant_thumb }}
                    style={styles.image}
                  />
                  <Text style={styles.content}>
                    {vegetables.plant_description}
                  </Text>
                </View>
              ))}
            </View>
          )}
          {infor.gardenServiceRequest?.rootList && (
            <View>
              <Heading text={"Củ"} />
              {infor.gardenServiceRequest.rootList.map((vegetables, index) => (
                <View key={index}>
                  <Text style={styles.title}>{vegetables.plant_name}</Text>
                  <View style={styles.meta}>
                    <Text style={styles.date}>{vegetables.createdAt}</Text>
                  </View>
                  <Image
                    source={{ uri: vegetables.plant_thumb }}
                    style={styles.image}
                  />
                  <Text style={styles.content}>
                    {vegetables.plant_description}
                  </Text>
                </View>
              ))}
            </View>
          )}
          {infor.gardenServiceRequest?.fruitList && (
            <View>
              <Heading text={"Quả"} />
              {infor.gardenServiceRequest.fruitList.map((vegetables, index) => (
                <View key={index}>
                  <Text style={styles.title}>{vegetables.plant_name}</Text>
                  <View style={styles.meta}>
                    <Text style={styles.date}>{vegetables.createdAt}</Text>
                  </View>
                  <Image
                    source={{ uri: vegetables.plant_thumb }}
                    style={styles.image}
                  />
                  <Text style={styles.content}>
                    {vegetables.plant_description}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default InfoMyGarden;
