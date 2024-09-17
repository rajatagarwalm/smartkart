import { render } from "@testing-library/react-native";
import React from "react";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import renderer from 'react-test-renderer';

test('given empty GroceryShoppingList, user can add an item to it', () => {
    const { getByPlaceholder, getAllByText, getByTestId } = render(
        <HomeScreen />
    );

    fireEvent.changeText(
        getByPlaceholder('Search'),
        'Shoes'
    );
    fireEvent.press(getByTestId('searchButton'));

    const Elements = getAllByText('Shoes');
    expect(Elements).toHaveLength(9); 
});
 
test('Renders snapshot as expected', () => {
        const tree = renderer.create(<HomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
});