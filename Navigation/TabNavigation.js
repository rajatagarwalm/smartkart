import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeDetailsNavigation from "./HomeDetailsNavigation";
import SearchNavigation from "./SeacrhNavigation";
import Profile from "../Screens/Profile/Profile";
import Icon from "react-native-vector-icons/Ionicons";
import Wishlist from "../Screens/WishList/Wishlist";
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const { t, i18n } = useTranslation();

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === t('Home')) {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === t('Wishlist')) {
          iconName = focused ? 'heart-circle-outline' : 'heart-outline';
        } else if (route.name === t('Profile')) {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === t('Search')) {
          iconName = focused ? 'search-circle-sharp' : 'search-circle-outline';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={30} color={color} />;
      },
      tabBarActiveBackgroundColor: 'lightgray',
      tabBarActiveTintColor: '#307ecc',
      tabBarInactiveTintColor: 'black',
      headerStyle: {
        backgroundColor: '#4a148c',
      },
      headerTintColor: 'white',
      tabBarLabelStyle: {
        fontSize: 13,
        fontWeight: 'bold',
      },
      tabBarHideOnKeyboard: 'true',
    })}>
      <Tab.Screen
        name={t("Home")}
        component={HomeDetailsNavigation}
        options={{
          headerShown: false,

        }}
      />
      <Tab.Screen
        name={t("Search")}
        component={SearchNavigation}
        options={{
          headerShown: false,

        }}
      />
      <Tab.Screen
        name={t("Wishlist")}
        component={Wishlist}
        options={{
          headerShown: false
        }} />
      <Tab.Screen
        name={t("Profile")}
        component={Profile}
        options={{
          headerShown: false,
        }} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
