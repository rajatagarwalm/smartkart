import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../Screens/Cart/Cart';
import ItemDetails from '../Screens/ItemDetailsScreen/ItemDetails';
import Checkout from '../Screens/Checkout/Checkout';

const CartNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Cart">
            <Stack.Screen
                name='Your Cart'
                component={Cart}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='DetailsScreen'
                component={ItemDetails}
                options={{
                    headerStyle: {
                        backgroundColor: '#307ecc', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name='Checkout'
                component={Checkout}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default CartNavigation;
