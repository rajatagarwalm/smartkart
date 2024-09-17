import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Image, Text } from 'react-native';

import Styles from "./SplashScreenStyle";

const SplashScreen = (props) => {

    const [animating, setAnimating] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            //Check if user_id is set or not
            //If not then send for Authentication
            //else send to Home Screen
            props.navigation.replace('OpeningNavigator');
        }, 2000);
    }, []);

    return (
        <View style={Styles.container}>
            <Image
                source={{ uri: 'https://image.winudf.com/v2/image1/Y29tLnNtYXJ0bXV6YWZmYXJwdXIuc21hcnRrYXJ0X3NjcmVlbl8wXzE1NzE1Mjc2MzlfMDEz/screen-0.jpg?fakeurl=1&type=.jpg' }}
                style={Styles.logoImage}
            />
            <Text style={Styles.textLogo}>
                Every product is special !
            </Text>
        </View>
    );
}

export default SplashScreen;
