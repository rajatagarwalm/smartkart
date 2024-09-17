import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import SigninScreen from '../Screens/Login/SigninScreen';

describe('SigninScreen', () => {
  it('navigates on button press', () => {
    const push = jest.fn();
    const { getByText } = render(<SigninScreen navigation={{ push }} />);
    fireEvent.press(getByText('Go to Screen 2'));
    expect(push).toHaveBeenCalledWith('HomeScreen');
  });
});