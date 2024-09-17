import React from "react";
import {TouchableOpacity, View, Text, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import COLORS from "./colors";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const width = Dimensions.get('window').width/2 - 30;

const Card = ({Object}) => {
    const navigation = useNavigation();
    return (
        <View style={style.card}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('DetailsScreen', {
                    ProductId: Object.id,
                    Name: Object.Name,
                    Price: Object.Price,
                    Description: Object.Description,
                    ImageOne: Object.ImageOne,
                    ImageTwo: Object.ImageTwo,
                    ImageThree: Object.ImageThree,
                })}>
                <View
                    style={{
                        height: 110,
                        alignItems: 'flex-end',
                    }}>
                    <ImageBackground source={{ uri: Object.ImageOne }}
                        style={{ height: '100%', width: '100%', borderRadius:10}}
                    >
                        <View style={{ alignItems: 'flex-end' }}>
                            <View
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: Object.like ? '#cfecf7' : 'rgba(0,0,0,0.2)',

                                }}>
                                <Icon
                                    name="favorite"
                                    size={18}
                                    color= {Object.like ? '#307ecc' : 'black' }
                                />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
                    {Object.Name}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5,
                    }}>
                    <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
                        ₹{Object.Price}
                    </Text>
                </View>

            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    card: {
        height: 255,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },

});

export default Card;