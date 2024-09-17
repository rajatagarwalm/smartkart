import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, ToastAndroid, ImageBackground, ScrollView, Image } from 'react-native';
import COLORS from '../../Components/colors';
import style from './ItemDetailStyle';
import { firebase } from '@react-native-firebase/database';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { updateCartObjectList, updateWishObjectList } from '../../Store/action';
import { connect } from "react-redux";
import {useTranslation} from 'react-i18next';

const DetailsScreen = (props) => {

    const navigation = useNavigation();
    const userId = useSelector((state) => state.UserReducer.Id);
    const ProductId = props.route.params.ProductId
    const Name = props.route.params.Name;
    const Price = props.route.params.Price;
    const Description = props.route.params.Description;
    const ImageOne = props.route.params.ImageOne;
    const ImageTwo = props.route.params.ImageTwo;
    const ImageThree = props.route.params.ImageThree;
    const [imgActive, setImgActive] = useState(0);
    const {t, i18n} = useTranslation();

    const images = [
        ImageOne, ImageTwo, ImageThree
    ]
    const [product, setProduct] = useState([]);
    const [wishList, setWishList] = useState([]);

    const AddToWishlist = async () => {
        await firebase.database().ref('/Wishlist').push({
            userId: userId,
            productId: ProductId,
        }).then(() => {
            console.log('Data uploaded to Wishlist.')
        }).catch((error) => console.log(error));

        ToastAndroid.show(t('Item Added to WishList successfully'), ToastAndroid.SHORT);

        await firebase.database().ref().child('/Wishlist').orderByChild('userId').equalTo(userId).once('value', snapshot => {
            snapshot.forEach((childSnapshot) => {
                firebase.database().ref().child('/Product').orderByChild('id').equalTo(childSnapshot.val().productId).on('value', snapshot => {
                    snapshot.forEach((childSnapshot) => {
                        const productData = wishList.find(element => {
                            if (element.id === childSnapshot.val().id) {
                                return true;
                            }
                        });
                        if (!productData) {
                            setWishList(oldArray => [...oldArray, childSnapshot.val()])
                        }
                    });
                });
            });
        });
    }

    const AddToCart = async () => {
        await firebase.database().ref('/Cart').push({
            userId: userId,
            productId: ProductId,
        }).then(() => {
            console.log('Data uploaded.')
        }).catch((error) => console.log(error));
        ToastAndroid.show(t('Item Added to Cart successfully'), ToastAndroid.SHORT);

        await firebase.database().ref().child('/Cart').orderByChild('userId').equalTo(userId).on('value', snapshot => {
            snapshot.forEach((childSnapshot) => {
                firebase.database().ref().child('/Product').orderByChild('id').equalTo(childSnapshot.val().productId).on('value', snapshot => {
                    snapshot.forEach((childSnapshot) => {
                        setProduct(oldArray => [...oldArray, childSnapshot.val()])
                    });
                });
            });
        });
    }
    props.updateCartObjectList(product);
    props.updateWishObjectList(wishList);

    const onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide != imgActive) {
                setImgActive(slide)
            }
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, }}>
            <ScrollView>
                <View style={style.wrap}>
                    <ScrollView
                        onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        style={style.wrap}
                    >
                        {
                            images.map((e, index) =>
                                <Image
                                    key={e}
                                    resizeMode='contain'
                                    style={style.wrap}
                                    source={{ uri: e }}
                                />
                            )
                        }

                    </ScrollView>
                    <View style={style.wrapDot}>
                        {
                            images.map((e, index) =>
                                <Text
                                    key={e}
                                    style={imgActive == index ? style.dotActive : style.dot}
                                >
                                    ●
                                </Text>
                            )
                        }
                    </View>
                </View>
                <View style={style.detailsContainer}>
                    <View style={{ marginLeft: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{t("Best choice")}</Text>
                        </View>
                        <View style={style.priceTag}>
                            <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 16, alignSelf: 'center' }}>
                                ₹ {Price}
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        marginLeft: 20,
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                    >
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{Name}</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
                        <Text
                            style={{
                                color: 'grey',
                                fontSize: 16,
                                lineHeight: 22,
                                marginTop: 10,
                            }}>
                            {Description}
                        </Text>
                        <View style={{ marginTop: 20,marginBottom:20, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={style.buyBtn}>
                                    <TouchableOpacity onPress={AddToWishlist}>
                                        <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>{t("Add to wishlist")}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={style.buyBtn}>
                                    <TouchableOpacity onPress={AddToCart}>
                                        <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>{t("Add to cart")}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

DetailsScreen.navigationOptions = ({ route }) => {
    const foodName = route.params.plant;
    console.log(foodName.name);
    return {
        headerTitle: foodName.name,
        headerStyle: {
            backgroundColor: '#4a148c',
        },
        headerTintColor: 'white',
    };
};

const mapStateToProps = state => ({
    cartObject: state.cartObject,
    wishObject: state.wishObject,
});

const mapDispatchToProps = dispatch => {
    return {
        updateCartObjectList: (cartObject) => {
            dispatch(updateCartObjectList(cartObject));
        },
        updateWishObjectList: (wishObject) => {
            dispatch(updateWishObjectList(wishObject));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);