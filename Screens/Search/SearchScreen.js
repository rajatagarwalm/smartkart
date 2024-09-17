import React, { useEffect, useState } from "react";
import { SafeAreaView, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import style from './SearchScreenStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import database from '@react-native-firebase/database';
import ItemCard from '../../Components/ItemCard';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const SearchScreen = () => {

    const [searchText, setSearchText] = useState();
    const [Objects, setObject] = useState([]);
    const [searchHistory, setItemNameList] = useState([]);
    const [searchedData, setSearchedData] = useState([]);
    const userId = useSelector((state) => state.UserReducer.Id);
    const {t, i18n} = useTranslation();

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
    }, [])

    const searchItem = async () => {
        if (searchText) {

            await database().ref('/Search_History').push({
                userId: userId,
                searchText: searchText,
            }).catch((error) => console.log(error));


            const newData = Objects.filter(
                function (item) {
                    const itemData = item.Name
                        ? item.Name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = searchText.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                }
            );
            setSearchedData(newData)
        } else {
            setSearchedData([]);
            Alert.alert('Warning', 'Please enter Something.')
        }
    }

    return (
        <SafeAreaView style={style.screen}>
            <View style={{ marginBottom: 10, marginTop: 10, flexDirection: 'row' }}>
                <View style={style.searchContainer}>
                    <TextInput placeholder={t("Search Product")} style={style.input} onChangeText={(text) => setSearchText(text)} />
                    <TouchableOpacity onPress={searchItem} ><Icon name="search" size={25} /></TouchableOpacity>
                </View>
            </View>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 15,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={searchedData}
                renderItem={({ item }) => {
                    return <ItemCard Object={item} />;
                }}
            />
        </SafeAreaView>
    );
}

export default SearchScreen;