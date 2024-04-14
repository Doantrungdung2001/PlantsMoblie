import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../Constants";
const pestAndDiseaseControlActivities = [
  {
    name: "Sâu tơ (Plutella xylostella)",
    type: "pest",
    symptoms:
      "Sâu non mới nở gặm biểu bì tạo thành những đường rãnh nhỏ ngoằn ngoèo. Sâu lớn ăn toàn bộ biểu bì lá làm cho lá bị thủng lỗ chỗ gây giảm năng suất và chất lượng rau.",
    description:
      "Là sâu gây hại nguy hiểm nhất, chúng phát sinh và gây hại liên tục quanh năm, Bướm đẻ trứng rải rác hoặc từng cụm hay theo dây dọc ở mặt dưới lá. Sâu non mới nở gặm biểu bì tạo thành những đường rãnh nhỏ ngoằn ngoèo. Sâu lớn ăn toàn bộ biểu bì lá làm cho lá bị thủng lỗ chỗ gây giảm năng suất và chất lượng rau.",
    solution: [
      "Vệ sinh đồng ruộng, thu dọn sạch tàn dư cây trồng từ vụ trước, phá bỏ các ký chủ phụ xung quanh ruộng, cày lật đất sớm để diệt trứng, nhộng, sâu non và hạn chế mầm bệnh. ",
      "Luân canh với cây trồng khác họ, Trồng xen một số cây tiết ra mùi khó chịu để ngăn ngừa bướm sâu tơ như cà chua, hành, tỏi. ",
      "Bảo vệ các loài thiên địch như nuôi thả một số đối tượng như ong ký sinh (Diadegma semiclausum), Ong Cotesia Plutella, nấm ký sinh",
      "Thường xuyên kiểm tra đồng ruộng và chỉ phun thuốc khi mật độ sâu non trung bình 2 con/cây ở giai đoạn 2-3 tuần sau trồng, 3 con trở lên ở giai đoạn 4-7 tuần sau trồng. Không phun thuốc đặc hiệu trị sâu tơ khi sâu chưa xuất hiện ở các ngưỡng trên.",
      "Luân phiên sử dụng một số loại thuốc có hoạt chất sau để phòng trừ: Azadirachtin + Spinosad Diafenthiuron, Abamectin; Abamectin + Emamectin benzoate, Cypermethrin:; Emamectin Benzoate; Indoxacarb; Lufenuron; Matrine; Spinosad; Citrus oil.",
    ],
    _id: "65d432e76b7f940313fb306f",
  },
  {
    name: "Rệp (Brevicolyne brassicae)",
    type: "pest",
    symptoms:
      "Cả rệp non và trưởng thành đều chích hút nhựa cây, làm búp và lá bị xoăn lại, lá nhạt màu hoặc vàng, héo rũ.",
    description:
      "Cả rệp non và trưởng thành đều chích hút nhựa cây, làm búp và lá bị xoăn lại, lá nhạt màu hoặc vàng, héo rũ. Ngoài gây hại trực tiếp cho cây trồng, rệp còn là môi giới truyền bệnh virus. Thời tiết nóng khô thuận lợi cho rệp phát triển.",
    solution: [
      "Tưới nước, giữ ẩm cho cây trồng trong điều kiện thời tiết mùa khô. ",
      "Sử dụng một số loại thuốc sau: Abamectin; Abamectin + Alpha-cypermethrin; Abamectin + Chlorfluazuron; Deltamethrin; Emamectin benzoate; Emamectin benzoate + Petroleum oil; Etofenprox; Fipronil; Matrine; Rotenone; Rotenone 2.5% + Saponin 2.5%; Spinosad ; Thiamethoxam.",
    ],
    _id: "65d432e76b7f940313fb3070",
  },
  {
    name: "Sâu xanh bướm trắng: (Pieris rapae)",
    type: "pest",
    symptoms:
      "Trưởng thành đẻ trứng rải rác thành từng quả trên lá. Sâu non mới nở gặm ăn chất xanh và để lại màng lá trắng mỏng, sống thành từng cụm. Sâu tuổi lớn phân tán, ăn khuyết lá để lại gân làm cây xơ xác.",
    solution: [
      "Dùng vợt bắt bướm, ngắt nhộng trên lá, thu dọn và huỷ bỏ tàn dư cây trồng.",
      "luân phiên sử dụng một số hoạt chất sau: Abamectin;Emamectin benzoate; Matrine; Azadirachtin; Abamectin + Chlorfluazuron;  Abamectin + Alpha-cypermethrin, Abamectin + Bacillus thuringiensis.",
    ],
    note: "Sâu xanh bướm trắng phát sinh mạnh trong những tháng ít mưa.",
    _id: "65d432e76b7f940313fb3071",
  },
  {
    name: "Bọ nhảy (Phyllotrera spp.)",
    type: "pest",
    symptoms:
      "Sâu non có 3 tuổi, sống trong đất, ăn rễ cây, làm cho cây bị còi cọc, héo hoặc bị chết. Hoá nhộng ngay trong đất.",
    description:
      "Trưởng thành hoạt động vào lúc sáng sớm hoặc trời mát. Trời mưa ít hoạt động. Trưởng thành ăn lá và giao phối trên cây. Đẻ trứng chủ yếu trong đất, đẻ nhiều vào sau buổi trưa. Sâu non có 3 tuổi, sống trong đất, ăn rễ cây, làm cho cây bị còi cọc, héo hoặc bị chết. Hoá nhộng ngay trong đất.",
    solution: [
      "Vệ sinh đồng ruộng, xử lý đất trước khi trồng.",
      "Luân canh cây trồng khác họ, sử dụng một số hoạt chất sau: Abamectin; Emamectin benzoate; Dinotefuran; Azadirachtin; Chlorantraniliprole; Chlorantraniliprole 20% + Thiamethoxam ; Abamectin + Alpha-cypermethrin.",
    ],
    _id: "65d4347a6b7f940313fb30d5",
  },
  {
    name: "Sâu xám (Agrotis ypsilon)",
    type: "pest",
    symptoms:
      "Đẻ trứng rời rạc thành từng quả trên mặt đất. Sâu non mới nở gặm lấm tấm biểu bì lá cây, sâu lớn tuổi sống dưới đất, ban đêm bò lên cắn đứt gốc cây. ",
    description:
      "Trưởng thành hoạt động giao phối và đẻ trứng ban đêm, thích mùi chua ngọt. Đẻ trứng rời rạc thành từng quả trên mặt đất. Sâu non mới nở gặm lấm tấm biểu bì lá cây, sâu lớn tuổi sống dưới đất, ban đêm bò lên cắn đứt gốc cây. Sâu đẫy sức hoá nhộng trong đất.",
    solution: [
      "Vệ sinh đồng ruộng, làm sạch cỏ dại trên ruộng và xung quanh bờ, nếu có điều kiện tưới ngập nước để tiêu diệt sâu non và nhộng, cày xới để sâu non, nhộng lộ lên trên làm mồi cho chim gà.",
      "Đối với những thửa ruộng nhỏ, có thể bắt sâu bằng tay. Dùng một số loại thuốc hoá học để phun hoặc rải xuống đất, xung quanh gốc cây như: Abamectin; Metarhizium anisopliae.",
    ],
    _id: "65d4347a6b7f940313fb30d6",
  },
  {
    name: "Sâu khoang (Spodoptera sp.)",
    type: "pest",
    symptoms:
      "Sâu đẻ trứng thành ổ bám mặt dưới lá. Sâu non sau khi nở sống tập trung quanh chỗ ổ trứng, gặm lấm tấm chất xanh của lá. Sâu lớn tuổi phân tán, ăn khuyết lá.",
    description:
      "Trưởng thành hoạt động ban đêm, thích các chất có mùi chua ngọt, đẻ trứng thành ổ bám mặt dưới lá. Sâu non sau khi nở sống tập trung quanh chỗ ổ trứng, gặm lấm tấm chất xanh của lá. Sâu lớn tuổi phân tán, ăn khuyết lá. Sâu non phá hại mạnh vào ban đêm. Hoá nhộng trong đất. Vòng đời trung bình 35-40 ngày.",
    solution: [
      "Vệ sinh đồng ruộng, làm đất kỹ trước khi trồng.",
      "Dùng bả chua ngọt để bắt bướm, ngắt bỏ ổ trứng, diệt sâu non mới nở, dùng các loại hoạt chất sau để phòng trừ: Abamectin; Azadirachtin; Bacillus thuringiensis var. aizawai; Emamectin benzoate; Etofenprox; Fipronil; Trichlorfon.",
    ],
    _id: "65d4347a6b7f940313fb30d7",
  },
  {
    name: "Bệnh lở cổ rễ (Rhizoctonia solani)",
    type: "disease",
    symptoms:
      "Cây bị bệnh yếu, bắp nhỏ, đôi khi héo và chết, trong điều kiện ẩm ướt bệnh lây lan sang các lá bên cạnh và gây thối bắp, toàn bộ bắp có thể bị thối khô, bắt đầu từ những lá bao phía ngoài. Trên chỗ thối có các hạch nhỏ màu nâu.",
    description:
      "Bệnh do nấm Rhizoctonia solani gây ra, phát triển trong điều kiện thời tiết ẩm ướt và nhiệt độ trong đất cao.",
    solution: [
      "Luân canh cây trồng. Sử dụng luân phiên một trong các loại hoạt chất sau: Validamycin, Copper citrate; Cytokinin; Kasugamycin; Trichoderma viride; Chitosan + Polyoxin; Trichoderma spp 106 cfu/ml + K-Humate + Fulvate + Chitosan + Vitamin B1;",
    ],
    _id: "65d436286b7f940313fb314c",
  },
  {
    name: "Bệnh thối gốc (Phoma ligam)",
    type: "disease",
    symptoms:
      "Ban đầu là những vết nứt thối trũng xuất hiện trên gốc thân cây và sau này có thể xuất hiện trên lá, có hình đốm tròn màu nâu nhạt. Những cây bị bệnh thường có kích thước nhỏ hơn. Các vết thối mục lan rộng và bao lấy thân phía trên mặt đất, làm cho cây bị héo và đổ. Thân cây khô và hoá gỗ, mô cây chuyển màu đen, đôi khi có viền đỏ tía.",
    solution: [
      "Vệ sinh vườn, mùa mưa nên làm luống cao, thoát nước tốt, luân canh cây trồng, khi có bệnh xuất hiện cần tiêu hủy sớm cây bệnh. ",
      "Sử dụng một số loại thuốc sau Trichoderma spp; Trichoderma viride...",
    ],
    _id: "65d436286b7f940313fb314d",
  },
  {
    name: "Bệnh cháy lá vi khuẩn (Xanthomonas campestris)",
    type: "disease",
    symptoms:
      "Bệnh gây hại ở cây giống và cây đã lớn, vết bệnh có màu vàng, hình chữ V xuất hiện trên rìa lá với mũi nhọn hướng vào trong, những vết bệnh này lan dần vào giữa lá. Diện tích bị nhiễm bệnh chuyển sang màu nâu, các mô cây bị chết. Gân lá ở những vùng bị nhiễm chuyển màu đen có thể nhìn thấy khi cắt lá. Lá của những cây giống nhiễm bệnh chuyển sang màu vàng và rụng trước khi cây lớn.",
    solution: [
      "Vệ sinh vườn sau thu hoạch, luân canh cây trồng.",
      "Sử dụng các loại hoạt chất sau: Copper Hydroxide.",
    ],
    _id: "65d449f66b7f940313fb322d",
  },
  {
    name: "Bệnh thối nhũn (Erwinia carotovora)",
    type: "disease",
    symptoms:
      "Vết bệnh đầu tiên thường xuất hiện ở các cuống lá già phía dưới gần mặt đất, tạo thành những đốm mọng nước, sau đó thối nhũn. Vết bệnh theo cuống lá phát triển lên phía trên làm cho cả lá bị vàng và thối nhũn. Các lá phía trên cũng có thể bị bệnh và cả cây bị thối. Khi cây bị bệnh, các tế bào trở nên mềm, có nước và nhớt, có mùi lưu huỳnh.",
    solution: [
      "Vệ sinh vườn sau thu hoạch, làm đất kỹ, lên luống cao dễ thoát nước, luân canh cây trồng khác.",
      "Bón phân cân đối, không bón quá nhiều đạm, trong điều kiện mùa mưa cần tăng cường bón kali.",
      "Sử dụng một số loại nông dược sau: Copper hydroxide; Kasugamycin; Ningnanmycin; Oxolinic acid; Carbendazim; Copper Oxychloride 50% + Metalaxyl 8%; Copper Oxychloride + Streptomycin sulfate + Zinc sulfate; Cucuminoid 5% + Gingerol 0.5%.",
    ],
    _id: "65d449f66b7f940313fb322e",
  },
  {
    name: "Bệnh đốm vòng (Alternaria brassicae Sace)",
    type: "disease",
    symptoms:
      "Triệu chứng của bệnh đốm vòng thường xuất hiện trên những lá già, lúc đầu là những chấm nhỏ màu đen, sau lan rộng ra thành hình tròn, màu nâu có hình tròn đồng tâm. Trời ẩm ướt trên vết bệnh có lớp nấm xốp màu đen bồ hóng",
    solution: [
      "Vệ sinh vườn, xử lý hạt giống bằng nước nóng 500C trong khoảng 30 phút trước khi gieo.",
      "Dùng các loại hoạt chất sau để phòng trừ:Chitosan; Prochloraz-Manganese complex; Trichoderma spp 106 cfu/ml  +  K-Humate + Fulvate + Chitosan + Vitamin B1.",
    ],
    _id: "65d449f66b7f940313fb322f",
  },
  {
    name: "Bệnh thối hạch (Sclerotinia sclerotirum)",
    type: "disease",
    symptoms:
      "Bệnh gây hại từ khi cây còn nhỏ cho tới khi thu hoạch, ở cây con, bệnh xuất hiện ở gốc cây sát mặt đất làm cho chỗ bị bệnh thối nhũn, cây gãy gục rồi chết. Khi trời ẩm ướt trên gốc chỗ bị bệnh xuất hiện một lớp nấm màu trắng xốp.",
    description:
      "Khi cây lớn, vết bệnh thường xuất hiện trên các lá già sát gốc hoặc phần gốc thân, chỗ bị bệnh thối nhũn nhưng không có mùi thối. Nếu trời khô nắng thì chỗ bị bệnh thường khô và teo đi, các lá biến vàng. Ở cây cải bắp khi đã cuốn, bệnh lây lan từ lá ngoài vào trong làm toàn bộ bắp bị thối và chết đứng trên ruộng, gặp gió to cây đổ gục. Chỗ vết bệnh đã thối có lớp mốc trắng và nhiều hạch nấm nhỏ màu nâu hoặc đen bám chặt vào lá.",
    solution: [
      "Vệ sinh vườn, trồng cây sạch bệnh, luân canh với cây trồng khác họ như hành, cà rốt.",
      "Bón phân cân đối. Tăng lượng phân chuồng hoai có tác dụng kích thích cây khỏe và hạn chế được sự phát triển của bệnh. ",
      "Sử dụng một số loại hoạt chất sau: Prochloraz-Manganese complex, Trichoderma spp, Trichoderma viride, Trichoderma spp + K-Humate + Fulvate + Chitosan + Vitamin B1.",
    ],
    _id: "65d449f66b7f940313fb3230",
  },
  {
    name: "Bệnh sưng rễ (Plasmodiophora brassicae.W)",
    type: "disease",
    symptoms:
      "Bệnh gây hại trên bộ rễ của cây (rễ chính và rễ bên). Bộ phận rễ bị biến dạng sưng phồng lên, có các kích cỡ khác nhau tùy thuộc thời kỳ và mức độ nhiễm bệnh. Cây biểu hiện các triệu chứng sinh trưởng chậm, cằn cỗi, lá biến màu xanh bạc, có biểu hiện héo vào lúc trưa nắng, sau đó phục hồi vào lúc trời mát, khi bị nặng toàn thân cây héo rũ kề cả khi trời mát, lá chuyển màu xanh bạc, nhợt nhạt, héo vàng và cây bị chết hoàn toàn.",
    description:
      "Bệnh do nấm Plasmodiophora brassicae. W gây ra. Là loài nấm ký sinh bắt buộc. Chúng chỉ  phát triển và sinh sản trong tế bào ký chủ còn sống mới hoàn tất vòng đời. Nấm có thể tồn tại trong đất 7-10 năm ở dạng bào tử tĩnh, cũng có thể lâu hơn. Bệnh phát triển thích hợp trong đất chua và khoảng nhiệt độ từ 18-250C. Tuy nhiên, bệnh chỉ tấn công gây hại cây khi mật độ bào tử trong đất đạt >104 bào tử/1g đất.",
    solution: [
      "Vệ sinh vườn, trồng cây sạch bệnh, luân canh với cây trồng khác họ như hành, cà rốt.",
    ],
    _id: "65d449f66b7f940313fb3231",
  },
];
const PestAndDiseaseControlActivities = () => {
  const [selectActivity, setSelectActivity] = useState();
  const [showModal, setShowModal] = useState(false);
  console.log(selectActivity);
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={pestAndDiseaseControlActivities}
          style={styles.productList}
          renderItem={(activity, index) => {
            return (
              <TouchableOpacity
                style={styles.productCard}
                onPress={() => {
                  setSelectActivity(activity);
                  setShowModal(!showModal);
                }}
              >
                <View style={styles.productInfo}>
                  <View style={{ alignSelf: "flex-start" }}>
                    <Text style={styles.productName}>{activity.item.name}</Text>
                  </View>
                  <View style={{ alignSelf: "flex-end" }}>
                    <AntDesign name="infocirlce" size={24} color="black" />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
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
        {selectActivity ? (
          <ScrollView>
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
            <View style={styles.detailInfo}>
              <Text style={styles.subject}>{selectActivity.item.name}</Text>
              <View style={styles.body}>
                <Text style={styles.bodyText}>
                  {selectActivity.item.description}
                </Text>
              </View>
            </View>
            <View style={styles.detailInfo}>
              <Text style={styles.subject}>Dấu hiệu nhận biết</Text>
              <View style={styles.body}>
                <Text style={styles.bodyText}>
                  {selectActivity.item.symptoms}
                </Text>
              </View>
            </View>
            <View style={styles.detailInfo}>
              <Text style={styles.subject}>Giải pháp</Text>
              <View style={styles.body}>
                {selectActivity.item.solution.map((infor,index) => (
                  <Text style={styles.bodyText}>{index+1} -- {infor}</Text>
                ))}
              </View>
            </View>
            <View style={{marginBottom: 30}}></View>
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

export default PestAndDiseaseControlActivities;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: 20,
  },
  productList: {
    flex: 1,
    paddingTop: 16,
  },
  productCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  productInfo: {
    flex: 1,
    marginRight: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  detailInfo: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: COLORS.green,
    borderRadius: 10,
  },
  subject: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "#222",
  },
  body: {
    marginTop: 5,
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
  },
  bodyText: {
    fontSize: 19,
    lineHeight: 24,
    color: "black",
  },
});
