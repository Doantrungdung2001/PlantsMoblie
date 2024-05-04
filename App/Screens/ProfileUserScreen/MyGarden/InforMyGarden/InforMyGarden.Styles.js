import { StyleSheet } from "react-native";
import { COLORS } from "../../../../Constants";
const styles = StyleSheet.create({
  nameInformation: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    paddingLeft: 10,
  },
  detailInformation: {
    fontFamily: "regular",
    fontSize: 16,
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
  container: {
    marginTop: 5,
    padding: 10,
  },
  postInfo: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  meta: {
    flexDirection: "row",
    marginBottom: 20,
  },
  author: {
    fontSize: 14,
    color: "#999",
    marginRight: 10,
  },
  date: {
    fontSize: 14,
    color: "#999",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    marginTop: 20,
  },
});
export default styles;
