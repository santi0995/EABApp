import React, { useState } from "react";

import AuthNavigator from "./auth";
import  MyStack  from "./stack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

const AppNavigator = () => {
  const userId = useSelector((state) => state.auth.userId);
  const logOut = () =>{ 
    userId = 0
  }
  return <NavigationContainer>{userId ? <MyStack logOut={logOut} /> : <AuthNavigator />}</NavigationContainer>;
};

export default AppNavigator;
