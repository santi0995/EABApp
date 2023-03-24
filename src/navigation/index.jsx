import AuthNavigator from "./auth";
import  MyStack  from "./stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";

const AppNavigator = () => {
  const userId = useSelector((state) => state.auth.userId);
  return <NavigationContainer>{userId ? <MyStack /> : <AuthNavigator />}</NavigationContainer>;
};

export default AppNavigator;
