import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 110,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 18,
    color: colors.white,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: colors.white,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.white,
  },
  weight: {
    fontSize: 14,
    color: colors.white,
  },
});
