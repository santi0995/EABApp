import {
  CreateTraspasoIndirecto,
  Directos,
  Indirectos,
} from "../screens";

import CreateTraspasoDirecto from "../screens/createTraspasoDirecto";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Options } from "../components";
import PlacesNavigator from './places';
import React from "react";
import ScreenPortes from './portes';
import { TouchableOpacity } from "react-native";
import Traspasos from "../screens/traspasos/index";
import colors from "../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackNavigator = createNativeStackNavigator();

const logOut = ({ navigation }) => (
  <TouchableOpacity onPress={() => {}}>
    <MaterialCommunityIcons name="exit-run" size={24} color={colors.primary} />
  </TouchableOpacity>
);

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
        options={(nav) => ({
          title: "Embargos a lo Bestia",
          headerLeft: () => logOut(nav),
        })}
      />
      <HomeStackNavigator.Screen
        name="Catálogo"
        component={PlacesNavigator}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Portes"
        component={ScreenPortes}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Traspasos"
        component={Traspasos}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Products"
        component={Directos}
        options={({ navigation }) => ({
          title: "Directos",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Agregar Directo")}>
              <MaterialCommunityIcons name="plus" size={24} color={colors.primary} />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStackNavigator.Screen
        name="Indirectos"
        component={Indirectos}
        options={({ navigation }) => ({
          title: "Indirectos",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Agregar Indirecto")}>
              <MaterialCommunityIcons name="plus" size={24} color={colors.primary} />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStackNavigator.Screen
        name="Agregar Directo"
        component={CreateTraspasoDirecto}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Agregar Indirecto"
        component={CreateTraspasoIndirecto}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}

export default MyStack;
