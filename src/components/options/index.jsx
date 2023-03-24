import { Image, Text, TouchableOpacity, View } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

const Options = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.contentContainer, backgroundColor: colors.primary }}
          onPress={() => navigation.navigate("")}>
          <View>
            <Text style={styles.title}>Cátalogo</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.contentContainer, backgroundColor: colors.secondary }}
          onPress={() => navigation.navigate("")}>
          <Text style={styles.title}>Portes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.contentContainer, backgroundColor: colors.gray }}
          onPress={() => navigation.navigate("Traspasos")}>
          <Text style={styles.title}>Traspasos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.contentContainer, backgroundColor: colors.secondary }}
          onPress={() => navigation.navigate("")}>
          <Text style={styles.title}>Tiendas</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Options;
