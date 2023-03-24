import { Categories, Products } from "../screens";

import CreateTraspaso from "../screens/createTraspasos";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Options } from "../components";
import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="Inicio"
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
        name="Inicio"
        component={Options}
        options={({ navigation }) => ({
          title: "Embargos a lo Bestia",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons name="exit-run" size={24} color={colors.primary} />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStackNavigator.Screen
        name="Traspasos"
        component={Categories}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Products"
        component={Products}
        options={({ navigation }) => ({
          title: "Directos",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Agregar")}>
              <MaterialCommunityIcons name="plus" size={24} color={colors.primary} />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStackNavigator.Screen name="Agregar" component={CreateTraspaso} />
    </HomeStackNavigator.Navigator>
  );
}

export default MyStack;
