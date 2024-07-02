import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../Constants";
import IntruductionProject from "../IntruductionFarm/IntruductionFarm";
import ListGardenService from "../ListGardenService/ListGardenService";
import styles from "./DetailFarm.Styles";
import useListGardenService from "../ListGardenService/useGardenService";
import useListPlantFarm from "./useListPlantFarm";

const DetailFarmGrowVegetables = () => {
  const navigation = useNavigation();
  const param = useRoute().params;
  const [farmInformation, setFarmInformation] = useState(param.farmInfo);
  const {
    allGardenSerive,
    isSuccessAllGardenService,
    isLoadingAllGardenService,
    refetchAllGardenService,
  } = useListGardenService({
    farmId: param.farmInfo._id,
  });
  const {
    dataAllPlantFarm,
    isSuccessAllPlantFarm,
    isLoadingAllPlantFarm,
    refetcListPlantFarm,
  } = useListPlantFarm({
    farmId: param.farmInfo._id,
  });

  useFocusEffect(
    useCallback(() => {
      refetchAllGardenService();
    }, [refetchAllGardenService])
  );

  useFocusEffect(
    useCallback(() => {
      refetcListPlantFarm();
    }, [refetcListPlantFarm])
  );
  return (
    <View>
      <ScrollView>
        <TouchableOpacity
          style={styles.backBtnContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={40} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: farmInformation?.avatar }}
          style={styles.avatar}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.nameFarm}>{farmInformation.name}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.emailFarm}>{farmInformation?.email}</Text>
            <Text style={styles.phoneFarm}>{farmInformation?.phone}</Text>
          </View>
          <Text style={styles.addressFarm}>
            <Ionicons
              name="location-sharp"
              size={24}
              color={COLORS.secondary}
              style={{ marginRight: 14 }}
            />
            {farmInformation.address}
          </Text>
          <View style={styles.centerContent}>
            {isSuccessAllPlantFarm && (
              <FlatList
                contentContainerStyle={styles.studentListContainer}
                data={dataAllPlantFarm}
                renderItem={({ item, index }) => (
                  <Image
                    source={{ uri: item?.plant_thumb  }}
                    style={styles.studentAvatar}
                  />
                )}
                horizontal
              />
            )}

            {isLoadingAllPlantFarm && (
              <ActivityIndicator size="large" color="#00ff00" />
            )}
          </View>

          <View style={styles.line}></View>

          <IntruductionProject Info={farmInformation} />

          <View style={styles.line}></View>
        </View>
        {/* slider service */}
        {isLoadingAllGardenService && (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
        {isSuccessAllGardenService && (
          <ListGardenService
            serviceInfo={allGardenSerive}
            farmInfo={farmInformation}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default DetailFarmGrowVegetables;
