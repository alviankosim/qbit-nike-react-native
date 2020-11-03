/**
 * Nike App Store Example Application
 * @author @alviankosim
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from './src/screens/HomeScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import { COLOR_BLACK_MAIN, STYLE_TABBAR } from './src/constants/style';
import { renderIcon } from './src/helpers/Tabbar';

//mandatory, or crash in production
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: COLOR_BLACK_MAIN,
        showLabel: false,
        style: STYLE_TABBAR,
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color, focused }) => renderIcon(color, focused, 'home')
        }} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
          tabBarIcon: ({ color, focused }) => renderIcon(color, focused, 'favorite')
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({ color, focused }) => renderIcon(color, focused, 'profile')
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}