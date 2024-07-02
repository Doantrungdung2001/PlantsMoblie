import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../Constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    backgroundColor: "#eee",
    padding: 8,
    marginTop: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
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
  btnSubmit: {
    padding: 20,
    backgroundColor: COLORS.primary,
    marginVertical: 30,
    borderRadius: 10,
    shadowColor: COLORS.green,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textBtnSubmit: {
    fontFamily: "RobotoCondensed-Bold",
    color: COLORS.white,
    textAlign: "center",
    fontSize: 25,
  },
});

export default styles;
