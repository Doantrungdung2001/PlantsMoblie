import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { COLORS, SIZES, FONTS, images, icons } from "../../Constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const featureData = [
    {
      id: 1,
      icon: icons.send,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightyellow,
      description: "Transfer",
    },
    {
      id: 2,
      icon: icons.internet,
      color: COLORS.primary,
      backgroundColor: COLORS.lightGreen,
      description: "Internet",
    },
    {
      id: 3,
      icon: icons.wallet,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: "Wallet",
    },
    {
      id: 4,
      icon: icons.bill,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightyellow,
      description: "Bill",
    },
    {
      id: 5,
      icon: icons.more,
      color: COLORS.purple,
      backgroundColor: COLORS.lightpurple,
      description: "More",
    },
  ];

  const specialPromoData = [
    {
      id: 1,
      img: images.promoBanner,
      title: "Bonus Casback1",
      description: "Don't miss it",
    },
    {
      id: 2,
      img: images.promoBanner,
      title: "Bonus Casback2",
      description: "Don't miss it",
    },
    {
      id: 3,
      img: images.promoBanner,
      title: "Bonus Casback3",
      description: "Don't miss it",
    },
    {
      id: 4,
      img: images.promoBanner,
      title: "Bonus Casback4",
      description: "Don't miss it",
    },
  ];

  const [feature, setFeatures] = useState(featureData);
  const [specialPromo, setSpecialPromo] = useState(specialPromoData);
  const navigation = useNavigation();
  function renderHeader() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: SIZES.padding * 2,
            padding: 20,
            backgroundColor: COLORS.green,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ ...FONTS.h1 }}>Hello</Text>
            <Text style={{ ...FONTS.body2, color: COLORS.gray }}>
              ByProgram
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.lightGray,
              }}
            >
              <Image
                source={icons.bell}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.secondary,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: -5,
                  right: -5,
                  height: 10,
                  width: 10,
                  backgroundColor: COLORS.red,
                  borderRadius: 5,
                }}
              ></View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function renderBanner() {
    const Slides = [
      "https://www.veteransunited.com/assets/craft/images/blog/_blogHero/farm.jpg",
      "https://montereybayfarmers.org/wp-content/uploads/2014/03/farm-fields-with-clouds21.jpg",
      "https://wallpapercave.com/wp/wp8778108.jpg",
      "https://cdn.wallpapersafari.com/26/87/16h8re.jpg",
    ];
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
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
  }

  function renderFeatures() {
    const Header = () => (
      <View style={{ marginBottom: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h3 }}>feature</Text>
      </View>
    );

    const renderItem = ({ item, index }) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
          width: 60,
          alignItems: "center",
        }}
        onPress={() =>
          navigation.push(`service-screen/${item.description}`, {
            category: item.description,
          })
        }
      >
        <View
          style={{
            height: 50,
            width: 50,
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              height: 20,
              width: 20,
              tintColor: item.color,
            }}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            flexWrap: "wrap",
            ...FONTS.body4,
          }}
        >
          {item.description}
        </Text>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={Header}
        data={feature}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        style={{ marginTop: SIZES.padding * 2 }}
      />
    );
  }

  function renderPromos() {
    const HeaderComponet = () => (
      <View>
        {renderHeader()}
        {renderBanner()}
        {renderFeatures()}
        {renderPromoHeader()}
      </View>
    );

    const renderPromoHeader = () => (
      <View
        style={{
          flexDirection: "row",
          marginBottom: SIZES.padding,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>Special Promos</Text>
        </View>
        <TouchableOpacity onPress={() => console.log("View All")}>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
        </TouchableOpacity>
      </View>
    );
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.5,
        }}
        onPress={() => console.log(item.title)}
      >
        <View
          style={{
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.primary,
          }}
        >
          <Image
            source={images.promoBanner}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </View>

        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
          <Text style={{ ...FONTS.body4 }}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <FlatList
        ListHeaderComponent={HeaderComponet}
        contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={specialPromoData}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ marginBottom: 80 }}></View>}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderPromos()}
    </SafeAreaView>
  );
};

export default Home;
