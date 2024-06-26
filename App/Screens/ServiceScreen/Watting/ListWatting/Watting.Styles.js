import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 16,
  },
  card: {
    flex: 1,
    backgroundColor: "#FAFAD2",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    padding: 16,
  },
  header: {
    marginBottom: 8,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#ffffff",
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  userRole: {
    fontSize: 12,
    color: "#ffffff",
  },
  classItem: {
    flex: 1,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  separatorContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  classContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },

  cardTitle: {
    fontSize: 22,
    color: "#00008B",
    marginBottom: 8,
    fontWeight: "bold"
  },
  cardDate: {
    fontSize: 12,
    color: "#00008B",
    marginBottom: 8,
  },
  studentListContainer: {
    marginRight: 10,
  },
  studentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -3,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
export default styles;
