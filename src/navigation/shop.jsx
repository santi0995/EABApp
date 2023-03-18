import { Text, TouchableOpacity } from "react-native";

import { Categories } from "../screens/index";
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
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Products"
        component={Categories}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Text>Click here</Text>
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={Categories}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
