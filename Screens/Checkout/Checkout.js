import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Alert, ScrollView, ToastAndroid } from 'react-native';
import style from "./CheckoutStyle";
import { PrimaryButton } from "../../Components/Button";
import { useSelector } from 'react-redux';
import { firebase } from '@react-native-firebase/database';
import {useTranslation} from 'react-i18next';

const Checkout = ({ navigation, route }) => {

    const [currentDate, setCurrentDate] = useState('');
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const totalCost = route.params.orderPrice;
    const userAddress = useSelector((state) => state.UserReducer.Address);
    const userId = useSelector((state) => state.UserReducer.Id);
    const {t, i18n} = useTranslation();

    useEffect(() => {

        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
            date + '/' + month + '/' + year
            + ' ' + hours + ':' + min + ':' + sec
        );
        if (totalCost < 500) {
            setDeliveryCharge(50)
        };
    }, []);
    const confirmInputHandler = async () => {
        await firebase.database().ref('/Orders').push({
            userId: userId,
            amount: totalCost,
            time: currentDate,
        }).then(() => {
            console.log('Data uploaded.')
            ToastAndroid.show('Order Placed Successfully', ToastAndroid.SHORT);
            navigation.navigate('Home');
        }).catch((error) => console.log(error));


    };

    return (
        <ScrollView>
            <SafeAreaView style={style.screen}>

                <View style={style.card}>
                    <Text style={style.header}>{t("Amount")}</Text>
                    <View style={style.textbox}>
                        <Text style={style.text}>{t("Payble Amount")}</Text>
                        <Text style={style.text}>₹ {totalCost}</Text>
                    </View>
                    <View style={style.textbox}>
                        <Text style={style.text}>{t("Delivery Charges")}</Text>
                        <Text style={style.text}>₹ {deliveryCharge}</Text>
                    </View>
                    <View style={style.textbox}>
                        <Text style={style.text}>{t("Net Total")}</Text>
                        <Text style={style.text}>₹ {deliveryCharge + totalCost}</Text>
                    </View>
                </View>
                <View style={style.card}>
                    <Text style={style.header}>{t("Delivery Address")}</Text>
                    <Text style={style.addresstext}>{userAddress}</Text>
                </View>
                <PrimaryButton title={t('Confirm Buy')} onPress={() => {
                    Alert.alert(
                        t('Success'),
                        t('Confirm place order'),
                        [
                            {
                                text: t('Cancel'),
                                style: 'destructive'
                            },
                            {
                                text: t('Confirm'),
                                style: 'destructive',
                                onPress: confirmInputHandler
                            }
                        ]
                    )
                }} />
            </SafeAreaView>
        </ScrollView>
    );
}

export default Checkout;


