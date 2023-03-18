import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: "90%",
    marginBottom: 20,
  },
  message: {
    marginVertical: 5,
  },
  helperText: {
    fontSize: 12,
    color: colors.error,
  },
});
