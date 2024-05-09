import {
  Text,
  TouchableWithoutFeedback,
  View,
  UIManager,
  Platform,
  LayoutAnimation,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../Constants";
import styles from "./Accordion.Styles";
const Accordion = ({ title, details }) => {
  const [opened, setOpened] = useState(false);

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  function toggleAccordion() {
    LayoutAnimation.configureNext({
      duration: 300,
      create: { type: "easeIn", property: "opacity" },
      update: { type: "linear", springDamping: 0.3, duration: 250 },
    });
    setOpened(!opened);
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <AntDesign
            name={opened ? "caretup" : "caretdown"}
            size={30}
            color={COLORS.green}
          />
        </View>
      </TouchableWithoutFeedback>

      {opened && (
        <View style={styles.content}>
          <ScrollView>{details}</ScrollView>
        </View>
      )}
    </View>
  );
};

export default Accordion;
