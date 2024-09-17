import React from "react";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#307ecc',
    },
    activityIndicator: {
        alignItems: 'center',
        height: '50%',
    },
    logoImage: {
        width: '80%',
        height: '40%',
        resizeMode: 'contain',
        marginTop: '20%',
        borderRadius: 30,
    },
    textLogo: {
        color: 'white',
        fontSize: 17,
    }
});

export default Styles;