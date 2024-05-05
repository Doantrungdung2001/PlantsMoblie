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
  container: {
    height: "90%",
    marginTop: 40,
    backgroundColor: "#f6f6f6",
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#f6f6f6",
  },
  listContainer: {
    alignItems: "center",
  },
  /******** card **************/
  card: {
    shadowColor: "#474747",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: "#e2e2e2",
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 100,
    width: 100,
    alignSelf: "center",
    borderRadius: 50,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    alignSelf: "center",
    color: "#696969",
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
});
export default styles;
