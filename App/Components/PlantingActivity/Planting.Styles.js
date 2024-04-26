import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants";
const styles = StyleSheet.create({
  detailInfo: {
    margin: 10,
    padding: 19,
    borderWidth: 3,
    borderColor: COLORS.green,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  subject: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  body: {
    marginTop: 5,
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
  },
  bodyText: {
    fontSize: 17,
    lineHeight: 24,
    color: "black",
    fontFamily: "Roboto-Medium",
  },
});
export default styles;
