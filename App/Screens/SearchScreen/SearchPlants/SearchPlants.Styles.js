import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants";
const styles = StyleSheet.create({
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 10,
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
  filterUnDisplay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Add this line to distribute space evenly between children
    paddingHorizontal: 10, // Add padding horizontally to create space around children
  },
  filterTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.black,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  // all plants
  result: {
    flexDirection: "row",
    alignItems: "center", // Optional: align items vertically in the center
    justifyContent: "space-between", // Optional: adjust spacing between elements
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    marginLeft: 8,
    marginRight: 8,
  },
  textResult: {
    marginRight: 10, // Optional: add spacing between text and icon
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  textContainer: {
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phoneText: {
    fontSize: 16,
    color: "#999",
  },
});
export default styles;
