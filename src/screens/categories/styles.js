import { StatusBar, StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: StatusBar.currentHeight,
  },
  containerList: {
    flex: 1,
    paddingBottom: 60,
  },
  contentContainerList: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});
