import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 10,
  },
  date: {
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
    backgroundColor: "red",
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
export default styles;
