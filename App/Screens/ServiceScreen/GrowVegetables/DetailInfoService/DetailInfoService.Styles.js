import { StyleSheet } from "react-native";
import { COLORS } from "../../../../Constants";
const styles = StyleSheet.create({
  avatar: {
    width: "100%",
    height: 300,
  },
  name: {
    fontFamily: "RobotoCondensed-Bold",
    textAlign: "center",
    fontSize: 35,
    padding: 20,
    display: "flex",
    gap: 7,
  },
  nameInformation: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    paddingLeft: 10,
  },
  detailInformation: {
    fontFamily: "regular",
    fontSize: 16,
  },
  backBtnContainer: {
    marginTop: 25,
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  serviceInformation: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  information: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 13,
  },
  bookingBtn: {
    padding: 15,
    backgroundColor: COLORS.green,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 99,
  },
  textBtn: {
    textAlign: "center",
    fontFamily: "RobotoCondensed-Bold",
    color: COLORS.white,
    fontSize: 18,
  },
});
export default styles;
