import {
  FlatList,
  Image,
  Text,
  Button,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Heading from "../../../../Components/Heading/Heading";
import { COLORS } from "../../../../Constants";
import { useNavigation } from "@react-navigation/native";
import styles from "./ListGardenService.Styles";
import useListGardenService from "./useGardenService";

const ListGardenService = ({ farmId, farmInfo }) => {
  const navigation = useNavigation();
  const {
    allGardenSerive,
    isSuccessAllGardenService,
    isLoadingAllGardenService,
  } = useListGardenService({ farmId });
  console.log("Du liue", allGardenSerive);
  return (
    <View>
      <Heading text={"Dịch vụ trồng rau"} />
      {isSuccessAllGardenService && (
        <FlatList
          data={allGardenSerive}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return item.status === "active" ? (
              <View style={styles.container} key={index}>
                <Image
                  source={{ uri: item?.avatarGarden }}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.name}>{item?.name}</Text>
                  <Text style={styles.name}>{item?.price} VND</Text>
                  <View style={styles.buttonBtn}>
                    <Button
                      onPress={() =>
                        navigation.push("service-detail", {
                          serviceInfo: item,
                          farmInfo: farmInfo,
                        })
                      }
                      title="Chi tiết"
                      color={COLORS.white}
                      accessibilityLabel="Learn more about this purple button"
                    />
                  </View>
                </View>
              </View>
            ) : (
              <View key={index}>
                <Text style={{ color: "#B0C4DE" }}>
                  Nông trại chưa cập nhật dự án trồng rau hộ
                </Text>
              </View>
            );
          }}
        />
      )}
      {isLoadingAllGardenService && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </View>
  );
};

export default ListGardenService;
