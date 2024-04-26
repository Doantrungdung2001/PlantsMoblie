import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import CultivationActivities from "../CultivationActivites/CultivationActivities";
import PlantingActivity from "../PlantingActivity/PlantingActivity";
import FertilizationActivities from "../FertilizationActivities/FertilizationActivities";
import PestAndDiseaseControlActivities from "../PestAndDisease/PestAndDiseaseControlActivities";
import styles from "./SelectDropDown.Styles";
import Accordion from "../Accordion/Accordion";
const emojisWithIcons = [
  { title: "happy", icon: "emoticon-happy-outline" },
  { title: "cool", icon: "emoticon-cool-outline" },
  { title: "lol", icon: "emoticon-lol-outline" },
  { title: "sad", icon: "emoticon-sad-outline" },
  { title: "cry", icon: "emoticon-cry-outline" },
  { title: "angry", icon: "emoticon-angry-outline" },
  { title: "confused", icon: "emoticon-confused-outline" },
  { title: "excited", icon: "emoticon-excited-outline" },
  { title: "kiss", icon: "emoticon-kiss-outline" },
  { title: "devil", icon: "emoticon-devil-outline" },
  { title: "dead", icon: "emoticon-dead-outline" },
  { title: "wink", icon: "emoticon-wink-outline" },
  { title: "sick", icon: "emoticon-sick-outline" },
  { title: "frown", icon: "emoticon-frown-outline" },
];
const vegestable = [
  {
    name: "Rau cải thìa",
    image:
      "https://nongnghiepmoi.net/wp-content/uploads/2018/06/rau-cai-chip-1024x1024.jpg",
  },
  {
    name: "Rau mùi",
    image:
      "http://static4.rongbaycdn.com/zoom/950_700/rb_up_mps/2020/05/07/0/rongbay-92244840_2831173646935688_2431494240258228224_n-fgkrja-20200507114141.jpg",
  },
  {
    name: "Hành lá",
    image:
      "https://www.btaskee.com/wp-content/uploads/2022/07/hat-giong-hanh-la.jpg",
  },
  {
    name: "Củ cải",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.xscCaFnCwkE8G3-cLcHo_AHaEK&pid=Api&P=0&h=180",
  },
];
const frequentlyAskedQuestions = [
  {
    nameAcitvity: "Hoạt động làm đất",
    detail: <CultivationActivities />,
  },
  {
    nameAcitvity: "Hoạt động gieo trồng",
    detail: <PlantingActivity />,
  },
  {
    nameAcitvity: "Hoạt động bón phân",
    detail: <FertilizationActivities />,
  },
  {
    nameAcitvity: "Phòng ngừa sâu bệnh",
    detail: <PestAndDiseaseControlActivities />,
  },
];
const SelectDropDown = () => {
  const [selectVegestable, setSelectVegestable] = useState();
  return (
    <View style={styles.contanier}>
      <SelectDropdown
        data={vegestable}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setSelectVegestable(index);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              {selectedItem && (
                <Icon
                  name={selectedItem.icon}
                  style={styles.dropdownButtonIconStyle}
                />
              )}
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.name) || "Lựa chọn cây trồng"}
              </Text>
              <Icon
                name={isOpened ? "chevron-up" : "chevron-down"}
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View>
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#D2D9DF" }),
                }}
              >
                {/* <Icon name={item.icon} style={styles.dropdownItemIconStyle} /> */}
                {/* <Image style={styles.imageProduct} source={item.image} /> */}
                <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
              </View>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
      {selectVegestable && (
        <View>
          {frequentlyAskedQuestions.map((faq, index) => (
            <Accordion
              key={index.toString()}
              title={faq.nameAcitvity}
              details={faq.detail}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default SelectDropDown;


