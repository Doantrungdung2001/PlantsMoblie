import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import styles from "./CultivationProcess.Styles";
import useListProcess from "./useCultivationProcess";
import { formatDate, formatTime } from "../../../../Utils/helper";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../Constants";
const data = [
  {
    id: "65d5f97d722b35d04cc226c2",
    plant: {
      __v: 0,
      _id: "65d5c1b7722b35d04cc223b4",
      createdAt: "2024-02-20T18:14:51.155Z",
      farm: "65bf5424ee44e84e45cf30e1",
      isActive: true,
      isDeleted: false,
      plant_description:
        " Cà rốt là cây chịu lạnh. ở nhiệt độ 8oC hạt có thể nảy mầm sau 20-25 ngày, còn ở nhiệt độ thích hợp 20-25oC nảy mầm sau 5-7 ngày. Nhiệt độ trung bình cho cây sinh tr­ưởng và hình thành củ 20-22oC, ở nhiệt độ 25oC củ phát triển yếu, hàm l­ượng vitamin A giảm.",
      plant_name: "Cà rốt",
      plant_slug: "ca-rot",
      plant_thumb:
        "https://res.cloudinary.com/agritech/image/upload/c_fill,h_500,w_500/v1/image/65bf53967517b61da58eaaba/naqlxgyqib5vgl2alg0y.jpg?_a=BAMCcSca0",
      plant_type: "root",
      timeCultivates: [Array],
      updatedAt: "2024-02-20T18:14:51.155Z",
    },
    process: [[Object], [Object], [Object], [Object], [Object], [Object]],
    seed: "65d5c1b8722b35d04cc223bc",
    startDate: "2024-02-21T13:24:13.863Z",
    status: "inProgress",
  },
  {
    id: "65d5f97d722b35d04cc226c0",
    plant: {
      __v: 0,
      _id: "65d47de3b4c8b6de45c8845e",
      createdAt: "2024-02-20T04:14:49.412Z",
      farm: "65bf5424ee44e84e45cf30e1",
      isActive: true,
      isDeleted: false,
      plant_description:
        "Cải bắp có chỉ số diện tích lá cao, hệ số sử dụng nước rất lớn, có bộ rễ chùm phát triển mạnh. Đặc biệt ở cải bắp khả năng phục hồi bộ lá khá cao. Các thí nghiệm cho thấy, khi cắt 25% diện tích bề mặt lá ở giai đoạn trước cuốn bắp, năng suất vẫn đạt 97-98% so với không cắt. Điều đó khẳng định việc phun thuốc hoá hoá học trừ sâu tơ lứa 1 trong nhiều trường hợp là không cần thiết.",
      plant_name: "Cây cải bắp",
      plant_slug: "cay-cai-bap",
      plant_thumb:
        "https://res.cloudinary.com/agritech/image/upload/c_fill,h_500,w_500/v1/image/65bf53967517b61da58eaaba/vs9fegcwtbsqweypqhi2.jpg?_a=BAMCcSca0",
      plant_type: "leafy",
      timeCultivates: [Array],
      updatedAt: "2024-02-23T08:38:50.898Z",
    },
    process: [[Object], [Object], [Object], [Object], [Object], [Object]],
    seed: "65d47de4b4c8b6de45c88466",
    startDate: "2024-02-21T13:24:13.863Z",
    status: "inProgress",
  },
  {
    id: "65d5f97d722b35d04cc226c1",
    plant: {
      __v: 0,
      _id: "65d487b3b4c8b6de45c88529",
      createdAt: "2024-02-19T18:36:22.472Z",
      farm: "65bf5424ee44e84e45cf30e1",
      isActive: true,
      isDeleted: false,
      plant_description:
        "Cây bố xôi có tên khoa học Spinach oleraceac, lá hình Oval hoặc hình lưỡi mác tùy thuộc từng loại giống, dựa trên hình dạng lá đó mà kích thước cũng khác nhau, chiều dài lá trưởng thành khoảng 20-30cm và rộng 7-15cm. Rễ ăn nông, thuộc rễ cọc, có hệ thống rễ phụ phát triển mạnh. Hoa có màu vàng xanh lá cây, đường kính hoa 3-4mm, cứng, khô, sần.",
      plant_name: "Cải bó xôi",
      plant_slug: "cai-bo-xoi",
      plant_thumb:
        "https://res.cloudinary.com/agritech/image/upload/c_fill,h_500,w_500/v1/image/65bf53967517b61da58eaaba/h2yfivfsbttryfejllcq.jpg?_a=BAMCcSca0",
      plant_type: "leafy",
      timeCultivates: [Array],
      updatedAt: "2024-02-19T18:36:22.472Z",
    },
    process: [],
    seed: "65d487b3b4c8b6de45c88531",
    startDate: "2024-02-21T13:24:13.863Z",
    status: "inProgress",
  },
  {
    id: "65d5f97d722b35d04cc226bf",
    plant: {
      __v: 0,
      _id: "65d5c1ee722b35d04cc22424",
      createdAt: "2024-02-21T08:40:21.696Z",
      farm: "65bf5424ee44e84e45cf30e1",
      isActive: true,
      isDeleted: false,
      plant_description:
        "Ớt là một loại quả của các cây thuộc chi Capsicum của họ Cà (Solanaceae). Ớt là một loại quả gia vị cũng như loại quả làm rau (ớt Đà Lạt) phổ biển trên thế giới. Ớt có nguồn gốc từ châu Mỹ; ngày nay nó được trồng khắp nơi trên thế giới và được sử dụng làm gia vị, rau, và thuốc.",
      plant_name: "Ớt cay",
      plant_slug: "ot-cay",
      plant_thumb:
        "https://res.cloudinary.com/agritech/image/upload/c_fill,h_500,w_500/v1/image/65bf53967517b61da58eaaba/i7hc39ebdkdbhosmpwnm.jpg?_a=BAMCcSca0",
      plant_type: "herb",
      timeCultivates: [Array],
      updatedAt: "2024-02-21T08:40:21.696Z",
    },
    process: [],
    seed: "65d5c1ee722b35d04cc2242c",
    startDate: "2024-02-21T13:24:13.863Z",
    status: "inProgress",
  },
  {
    id: "65d5f97d722b35d04cc226c3",
    plant: {
      __v: 0,
      _id: "65d5c1db722b35d04cc223f1",
      createdAt: "2024-02-21T04:09:40.547Z",
      farm: "65bf5424ee44e84e45cf30e1",
      isActive: true,
      isDeleted: false,
      plant_description:
        "Cà chua là một loại rau quả làm thực phẩm. Quả ban đầu có màu xanh, chín ngả màu từ vàng đến đỏ. Cà chua có vị hơi chua và là một loại thực phẩm bổ dưỡng, tốt cho cơ thể, giàu vitamin C và A, đặc biệt là giàu lycopene tốt cho sức khỏe.",
      plant_name: "Cà chua",
      plant_slug: "ca-chua",
      plant_thumb:
        "https://res.cloudinary.com/agritech/image/upload/c_fill,h_500,w_500/v1/image/65bf53967517b61da58eaaba/e6ddghtgpitjdxsmijas.jpg?_a=BAMCcSca0",
      plant_type: "fruit",
      timeCultivates: [Array],
      updatedAt: "2024-02-21T04:09:40.547Z",
    },
    process: [],
    seed: "65d5c1db722b35d04cc223f9",
    startDate: "2024-02-21T13:24:13.863Z",
    status: "inProgress",
  },
];
// const classes = [
//   {
//     startTime: "09:00",
//     endTime: "10:30",
//     title: "History of Physics",
//     bgColor: "#E0FFFF",
//     students: [
//       {
//         id: "1",
//         name: "John",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
//       },
//       {
//         id: "2",
//         name: "Emily",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
//       },
//       {
//         id: "3",
//         name: "Michael",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
//       },
//       {
//         id: "4",
//         name: "Michael",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
//       },
//       {
//         id: "5",
//         name: "Michael",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
//       },
//     ],
//   },
//   {
//     startTime: "10:30",
//     endTime: "11:00",
//     title: "History of Physics",
//     bgColor: "#E6E6FA",
//     students: [
//       {
//         id: "6",
//         name: "Sarah",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
//       },
//       {
//         id: "7",
//         name: "David",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
//       },
//       {
//         id: "8",
//         name: "Sophia",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
//       },
//     ],
//   },
//   {
//     startTime: "11:00",
//     endTime: "11:30",
//     title: "History of Physics",
//     bgColor: "#FAF0E6",
//     students: [
//       {
//         id: "9",
//         name: "Sarah",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
//       },
//       {
//         id: "10",
//         name: "David",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
//       },
//       {
//         id: "11",
//         name: "Sophia",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
//       },
//     ],
//   },
//   {
//     startTime: "11:30",
//     endTime: "12:30",
//     title: "History of Physics",
//     bgColor: "#FAFAD2",
//     students: [
//       {
//         id: "12",
//         name: "Sarah",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
//       },
//       {
//         id: "13",
//         name: "David",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
//       },
//       {
//         id: "14",
//         name: "Sophia",
//         avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
//       },
//     ],
//   },
//   // Add more classes as needed
// ];
const CultivationProcess = ({ gardenId }) => {
  const { allProcess, isSuccessAllProcess, isLoadingAllProcess } =
    useListProcess({
      gardenId: gardenId,
    });

  const [showModal, setShowModal] = useState(false);
  const [detailProcess, setDetailProcess] = useState([]);

  const renderClassItem = ({ item }) => (
    <View style={styles.classItem}>
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>{formatDate(item.startDate)}</Text>
          <Text style={styles.endTime}>{formatTime(item.startDate)}</Text>
        </View>

        <TouchableOpacity
          style={styles.cardProcess}
          onPress={() => {
            setShowModal(!showModal);
            setDetailProcess(item.process);
          }}
        >
          <Text style={styles.cardTitle}>{item.plant.plant_name}</Text>
          <Text style={styles.cardDate}>{item.status}</Text>
          {/* <FlatList
            contentContainerStyle={styles.studentListContainer}
            data={item.students}
            keyExtractor={(student) => student.id}
            renderItem={({ item: student }) => (
              <Image
                source={{ uri: student.avatar }}
                style={styles.studentAvatar}
              />
            )}
            horizontal
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoạt động canh tác</Text>
      {isSuccessAllProcess && (
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 16 }}
          data={allProcess}
          renderItem={renderClassItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <Modal animationType="slide" visible={showModal}>
        <View style={{ padding: 20, paddingTop: 70 }}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
            onPress={() => setShowModal(!showModal)}
          >
            <Ionicons name="arrow-back" size={30} color="black" />
            <Text
              style={{
                fontSize: 23,
                fontWeight: "600",
              }}
            >
              Thông tin hoạt động
            </Text>
          </TouchableOpacity>
        </View>
        {detailProcess.length > 0 ? (
          <ScrollView>
            {console.log("detail process", detailProcess)}
            <View
              style={{
                padding: 10,
                justifyContent: "center",
                borderRadius: 10,
                backgroundColor: COLORS.green,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 30,
                marginBottom: 30,
              }}
            ></View>
            {detailProcess.map((info, index) => (
              <View key={index}>
                <View style={styles.detailInfo}>
                  <Text style={styles.subject}>
                    {info?.cultivationActivity?.name}
                  </Text>
                  <View style={styles.body}>
                    <Text style={styles.bodyText}>
                      {info?.cultivationActivity?.description}
                    </Text>
                  </View>
                </View>
                <View style={{ marginBottom: 30 }}></View>
              </View>
            ))}
          </ScrollView>
        ) : (
          <View>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: 30,
                fontWeight: "600",
                textAlign: "center",
                marginTop: 40,
              }}
            >
              Hoạt động chưa cập nhật
            </Text>
          </View>
        )}
      </Modal>
    </View>
  );
};

export default CultivationProcess;
