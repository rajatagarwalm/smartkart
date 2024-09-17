import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from "../Screens/Search/SearchScreen";

const SearchNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Search Screen"
                component={SearchScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
} 

export default SearchNavigation;