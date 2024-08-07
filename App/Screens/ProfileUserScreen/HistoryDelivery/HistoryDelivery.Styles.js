import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants";
const styles = StyleSheet.create({
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

  // content
  cardContainer: {
    flex: 1,
    backgroundColor: "##E0FFFF",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
    padding: 16,
  },
  cardCanceled: {
    flex: 1,
    backgroundColor: "#ff7f50",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
    padding: 16,
  },
  cardDone: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerSubtitle: {
    marginTop: 5,
    fontSize: 12,
    color: "#ffffff",
  },
  headerStatus: {
    fontSize: 17,
    color: "#ffffff",
    fontFamily: "RobotoCondensed-Bold",
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
  buttonsContainer: {
    flex: 2,
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "space-around",
  },
  button: {
    width: "48%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  // model
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 10,
  },
  date: {
    fontSize: 13,
    color: "#888",
    marginBottom: 20,
  },
  deliveryid: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
  },
  info: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  divider: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  itemText: {
    fontSize: 18,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  totalText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },

  //panigation
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  paginationButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: "#fff",
  },
  paginationButtonActive: {
    backgroundColor: COLORS.primary,
  },
  paginationText: {
    fontSize: 16,
    color: COLORS.black,
  },
});
export default styles;
