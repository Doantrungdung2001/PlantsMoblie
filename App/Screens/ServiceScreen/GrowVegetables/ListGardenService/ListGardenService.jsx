import { FlatList, Image, StyleSheet, Text, Button, View } from "react-native";
import React from "react";
import Heading from "../../../../Components/Heading/Heading";
import { COLORS } from "../../../../Constants";
import { useNavigation } from "@react-navigation/native";
import styles from "./ListGardenService.Styles";
import useListGardenService from "./useGardenService";

const ListGardenService = ({ farmId }) => {
  const navigation = useNavigation();
  const {
    allGardenSerive,
    isSuccessAllGardenService,
    isLoadingAllGardenService,
  } = useListGardenService({ farmId });
  console.log(farmId);
  console.log(allGardenSerive);
  return (
    <View>
      <Heading text={"Dịch vụ trồng rau"} />
      {isSuccessAllGardenService && (
        <FlatList
          data={allGardenSerive}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={styles.container} key={index}>
              <Image source={{ uri: item?.image }} style={styles.image} />
              <View>
                <Text style={styles.name}>{item?.name}</Text>
                <Text style={styles.name}>{item?.price}</Text>
                <View style={styles.buttonBtn}>
                  <Button
                    onPress={() =>
                      navigation.push("service-detail", { serviceInfo: item })
                    }
                    title="Chi tiết"
                    color={COLORS.white}
                    accessibilityLabel="Learn more about this purple button"
                  />
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ListGardenService;
