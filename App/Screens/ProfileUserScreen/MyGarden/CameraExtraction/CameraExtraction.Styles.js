import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //header
  card: {
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

  container: {
    backgroundColor: "#fff",
    flex: 1,
    margin: 5,
  },
  video: {
    flexDirection: "row",
    marginBottom: 20,
  },
  thumbnail: {
    width: "35%",
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  details: {
    padding: 10,
    width: "65%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  channel: {
    color: "#999",
    fontSize: 14,
    marginTop: 5,
  },
  viewCount: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  views: {
    color: "#999",
    fontSize: 14,
  },
  duration: {
    color: "#999",
    fontSize: 14,
    marginLeft: 10,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  playvideo: {
    width: 260,
    height: 150,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
