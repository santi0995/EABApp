import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  img: {
    width: "50%",
    height: "50%",
  },
  content: {
    width: "80%",
    maxWidth: 400,
    minHeight: 330,
    padding: 15,
    margin: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    marginVertical: 10,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  prompt: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  promptButton: {
    width: "100%",
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  promptMessage: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.white,
  },
});
