import { Clientes, CreateCliente, Portes } from "../screens";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackNavigator = createNativeStackNavigator();

function ScreenPortes() {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="Portes"
      screenOptions={{
        headerTintColor: colors.black,
        navigationBarColor: colors.primary,
        headerTitleStyle: {
          fontSize: 20,
          color: colors.secondary,
        },
        headerShadowVisible: false,
      }}>
      <HomeStackNavigator.Screen
        name="Portes"
        component={Portes}
        options={{
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Clientes"
        component={Clientes}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Crear Cliente")}>
              <MaterialCommunityIcons name="plus" size={24} color={colors.primary} />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStackNavigator.Screen
        name="Crear Cliente"
        component={CreateCliente}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}

export default ScreenPortes;
