import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import SepatuAdidas from "./screen/shop/SepatuAdidas";

const Stack = createNativeStackNavigator();

const data = [
  { id: 1, name: 'Home', component: HomeScreen, title: "Toko Online" },
  { id: 2, name: 'SepatuAdidas', component: SepatuAdidas, title: "Sepatu Adidas" },
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {data.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{ title: item.title }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
