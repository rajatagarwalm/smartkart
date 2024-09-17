import React, { useState, useContext } from "react";
import {
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import {Loader} from '../../Components/LoadingOverlay';
import { createUser } from "../../Firebase/auth";

import styles from './SignupScreenStyle';
import { firebase } from '../../Firebase/FirebaseConfig';
import { updateUserId, updateUserName, updateUserAge, updateUserEmail, updateUserAddress, updateUserContact, updateUserPassword } from '../../Store/action';
import { AuthContext } from "../../Store/authContext";

const RegisterForm = (props) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userContact, setUserContact] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('');

    const [isAuthentication, setIsAuthentication] = useState(false);

    const authCtx = useContext(AuthContext);
    async function signUpHandler() {
        setIsAuthentication(true);
        try {
            const token = await createUser(userEmail, userPassword);
            authCtx.authenticate(token);
        } catch (error) {
            Alert.alert('Authentication fails', error);
            setIsAuthentication(false);
        }
    }

    if (isAuthentication) {
        return <Loader message="Wait a min.." />;
    }

    const nameInput = (input) => {
        setUserName(input);
        props.updateName(input);
    };

    const emailInput = (input) => {
        setUserEmail(input);
        props.updateEmail(input);
    };

    const ageInput = (input) => {
        setUserAge(input);
        props.updateAge(input);
    };

    const contactInput = (input) => {
        setUserContact(input);
        props.updateContact(input);
    };

    const addressInput = (input) => {
        setUserAddress(input);
        props.updateAddress(input);
    };

    const passwordInput = (input) => {
        setUserPassword(input);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#307ecc' }}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={{ uri: 'https://image.winudf.com/v2/image1/Y29tLnNtYXJ0bXV6YWZmYXJwdXIuc21hcnRrYXJ0X3NjcmVlbl8wXzE1NzE1Mjc2MzlfMDEz/screen-0.jpg?fakeurl=1&type=.jpg' }}
                        style={{
                            width: '50%',
                            height: 100,
                            resizeMode: 'contain',
                            margin: 30,
                        }}
                    />
                </View>
                <KeyboardAvoidingView enabled>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={nameInput}
                            underlineColorAndroid="#f000"
                            placeholder="Enter Name"
                            placeholderTextColor="darkgray"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={emailInput}
                            underlineColorAndroid="#f000"
                            placeholder="Enter Email"
                            placeholderTextColor="darkgray"
                            keyboardType="email-address"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={ageInput}
                            underlineColorAndroid="#f000"
                            placeholder="Enter Age"
                            placeholderTextColor="darkgray"
                            keyboardType="numeric"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={addressInput}
                            underlineColorAndroid="#f000"
                            placeholder="Enter Address"
                            placeholderTextColor="darkgray"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={contactInput}
                            keyboardType='number-pad'
                            underlineColorAndroid="#f000"
                            placeholder="Enter Contact Details"
                            placeholderTextColor="darkgray"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={passwordInput}
                            underlineColorAndroid="#f000"
                            placeholder="Enter Password"
                            placeholderTextColor="darkgray"
                            returnKeyType="next"
                            secureTextEntry={true}
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserConfirmPassword) =>
                                setUserConfirmPassword(UserConfirmPassword)
                            }
                            underlineColorAndroid="#f000"
                            placeholder="Confirm Password"
                            placeholderTextColor="darkgray"
                            returnKeyType="next"
                            secureTextEntry={true}
                            blurOnSubmit={false}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={() => signUpHandler()}>
                        <Text style={styles.buttonTextStyle}>REGISTER</Text>
                    </TouchableOpacity>
                    <Text
                        style={styles.loginTextStyle}
                        onPress={() => props.navigation.replace('LoginScreen')}>
                        Already have account ? Login
                    </Text>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
}

const mapStateToProps = state => ({
    userId: state.userId,
    userName: state.userName,
    userAge: state.userAge,
    userEmail: state.userEmail,
    userAddress: state.userAddress,
    userContact: state.userContact,
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
    }
}

const SignupScreen = reduxForm({
    form: 'RegisterForm',
})(RegisterForm);

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
