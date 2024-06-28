import {
  Text,
  View,
  ScrollView,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import styles from "./CultivationProcess.Styles";
import {
  formatTime,
  renderTypeProcess,
  formatDate,
  renderTypeFertilization,
  renderTypePestAndDisease,
} from "../../../../../Utils/helper";
import PageHeading from "../../../../../Components/PageHeading/PageHeading";
import { COLORS } from "../../../../../Constants";
import { Ionicons } from "@expo/vector-icons";
import NotData from "../../../../../Components/NotData/NotData";

const CultivationProcess = () => {
  const param = useRoute().params;
  const [dataProcess, setDataProcess] = useState(param.processInfo);

  const [showModal, setShowModal] = useState(false);
  const [selectDetail, setSelectDeatil] = useState(false);

  // Update dataGarden when route params change
  useEffect(() => {
    if (param?.processInfo) {
      setDataProcess(param.processInfo);
    }
  }, [param.processInfo]);

  const getBackgroundColor = (type) => {
    switch (type) {
      case "cultivation":
        return "#E0FFFF";
      case "planting":
        return "#E6E6FA";
      case "pesticide":
        return "#FAF0E6";
      case "fertilize":
        return "#FAFAD2";
      default:
        return "#ff7f50";
    }
  };

  const renderClassItem = ({ item }) => (
    <View style={styles.classItem}>
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>{formatTime(item.time)}</Text>
          {/* <Text style={styles.endTime}>{item.endTime}</Text> */}
        </View>

        <TouchableOpacity
          onPress={() => {
            setSelectDeatil(item);
            setShowModal(!showModal);
          }}
          style={[
            styles.card,
            { backgroundColor: getBackgroundColor(item.type) },
          ]}
        >
          <Text style={styles.cardTitle}>{renderTypeProcess(item.type)}</Text>
          <Text style={styles.cardDate}>{formatDate(item.time)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderDetailContent = () => {
    if (!selectDetail) return null;

    switch (selectDetail.type) {
      case "cultivation":
        return (
          <View style={styles.detailInfo}>
            {selectDetail.cultivationActivity ? (
              <View>
                <Text style={styles.subject}>
                  {selectDetail.cultivationActivity.name}
                </Text>
                <View style={styles.body}>
                  <Text style={styles.bodyText}>
                    {selectDetail.cultivationActivity.description}
                  </Text>
                </View>
              </View>
            ) : (
              <NotData text={"Hoạt động chưa cập nhật"} />
            )}
          </View>
        );
      case "planting":
        return (
          <View style={styles.detailInfo}>
            {selectDetail.plantingActivity ? (
              <View>
                <Text style={styles.subject}>
                  {selectDetail.plantingActivity.density}
                </Text>
                <View style={styles.body}>
                  <Text style={styles.bodyText}>
                    {selectDetail.plantingActivity.description}
                  </Text>
                </View>
              </View>
            ) : (
              <NotData text={"Hoạt động chưa cập nhật"} />
            )}
          </View>
        );
      case "fertilize":
        return (
          <View style={styles.detailInfo}>
            {selectDetail.fertilizationActivity ? (
              <View>
                <Text style={styles.subject}>
                  {renderTypeFertilization(
                    selectDetail?.fertilizationActivity?.type
                  )}
                </Text>
                <Text style={styles.subject}>
                  {selectDetail?.fertilizationActivity?.fertilizationTime}
                </Text>
                <View style={styles.body}>
                  <Text style={styles.bodyText}>
                    {selectDetail?.fertilizationActivity?.description}
                  </Text>
                </View>
              </View>
            ) : (
              <NotData text={"Hoạt động chưa cập nhật"} />
            )}
          </View>
        );
      case "pesticide":
        return (
          <View style={styles.detailInfo}>
            {selectDetail.pestAndDiseaseControlActivity ? (
              <View>
                <Text style={styles.subject}>
                  {selectDetail?.pestAndDiseaseControlActivity?.name}
                </Text>
                <Text style={styles.subject}>
                  Kiểu bệnh :
                  {renderTypePestAndDisease(
                    selectDetail?.pestAndDiseaseControlActivity?.type
                  )}
                </Text>
                <View style={styles.body}>
                  <Text style={styles.bodyText}>
                    Biểu hiện :{" "}
                    {selectDetail?.pestAndDiseaseControlActivity?.symptoms}
                  </Text>
                </View>
                {selectDetail?.pestAndDiseaseControlActivity?.solution?.length >
                  0 && (
                  <View style={styles.body}>
                    <Text style={styles.bodyText}>Giải pháp : </Text>
                    {selectDetail?.pestAndDiseaseControlActivity?.solution?.map(
                      (item, index) => (
                        <View key={index}>
                          <Text style={styles.bodyText}>
                            {index + 1}
                            {" - "}
                            {item}
                          </Text>
                        </View>
                      )
                    )}
                  </View>
                )}
              </View>
            ) : (
              <NotData text={"Hoạt động chưa cập nhật"} />
            )}
          </View>
        );
      default:
        <View style={styles.detailInfo}>
          {selectDetail.other ? (
            <View>
              <Text style={styles.subject}>Hoạt động khác</Text>
              <View style={styles.body}>
                <Text style={styles.bodyText}>
                  {selectDetail.other.description}
                </Text>
              </View>
            </View>
          ) : (
            <NotData text={"Hoạt động chưa cập nhật"} />
          )}
        </View>;
    }
  };
  return (
    <ScrollView>
      <View>
        <PageHeading title={"Chi tiết quá trình canh tác"} />
        {dataProcess?.length > 0 ? (
          <View>
            <FlatList
              contentContainerStyle={{ paddingHorizontal: 16 }}
              data={dataProcess}
              renderItem={renderClassItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ) : (
          <NotData text={"Hoạt động chưa cập nhật"} />
        )}
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
              {renderTypeProcess(selectDetail.type)}
            </Text>
          </TouchableOpacity>
        </View>
        {selectDetail ? (
          <View>
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
            {renderDetailContent()}
          </View>
        ) : (
          <NotData text={"Hoạt động chưa cập nhật"} />
        )}
      </Modal>
    </ScrollView>
  );
};

export default CultivationProcess;
