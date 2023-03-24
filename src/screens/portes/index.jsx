import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import colors from "../../utils/colors";
import { styles } from "./styles";

const Portes = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.contentContainer, backgroundColor: colors.primary }}
          onPress={() => navigation.navigate("Products")}>
          <View>
            <Text style={styles.title}>Enero</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.contentContainer, backgroundColor: colors.secondary }}
          onPress={() => navigation.navigate("Indirectos")}>
          <View>
            <Text style={styles.title}>Febrero</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Portes;
