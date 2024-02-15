import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import SepatuAdidas from "./screen/shop/SepatuAdidas";
import BajuBatik from './screen/shop/BajuBatik';
import Macbook from './screen/shop/Macbook';
import GooglePixel from './screen/shop/GooglePixel';

const Stack = createNativeStackNavigator();

const data = [
  // ini untuk menagement screen, atau kalau di react /pages | module : react-navigation
  { id: 1, name: 'Home', component: HomeScreen, title: "Toko Online" },
  { id: 2, name: 'SepatuAdidas', component: SepatuAdidas, title: "Sepatu Adidas" },
  { id: 3, name: 'BajuBatik', component: BajuBatik, title: "Baju Batik" },
  { id: 4, name: 'MacbookAirM1', component: Macbook, title: "Macbook Air M1" },
  { id: 5, name: 'GooglePixel5', component: GooglePixel, title: "Google Pixel 5" },
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
