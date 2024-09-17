import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import style from './HomeScreenStyle';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryList from '../../Components/CategoryList';
import ItemCard from '../../Components/ItemCard';
import {useTranslation} from 'react-i18next';

const HomeScreen = (props) => {
    const userId = useSelector((state) => state.UserReducer.Id);
    const dataObject = useSelector((state) => state.FilterReducer.Data);
    const [searchedData, setSearchedData] = useState([]);
    const [searchText, setSearchText] = useState();
    const {t, i18n} = useTranslation();

    const searchItem = async () => {
        if (searchText) {
            const newData = dataObject.filter(
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
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{t('Welcome to')}</Text>
                    <Text style={{ fontSize: 38, color: '#307ecc', fontWeight: 'bold' }}>
                        {t('Smartkart')}
                    </Text>
                </View>
            </View>
            <CategoryList />
            <View style={{ marginBottom: 10, flexDirection: 'row' }}>
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
                data={!searchedData.length ? dataObject : searchedData}
                renderItem={({ item }) => {
                    return <ItemCard Object={item} />;
                }}
            />
            
        </SafeAreaView>
    );
}

export default HomeScreen;
