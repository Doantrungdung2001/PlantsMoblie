import { StyleSheet } from "react-native";
import { COLORS } from "../../../../Constants";
const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 10,
    marginLeft: 4,
  },
  filterBtn: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 8,
  },
});

export default styles;
