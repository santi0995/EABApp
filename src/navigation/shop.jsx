import { Categories, Products } from "../screens/index";
import { Text, TouchableOpacity } from "react-native";

import colors from "../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.black,
        navigationBarColor: colors.primary,
        headerTitleStyle: {
          fontSize: 20,
          color: colors.secondary,
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="Cátalogo"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Text>Añadir</Text>
              </TouchableOpacity>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
