import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ItemDetails from '../Screens/ItemDetailsScreen/ItemDetails';

const Stack = createNativeStackNavigator();

export default HomeDetailsNavigaton = () => {

    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='DetailsScreen'
                component={ItemDetails}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

