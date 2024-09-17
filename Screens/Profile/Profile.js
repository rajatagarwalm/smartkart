import React from "react";
import { Text, View, ImageBackground, Image, TouchableOpacity, I18nManager} from 'react-native';
import { firebase } from '../../Firebase/FirebaseConfig';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

import styles from './ProfileStyle';
import { useSelector } from 'react-redux';

const Profile = () => {

    const navigation = useNavigation();
    const userName = useSelector((state) => state.UserReducer.Name);
    const userEmail = useSelector((state) => state.UserReducer.Email);
    const userAge = useSelector((state) => state.UserReducer.Age);
    const userContact = useSelector((state) => state.UserReducer.Contact);
    const userAddress = useSelector((state) => state.UserReducer.Address);
    const { t, i18n } = useTranslation();

    const logoutInputHandler = () => {
        firebase.auth().signOut().then(() => {
            console.log('User signed out!');
        });
    }

    return (
        <View style={styles.screen}>
            <ImageBackground
                source={require('../../assets/bg5.png')}
                style={styles.profileContainer}
                imageStyle={styles.profileBackground}
            >
                <View style={styles.imgCard}>
                    <Image source={require('../../assets/dummy.png')} style={styles.avatar} />
                </View>
                <View style={styles.nameCard}>

                    <Text style={styles.nameText}>
                        {userName}
                    </Text>
                    <Text
                        size={16}
                        color="white"
                        style={styles.cityStateText}
                    >
                        <Icon name="location-pin" size={16} />
                        Makrana, Rajasthan
                    </Text>
                </View>
                <View style={styles.textBox}>
                    <Icon name="email" size={18} />
                    <Text style={styles.textBoxText}>  {userEmail}</Text>
                </View>
                <View style={styles.textBox}>
                    <Icon name="location-pin" size={18} />
                    <Text style={styles.textBoxText}>  {userAddress}</Text>
                </View>
                <View style={styles.textBox}>
                    <Icon name="local-phone" size={18} />
                    <Text style={styles.textBoxText}>  {userContact}</Text>
                </View>
                <TouchableOpacity onPress={logoutInputHandler} style={styles.logOutBtn}>
                    <Icon name="logout" size={18} />
                    <Text style={styles.textBoxText}>{t("Logout")}</Text>
                </TouchableOpacity>
            </ImageBackground>


        </View>
    );
}

export default Profile;