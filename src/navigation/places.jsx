import {
  Categories,
  MapsScreen,
  NewPlaceScreen,
  PlaceDetailScreen,
  PlaceListScreen,
} from "../screens/index";
import { Platform, TouchableOpacity } from "react-native";

import { Categorias } from "../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import colors from "../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Places"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.black,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen name="Categorias" component={Categorias} />
      <Stack.Screen
        name="Products"
        component={Categories}
        options={({ navigation }) => ({
          title: "Directos",
          headerBackTitleVisible: false,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Agregar Directo")}>
              <MaterialCommunityIcons name="plus" size={24} color={colors.primary} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Armarios"
        component={Categories}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewPlace")}>
              <MaterialCommunityIcons name="plus" size={24} color={colors.primary} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={{ title: "Detalles de la dirección" }}
      />
      <Stack.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{ title: "Nuevo artículo", headerBackTitleVisible: false }}
      />
      <Stack.Screen name="Maps" component={MapsScreen} options={{ title: "Mapa" }} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
