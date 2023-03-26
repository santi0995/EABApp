import { Image, Text, TouchableOpacity, View } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

const Categorias = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.contentContainer, backgroundColor: colors.primary }}
          onPress={() => navigation.navigate("Armarios")}>
          <View>
            <Text style={styles.title}>Armarios</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.contentContainer, backgroundColor: colors.secondary }}
          onPress={() => navigation.navigate("")}>
          <Text style={styles.title}>Mesas de noche</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.contentContainer, backgroundColor: colors.gray }}
          onPress={() => navigation.navigate("")}>
          <Text style={styles.title}>Canapés</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.contentContainer, backgroundColor: colors.secondary }}
          onPress={() => navigation.navigate("")}>
          <Text style={styles.title}>Televisores</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Categorias;
