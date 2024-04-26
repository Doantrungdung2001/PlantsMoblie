import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants";
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
  // modal
  modalContainer: {
    padding: 20,
    paddingTop: 70,
  },
  modalBtn: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 23,
    fontWeight: "600",
  },
  modalSpace: {
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: COLORS.green,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    marginBottom: 30,
  },
  textDefault: {
    color: COLORS.gray,
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 40,
  },
});
export default styles;
