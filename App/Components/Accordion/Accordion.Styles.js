import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants";
const styles = StyleSheet.create({
  details: {
    opacity: 0.65,
  },
  title: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: 26,
    color: COLORS.green,
  },
  content: {
    marginTop: 8,
  },
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: COLORS.white,
    borderRadius: 6,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
