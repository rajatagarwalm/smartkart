import React, { useContext, useEffect, useState } from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from "../Firebase/FirebaseConfig";
import database from '@react-native-firebase/database';

import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import AuthNavigation from "./AuthNavigation";
import { connect } from "react-redux";
import { updateUserId, updateUserName, updateUserAge, updateUserEmail, updateUserAddress, updateUserContact, updateUserPassword, updateDataObjectList } from '../Store/action';
import DrawerNavigation from "./DrawerNavigation";
import { AuthContext } from "../Store/authContext";

const Stack = createNativeStackNavigator();

const MainNavigation = (props) => {

    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState(null)
    const [userId, setUserId] = useState('')
    const [Objects, setObject] = useState([]);


    useEffect(() => {
        const getProduct = async () => {
            database().ref('/Product').on('value', snapshot => {
                snapshot.forEach((childSnapshot) => {
                    const productData = Objects.find(element => {
                        if (element.id === childSnapshot.val().id) {
                            return true;
                        }
                    });
                    if (!productData) {
                        setObject(oldArray => [...oldArray, childSnapshot.val()]);
                    }
                });
            });
        }

        getProduct();
        // getUser();
    }, []);

    props.updateDataObjectList(Objects);

    const OpeningNavigator = () => {
        const authCtx = useContext(AuthContext);
        return (
            <>
                {!authCtx.isAuthenticated && <AuthNavigation />}
                {authCtx.isAuthenticated && <DrawerNavigation />}
            </>
        );
    }

    return (
        <Stack.Navigator initialRouteName="SplashScreen">
            {/* SplashScreen which will come once for 5 Seconds */}
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                // Hiding header for Splash Screen
                options={{ headerShown: false }}
            />
            {/* Auth Navigator: Include Login and Signup */}
            <Stack.Screen
                name="OpeningNavigator"
                component={OpeningNavigator}
                // Hiding header for Splash Screen
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

const mapStateToProps = state => ({
    userId: state.userId,
    userName: state.userName,
    userAge: state.userAge,
    userEmail: state.userEmail,
    userAddress: state.userAddress,
    userContact: state.userContact,
    userPassword: state.userPassword,
    dataObject: state.dataObject,
});

const mapDispatchToProps = dispatch => {
    return {
        updateId: (id) => {
            dispatch(updateUserId(id));
        },
        updateName: (name) => {
            dispatch(updateUserName(name));
        },
        updateAge: (age) => {
            dispatch(updateUserAge(age));
        },
        updateEmail: (email) => {
            dispatch(updateUserEmail(email));
        },
        updateAddress: (address) => {
            dispatch(updateUserAddress(address));
        },
        updateContact: (contact) => {
            dispatch(updateUserContact(contact));
        },
        updatePassword: (password) => {
            dispatch(updateUserPassword(password));
        },
        updateDataObjectList: (dataObject) => {
            dispatch(updateDataObjectList(dataObject));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation);