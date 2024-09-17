import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, ScrollView, TextInput, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import style from "./WishlistStyle";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ItemCard from '../../Components/ItemCard'
import {useTranslation} from 'react-i18next';

const Wishlist = (props) => {

    const wishListObject = useSelector((state) => state.WishListReducer.Data);
    const [searchedData, setSearchedData] = useState([]);
    const [searchText, setSearchText] = useState();
    const {t, i18n} = useTranslation();

    const searchItem = async () => {
        if (searchText) {
            const newData = wishListObject.filter(
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
            <View style={style.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{t("Your")}</Text>
                    <Text style={{ fontSize: 38, color: '#307ecc', fontWeight: 'bold' }}>
                        {t("Wishlist")}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={style.searchContainer}>
                    <TextInput placeholder={t("Search")} style={style.input} onChangeText={(text) => setSearchText(text)} />
                    <TouchableOpacity onPress={searchItem}><Icon name="search" size={25} /></TouchableOpacity>
                </View>
            </View>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={!searchedData.length ? wishListObject : searchedData}
                renderItem={({ item }) => {
                    return <ItemCard Object={item} />;
                }}
            />
        </SafeAreaView>
    )
}

export default Wishlist;