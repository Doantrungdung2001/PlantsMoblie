import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";

import styles from "./CultivationProcess.Styles";
import useListProcess from "./useCultivationProcess";
import {
  formatDate,
  formatTime,
  formatDateTime,
  renderTypeProcess,
  renderTypeFertilization,
} from "../../../../Utils/helper";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../Constants";
const renderDisplayTypeProcss = ({ type, info }) => {
  return (
    <View>
      {type === "cultivation" ? (
        <View style={styles.detailInfo}>
          <View style={styles.modalType}>
            <Text
              style={{
                fontFamily: "RobotoCondensed-Bold",
                fontSize: "25",
                color: COLORS.white,
              }}
            >
              {renderTypeProcess(info.type)}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Thời gian thực hiện: </Text>
            <Text>{formatDateTime(info.time)}</Text>
          </View>
          <Text style={styles.subject}>{info?.cultivationActivity?.name}</Text>
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              {info?.cultivationActivity?.description}
            </Text>
          </View>
        </View>
      ) : type === "planting" ? (
        <View style={styles.detailInfo}>
          <View style={styles.modalType}>
            <Text
              style={{
                fontFamily: "RobotoCondensed-Bold",
                fontSize: "25",
                color: COLORS.white,
              }}
            >
              {renderTypeProcess(info.type)}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Thời gian thực hiện: </Text>
            <Text>{formatDateTime(info.time)}</Text>
          </View>
          <Text style={styles.subject}>{info?.plantingActivity?.density}</Text>
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              {info?.plantingActivity?.description}
            </Text>
          </View>
        </View>
      ) : type === "fertilize" ? (
        <View style={styles.detailInfo}>
          <View style={styles.modalType}>
            <Text
              style={{
                fontFamily: "RobotoCondensed-Bold",
                fontSize: "25",
                color: COLORS.white,
              }}
            >
              {renderTypeProcess(info.type)}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Thời gian thực hiện: </Text>
            <Text>{formatDateTime(info.time)}</Text>
          </View>
          <Text style={styles.subject}>
            {info?.fertilizationActivity?.fertilizationTime}
          </Text>
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              Kiểu :{renderTypeFertilization(info?.fertilizationActivity?.type)}
            </Text>
            <Text style={styles.bodyText}>
              {info?.fertilizationActivity?.description}
            </Text>
          </View>
        </View>
      ) : type === "pesticide" ? (
        <View style={styles.detailInfo}>
          <View style={styles.modalType}>
            <Text
              style={{
                fontFamily: "RobotoCondensed-Bold",
                fontSize: "25",
                color: COLORS.white,
              }}
            >
              {renderTypeProcess(info.type)}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Thời gian thực hiện: </Text>
            <Text>{formatDateTime(info.time)}</Text>
          </View>
          <Text style={styles.subject}>
            {info?.pestAndDiseaseControlActivity?.name}
          </Text>
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              Kiểu :
              {renderTypeFertilization(
                info?.pestAndDiseaseControlActivity?.type
              )}
            </Text>
            <Text style={styles.bodyText}>
              Dấu hiệu nhận biết :
              {info?.pestAndDiseaseControlActivity?.symptoms}
            </Text>
            <Text style={styles.bodyText}>
              Gải pháp :{" "}
              {info?.pestAndDiseaseControlActivity?.solution?.map(
                (data, index) => (
                  <Text>
                    {index + 1}-{data}
                    {"\n"}
                  </Text>
                )
              )}
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.detailInfo}>
          <View style={styles.modalType}>
            <Text
              style={{
                fontFamily: "RobotoCondensed-Bold",
                fontSize: "25",
                color: COLORS.white,
              }}
            >
              {renderTypeProcess(info.type)}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Thời gian thực hiện: </Text>
            <Text>{formatDateTime(info.time)}</Text>
          </View>
          <Text style={styles.subject}>{renderTypeProcess(info.type)}</Text>
          <View style={styles.body}>
            <Text style={styles.bodyText}>{info?.other?.description}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const CultivationProcess = ({ gardenId }) => {
  const { allProcess, isSuccessAllProcess, isLoadingAllProcess } =
    useListProcess({
      gardenId: gardenId,
    });

  const [showModal, setShowModal] = useState(false);
  const [detailProcess, setDetailProcess] = useState([]);
  console.log("chi tiet: ", detailProcess);
  const renderClassItem = ({ item }) => (
    <View style={styles.classItem}>
      {console.log("du lieu item: ", item)}
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
            setDetailProcess(item?.process);
            console.log("Chat vao day");
            setShowModal(!showModal);
          }}
        >
          <Text style={styles.cardTitle}>{item.plant.plant_name}</Text>
          <Text style={styles.cardDate}>{item.status}</Text>
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
          keyExtractor={(index) => index.toString()}
          key={(index) => index.toString()}
        />
      )}
      {isLoadingAllProcess && (
        <ActivityIndicator size="large" color="#00ff00" />
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
        {detailProcess?.length > 0 ? (
          <ScrollView>
            {detailProcess.map((info, index) => (
              <View key={index}>
                {renderDisplayTypeProcss({ type: info.type, info: info })}
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
