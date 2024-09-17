import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer'

// import HomeDetailsNavigation from "./HomeDetailsNavigation";
// import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import TabNavigation from "./TabNavigation";
import CartNavigation from "./CartNavigation";
import FilterScreen from "../Screens/Filter/FilterScreen";
import Wishlist from "../Screens/WishList/Wishlist";
import Profile from "../Screens/Profile/Profile";
import { firebase } from "@react-native-firebase/database";
import { Button, I18nManager, TouchableOpacity, View, ToastAndroid } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }) => {

    const { t, i18n } = useTranslation();

    const LogoutHandler = () => {
        firebase.auth().signOut().then(() => {
            console.log('User signed out!');
        });
    }

    const ChangeLang = () => {
        i18n
            .changeLanguage(i18n.language === 'hindi' ? 'en' : 'hindi')
            .then(() => {
                I18nManager.forceRTL(i18n.language === 'hindi');
                ToastAndroid.show(t('CurrentLang'), ToastAndroid.SHORT);
            });
    }

    return (
        <Drawer.Navigator screenOptions={{
            headerRight: () => (
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate(t('Cart')); }}><Icon name="shopping-cart" size={28} color='black' /></TouchableOpacity>
                    <TouchableOpacity onPress={ChangeLang}><Icon name="language" size={28} color='black' /></TouchableOpacity>
                </View>
            ),
            headerStyle: {
                backgroundColor: '#307ecc',
            },
            headerTintColor: 'white',
        }}>
            <Drawer.Screen name={t("Smartkart")} component={TabNavigation} />
            <Drawer.Screen name={t("Cart")} component={CartNavigation} />
            <Drawer.Screen name={t("Filter Item")} component={FilterScreen} />
            <Drawer.Screen name={t("Wishlist")} component={Wishlist} />
            <Drawer.Screen name={t("Profile")} component={Profile} />
            <Drawer.Screen name={t("Logout")} component={LogoutHandler} />

        </Drawer.Navigator>
    );
}

export default DrawerNavigation;

