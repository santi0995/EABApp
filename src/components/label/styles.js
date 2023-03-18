import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    marginVertical: 5,
    color: colors.text,
  },
  subLabel: {
    fontSize: 12,
    color: colors.gray,
    marginVertical: 5,
  },
});
