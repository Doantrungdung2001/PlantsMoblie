import { StyleSheet } from "react-native";
import { COLORS } from "../../../../Constants";
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  ///
  statusContainer: {
    marginLeft: 10,
    flexDirection: "row",
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 5,
  },
  startedDot: {
    backgroundColor: "deepskyblue",
  },
  cancelDot: {
    backgroundColor: "red",
  },
  completedDot: {
    backgroundColor: "green",
  },
  defaultDot: {
    backgroundColor: "grey",
  },
  msgTxt: {
    fontSize: 15,
  },
  startedText: {
    color: "deepskyblue",
  },
  cancelText: {
    color: "red",
  },
  completedText: {
    color: "green",
  },
  defaultText: {
    color: "grey",
  },
  //
  listContainer: {
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchInput: {
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
    marginBottom: 10,
    paddingHorizontal: 10,
    padding: 10,
    color: "black",
    fontSize: 17,
  },
  card: {
    flex: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  cardDates: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  cardDate: {
    color: "#888",
  },
  cardContent: {
    justifyContent: "space-between",
    paddingTop: 10,
  },
  attendeesContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  attendeeImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: -10,
    borderWidth: 0.5,
    marginTop: 3,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  actionButton: {
    marginTop: 15,
    backgroundColor: "#DCDCDC",
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#00008B",
    marginRight: 10,
  },
  buttonText: {
    color: "#00008B",
  },
});
export default styles;
