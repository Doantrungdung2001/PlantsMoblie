import { StyleSheet } from "react-native";
import { COLORS } from "../../../../Constants";
const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  // list service

  pricingOption: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  pricingOptionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pricingOptionPrice: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  pricingOptionDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  pricingOptionFeatures: {
    marginBottom: 10,
  },
  pricingOptionFeature: {
    fontSize: 14,
    color: "#999",
  },
  pricingOptionButtonContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  pricingOptionButton: {
    fontSize: 17,
    color: "#fff",
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default styles;
