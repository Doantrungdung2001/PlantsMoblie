import { StyleSheet } from "react-native";
import { COLORS } from "../../../../Constants";
const styles = StyleSheet.create({
  header: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleHeader: {
    fontSize: 17,
    fontWeight: "600",
    color: COLORS.black,
    textAlign: "center",
  },
  line: {
    width: 70,
    height: 5,
    backgroundColor: COLORS.green,
    alignSelf: "center",
    marginTop: 3,
    borderRadius: 10,
  },
  //list plants
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
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
  bookingBtn: {
    width: "70%",
    padding: 13,
    backgroundColor: COLORS.green,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 99,
  },
  textBtn: {
    textAlign: "center",
    fontFamily: "RobotoCondensed-Bold",
    color: COLORS.white,
    fontSize: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 99,
    borderBlockColor: COLORS.white,
    paddingLeft: 25,
    elevation: 4, // Add elevation for shadow
  },

  /**************** Modal *****************/
  containerModal: {
    padding: 20,
    paddingTop: 70,
  },
  cancelBtn: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  cardContainerModal: {
    marginTop: 30,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: COLORS.green,
    alignItems: "center",
  },
  subContainerModal: {
    display: "flex",
    gap: 8,
  },
  imageModal: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  cardTitle: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: 25,
  },
  deleteBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 90,
  },
  /**************** Modal Btn *****************/
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
    height: 200,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
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
  login: {
    backgroundColor: COLORS.green,
    shadowColor: COLORS.green,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
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
});
export default styles;
