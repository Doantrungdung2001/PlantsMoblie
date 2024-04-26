import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import PageHeading from "../PageHeading/PageHeading";
import styles from "./Notification.Styles";
const data = [
  {
    id: 3,
    image: "https://bootdey.com/img/Content/avatar/avatar7.png",
    name: "March SoulLaComa",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    attachment: "https://via.placeholder.com/100x100/FFB6C1/000000",
  },
  {
    id: 2,
    image: "https://bootdey.com/img/Content/avatar/avatar6.png",
    name: "John DoeLink",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    attachment: "https://via.placeholder.com/100x100/20B2AA/000000",
  },
  {
    id: 4,
    image: "https://bootdey.com/img/Content/avatar/avatar2.png",
    name: "Finn DoRemiFaso",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    attachment: "",
  },
  {
    id: 5,
    image: "https://bootdey.com/img/Content/avatar/avatar3.png",
    name: "Maria More More",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    attachment: "",
  },
  {
    id: 1,
    image: "https://bootdey.com/img/Content/avatar/avatar1.png",
    name: "Frank Odalthh",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    attachment: "https://via.placeholder.com/100x100/7B68EE/000000",
  },
  {
    id: 6,
    image: "https://bootdey.com/img/Content/avatar/avatar4.png",
    name: "Clark June Boom!",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    attachment: "",
  },
  {
    id: 7,
    image: "https://bootdey.com/img/Content/avatar/avatar5.png",
    name: "The googler",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    attachment: "",
  },
];
const Notification = () => {
  const [comments, setComments] = useState(data);
  return (
    <ScrollView style={{ margin: 15 }}>
      <PageHeading title={"Thông báo"} />
      <FlatList
        style={styles.root}
        data={comments}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          let attachment = <View />;

          let mainContentStyle;
          if (Notification.attachment) {
            mainContentStyle = styles.mainContent;
            attachment = (
              <Image
                style={styles.attachment}
                source={{ uri: Notification.attachment }}
              />
            );
          }
          return (
            <TouchableOpacity style={styles.container}>
              <Image
                source={{ uri: Notification.image }}
                style={styles.avatar}
              />
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.name}>{Notification.name}</Text>
                    <Text>{Notification.text}</Text>
                  </View>
                  <Text style={styles.timeAgo}>2 hours ago</Text>
                </View>
                {attachment}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

export default Notification;
