/* eslint-disable no-undef */
import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import colors from "../../utils/colors";
import { styles } from "./styles";

const mesActual = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(new Date());

const Portes = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.contentContainer, backgroundColor: colors.primary }}
          onPress={() => navigation.navigate("Clientes")}>
          <View>
            <Text style={styles.title}>{mesActual}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Portes;
