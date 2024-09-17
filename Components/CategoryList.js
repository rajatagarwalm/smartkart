import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { connect } from "react-redux";
import { updateDataObjectList } from '../Store/action';
import database from '@react-native-firebase/database';
import {useTranslation} from 'react-i18next';

const CategoryList = (props) => {

    const categories = ['Shoes', 'Trousers', 'Tshirt', 'Shirts'];
    const [catergoryIndex, setCategoryIndex] = useState(-1);
    const [Objects, setObject] = useState([]);
    const {t, i18n} = useTranslation();

    const getProduct = async(index) => {
        setCategoryIndex(index);
        setObject([]);
        database().ref().child('/Product').orderByChild('WhatItem').equalTo(categories[index]).on('value', snapshot => {
            snapshot.forEach((childSnapshot) => {
                const productData = Objects.find(element => {
                    if (element.id === childSnapshot.val().id) {
                        return true;
                    }
                });
                if (!productData) {
                    setObject(oldArray => [...oldArray, childSnapshot.val()]);
                }
            })
        })
        
    }
    
    props.updateDataObjectList(Objects);

    return (
        <View style={style.categoryContainer}>
            {categories.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => { getProduct(index) }}>
                    <Text
                        style={[
                            style.categoryText,
                            catergoryIndex === index && style.categoryTextSelected,
                        ]}>
                        {t(item)}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const style = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },

    categoryText: { 
        fontSize: 16, 
        color: 'grey', 
        fontWeight: 'bold' 
    },

    categoryTextSelected: {
        color: '#307ecc',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: '#307ecc',
    },
});

const mapStateToProps = state => ({
    dataObject: state.dataObject,
});

const mapDispatchToProps = dispatch => {
    return {
        updateDataObjectList: (dataObject) => {
            dispatch(updateDataObjectList(dataObject));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);