import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const Slides = [
    "https://www.veteransunited.com/assets/craft/images/blog/_blogHero/farm.jpg",
    "https://montereybayfarmers.org/wp-content/uploads/2014/03/farm-fields-with-clouds21.jpg",
    "https://wallpapercave.com/wp/wp8778108.jpg",
    "https://cdn.wallpapersafari.com/26/87/16h8re.jpg",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={Slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageCocomponentStyle={{
          borderRadius: 15, 
          width: "95%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
