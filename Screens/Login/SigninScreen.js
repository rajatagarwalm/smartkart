import React, { useState, useContext } from 'react';
import {
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { updateUserId, updateUserName, updateUserAge, updateUserEmail, updateUserAddress, updateUserContact, updateUserPassword } from '../../Store/action';
import Loader from '../../Components/LoadingOverlay';
import { login } from '../../Firebase/auth';
import { AuthContext } from '../../Store/authContext';

import styles from './SigninScreenStyle';
import { firebase } from '../../Firebase/FirebaseConfig';

const LoginForm = (props) => {
    const [isAuthentication, setIsAuthentication] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const authCtx = useContext(AuthContext);

    const onLoginPress = async () => {
        setIsAuthentication(true); 
        try {
            const token = await login(userEmail, userPassword);
            authCtx.authenticate(token);
        } catch (error) {
            Alert.alert('Authentication fails', 'Invalid credentials');
            setIsAuthentication(false);
        }
    }

    if (isAuthentication) {
        return <Loader message="Wait a min.." />;
    }

    return (
        <View style={styles.mainBody}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <View>
                    <KeyboardAvoidingView enabled>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={{ uri: 'https://image.winudf.com/v2/image1/Y29tLnNtYXJ0bXV6YWZmYXJwdXIuc21hcnRrYXJ0X3NjcmVlbl8wXzE1NzE1Mjc2MzlfMDEz/screen-0.jpg?fakeurl=1&type=.jpg' }}
                                style={styles.logoImage}
                            />
                        </View>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(UserEmail) =>
                                    setUserEmail(UserEmail)
                                }
                                placeholder="Enter Email" //dummy@abc.com
                                placeholderTextColor="darkgray"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                underlineColorAndroid="#f000"
                                blurOnSubmit={true}
                            />
                        </View>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(UserPassword) =>
                                    setUserPassword(UserPassword)
                                }
                                placeholder="Enter Password" //12345
                                placeholderTextColor="darkgray"
                                keyboardType="default"
                                blurOnSubmit={false}
                                secureTextEntry={true}
                                underlineColorAndroid="#f000"
                                returnKeyType="next"
                            />
                        </View>
                        <TouchableOpacity testID="loginButton" style={styles.buttonStyle} activeOpacity={0.5} onPress={() => onLoginPress()}>
                            <Text style={styles.buttonTextStyle}>LOGIN</Text>
                        </TouchableOpacity>
                        <Text
                            style={styles.registerTextStyle}
                            onPress={() => props.navigation.replace('RegisterScreen')}>
                            Create Account ? Register
                        </Text>
                    </KeyboardAvoidingView>
                </View>
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
    userPassword: state.userPassword,
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
    }
}
// SigninScreen

const SigninScreen = reduxForm({
    form: 'LoginForm',
})(LoginForm);


export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);
