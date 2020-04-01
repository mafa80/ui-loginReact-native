import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/loginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import TestScreen from "./src/screens/Test";
import "react-native-gesture-handler";
import firebase from "firebase";
import Firebase from "./src/auth/firebaseConf";

console.log(Firebase.name);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Test"
          component={TestScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
