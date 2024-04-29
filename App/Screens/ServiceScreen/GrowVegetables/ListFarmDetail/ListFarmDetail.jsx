import { FlatList, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import Search from "../../../../Components/Search/Search";
import CardFarm from "../../../../Components/CardFarm/CardFarm";
import useListFarm from "../../../../Components/ListFarm/useListFarm";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import styles from "./ListFarmDetail.Styles";
const ListFarmDetail = () => {
  const { allFarm, isSuccessAllFarm, isLoadingAllFarm } = useListFarm();
  const param = useRoute().params;
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <PageHeading title={"Danh sách nông trại"} />
      <Search />
      {isSuccessAllFarm && (
        <SafeAreaView style={styles.container}>
          <FlatList
            style={{ marginTop: 10 }}
            data={allFarm}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <CardFarm farm={item} key={index} />
            )}
          />
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default ListFarmDetail;
