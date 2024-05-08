import { StyleSheet } from "react-native";
import { COLORS } from "../../../../Constants";
const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontFamily: "Roboto-Medium",
    marginTop: 15,
    fontSize: 20,
  },
  count: {
    fontSize: 18,
    flex: 1,
    color: "#B0C4DE",
  },
  buttonBtn: {
    marginTop: 10,
    backgroundColor: COLORS.green,
    borderRadius: 15,
  },
});
export default styles;
