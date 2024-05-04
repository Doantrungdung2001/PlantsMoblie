import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Heading from "../../../../Components/Heading/Heading";
import styles from "./InforMyGarden.Styles";
const seed = {
  _id: "65d477f4b4c8b6de45c88406",
  plant: "65d42739189dcc81b9155174",
  seed_name: "Giống K.K.cross của Nhât",
  seed_thumb:
    "https://res.cloudinary.com/agritech/image/upload/c_fill,h_500,w_500/v1/image/65bf53967517b61da58eaaba/shmcrgps6te9uodobdue.jpg?_a=BAMCcSca0",
  seed_description:
    "đây là loại giống F1 thích hợp với các vùng đồng bằng ở phía Nam. Thời gian phát triển đến lúc thu hoạch gần 3 tháng. Giống K.K.cross có thể cho năng suất lên tới 40 tấn/ hecta.",
  isSeedDefault: false,
  isDeleted: false,
  createdAt: "2024-02-20T09:59:16.805Z",
  updatedAt: "2024-02-26T13:44:25.456Z",
  seed_slug: "Giong-K.K.cross-cua-Nhat",
  __v: 0,
};
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
              {infor.gardenServiceTemplate.leafyMax} loại
            </Text>
          </View>
          <View style={styles.information}>
            <Text style={styles.nameInformation}>Rau gia vị</Text>
            <Text style={styles.detailInformation}>
              {infor.gardenServiceTemplate.herbMax} loại
            </Text>
          </View>
          <View style={styles.information}>
            <Text style={styles.nameInformation}>Củ</Text>
            <Text style={styles.detailInformation}>
              {infor.gardenServiceTemplate.rootMax} loại
            </Text>
          </View>
          <View style={styles.information}>
            <Text style={styles.nameInformation}>Quả</Text>
            <Text style={styles.detailInformation}>
              {infor.gardenServiceTemplate.fruitMax} loại
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
          <View style={styles.information}>
            <Text style={styles.nameInformation}>Thời lượng dịch vụ</Text>
            <Text style={styles.detailInformation}>2 tháng</Text>
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
