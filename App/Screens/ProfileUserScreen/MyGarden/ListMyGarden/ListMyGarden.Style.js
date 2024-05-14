import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    color: "#fff",
    marginHorizontal: 20,
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 3,
  },
  itemPrice: {
    marginTop: 3,
    fontSize: 14,
    color: "black",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  registerButton: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  ///
  statusContainer : {
    marginLeft: 10,
    flexDirection: "row"
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
});
export default styles;
