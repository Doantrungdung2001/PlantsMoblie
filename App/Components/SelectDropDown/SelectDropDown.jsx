import { Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import CultivationActivities from "../CultivationActivites/CultivationActivities";
import PlantingActivity from "../PlantingActivity/PlantingActivity";
import FertilizationActivities from "../FertilizationActivities/FertilizationActivities";
import PestAndDiseaseControlActivities from "../PestAndDisease/PestAndDiseaseControlActivities";
import styles from "./SelectDropDown.Styles";
import Accordion from "../Accordion/Accordion";

const SelectDropDown = ({ dataFarming }) => {
  const [selectVegestable, setSelectVegestable] = useState();
  const [frequentlyAskedQuestions, setFrequentlyAskedQuestions] = useState([]);
  return (
    <View style={styles.contanier}>
      <SelectDropdown
        data={dataFarming}
        onSelect={(selectedItem, index) => {
          setSelectVegestable(index + 1);
          const updatedFAQ = [
            {
              nameAcitvity: "Hoạt động làm đất",
              detail: (
                <CultivationActivities
                  dataCutivations={
                    selectedItem.plantFarming.cultivationActivities
                  }
                />
              ),
            },
            {
              nameAcitvity: "Hoạt động gieo trồng",
              detail: (
                <PlantingActivity
                  dataPlanting={selectedItem.plantFarming.plantingActivity}
                />
              ),
            },
            {
              nameAcitvity: "Hoạt động bón phân",
              detail: (
                <FertilizationActivities
                  dataFertilizationActivity={
                    selectedItem.plantFarming.fertilizationActivities
                  }
                />
              ),
            },
            {
              nameAcitvity: "Phòng ngừa sâu bệnh",
              detail: (
                <PestAndDiseaseControlActivities
                  dataPestAndDiseaseControlActivities={
                    selectedItem.plantFarming.pestAndDiseaseControlActivities
                  }
                />
              ),
            },
          ];
          setFrequentlyAskedQuestions(updatedFAQ);
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
            <View key={index}>
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#D2D9DF" }),
                }}
              >
                <Image style={styles.imageProduct} source={item.img} />
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
              key={index}
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
