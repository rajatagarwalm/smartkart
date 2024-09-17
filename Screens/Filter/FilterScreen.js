import React, { useState } from "react";
import { Text, View, SafeAreaView } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import styles from "./FilterScreenStyle";
import { PrimaryButton } from "../../Components/Button";
import { connect } from "react-redux";
import { updateDataObjectList } from '../../Store/action';
import { firebase } from "@react-native-firebase/database";
import { useNavigation } from "@react-navigation/native";
import {useTranslation} from 'react-i18next';

const FilterScreen = (props) => {
    const [less200, setLess200] = useState(false);
    const [price200to500, setPrice200To500] = useState(false);
    const [price500to1000, setPrice500To1000] = useState(false);
    const [greater1000, setGreater1000] = useState(false);
    const [noFilter, setNoFilter] = useState(false);
    const [product, setProduct] = useState([])
    const navigation = useNavigation();
    const {t, i18n} = useTranslation();

    const applyInputHandler = () => {
        setProduct([])
        if (!noFilter) {
            if (less200) {
                firebase.database().ref('/Product').on('value', snapshot => {
                    snapshot.forEach((childSnapshot) => {
                        if (childSnapshot.val().Price <= 200) {
                            setProduct(oldArray => [...oldArray, childSnapshot.val()])
                        }
                    });
                })
            }
            if (price200to500) {
                firebase.database().ref('/Product').on('value', snapshot => {
                    snapshot.forEach((childSnapshot) => {
                        if (childSnapshot.val().Price > 200 && childSnapshot.val().Price <= 500) {
                            setProduct(oldArray => [...oldArray, childSnapshot.val()])
                        }
                    });
                })
            }
            if (price500to1000) {
                firebase.database().ref('/Product').on('value', snapshot => {
                    snapshot.forEach((childSnapshot) => {
                        if (childSnapshot.val().Price > 500 && childSnapshot.val().Price <= 1000) {
                            setProduct(oldArray => [...oldArray, childSnapshot.val()])
                        }
                    });
                })
            }
            if (greater1000) {
                firebase.database().ref('/Product').on('value', snapshot => {
                    snapshot.forEach((childSnapshot) => {
                        if (childSnapshot.val().Price > 1000) {
                            setProduct(oldArray => [...oldArray, childSnapshot.val()])
                        }
                    });
                })
            }
        }
        else {
            firebase.database().ref('/Product').on('value', snapshot => {
                snapshot.forEach((childSnapshot) => {
                    const productData = product.find(element => {
                        if (element.id === childSnapshot.val().id) {
                            return true;
                        }
                    });
                    if (!productData) {
                        setProduct(oldArray => [...oldArray, childSnapshot.val()]);
                    }
                });
            });
        }

        navigation.navigate('Smartkart');
    }

    props.updateDataObjectList(product);

    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.headerText}>{t("Price Category")}</Text>
            <View style={styles.checkItem}>
                <Text style={styles.label}>{t("Less then 200")}?</Text>
                <CheckBox
                    value={less200}
                    onValueChange={setLess200}
                    style={styles.checkbox}
                />
            </View>
            <View style={styles.checkItem}>
                <Text style={styles.label}>200 {t("to")} 500?</Text>
                <CheckBox
                    value={price200to500}
                    onValueChange={setPrice200To500}
                    style={styles.checkbox}
                />
            </View>
            <View style={styles.checkItem}>
                <Text style={styles.label}>500 {t("to")} 1000?</Text>
                <CheckBox
                    value={price500to1000}
                    onValueChange={setPrice500To1000}
                    style={styles.checkbox}
                />
            </View>
            <View style={styles.checkItem}>
                <Text style={styles.label}>{t("greater then 1000")}?</Text>
                <CheckBox
                    value={greater1000}
                    onValueChange={setGreater1000}
                    style={styles.checkbox}
                />
            </View>
            <View style={styles.checkItem}>
                <Text style={styles.label}>{t("No Filter")}</Text>
                <CheckBox
                    value={noFilter}
                    onValueChange={setNoFilter}
                    style={styles.checkbox}
                />
            </View>
            < PrimaryButton title={t('Apply')} onPress={applyInputHandler} />
        </SafeAreaView>
    );
}

const mapStateToProps = state => ({
    dataObject: state.dataObject
});

const mapDispatchToProps = dispatch => {
    return {
        updateDataObjectList: (dataObject) => {
            dispatch(updateDataObjectList(dataObject));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen);