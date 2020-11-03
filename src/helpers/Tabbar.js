import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * Function helper untuk merender icon pada tabbar
 */
export const renderIcon = (color, focused, type) => {
    let icon = {};
    switch (type) {
      case "home":
        icon = {
          normal: "home",
          outline: "home-outline"
        }
        break;

      case "favorite":
        icon = {
          normal: "heart",
          outline: "heart-outline"
        }
        break;

      case "profile":
        icon = {
          normal: "account",
          outline: "account-outline"
        }
        break;

      default:
        break;
    }
    return <MaterialCommunityIcons name={focused ? icon.normal : icon.outline} color={color} size={35} />
  }