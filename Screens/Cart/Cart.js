import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, TextInput, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import style from "./CartStyle";
import { PrimaryButton } from "../../Components/Button";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ItemCard from '../../Components/ItemCard';
import {useTranslation} from 'react-i18next';

const Cart = (props) => {
  const cartObject = useSelector((state) => state.CartReducer.Data);
  const [orderPrice, setOrderPrice] = useState();
  const [searchedData, setSearchedData] = useState([]);
  const [searchText, setSearchText] = useState();
  const {t, i18n} = useTranslation();

  const searchItem = async () => {
    if (searchText) {
      const newData = cartObject.filter(
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

  const TotalPrice = () => {
    let sum = 0;
    for (let index = 0; index < cartObject.length; index++) {
      sum += cartObject[index].Price
    }
    setOrderPrice(sum);

    return (
      <View>
        <View style={style.textbox}>
          <Text style={style.textboxtext}>{t("Total")}</Text>
          <Text style={style.textboxtext}>₹ {sum}</Text>
        </View>
      </View>
    )
  }

  return (

    <SafeAreaView style={style.screen}>
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
        data={!searchedData.length ? cartObject : searchedData}
        renderItem={({ item }) => {
          return <ItemCard Object={item} />;
        }}
      />
      <View>
        <Text style={style.orderdetail}>{t("Order Details")}</Text>
        <TotalPrice />
      </View>
      <PrimaryButton title={t('Checkout')} onPress={() => {
        props.navigation.navigate('Checkout', {
          orderPrice: orderPrice,
        })
      }} />
    </SafeAreaView>
  )
}

export default Cart;