import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import MainNavigation from './Navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './Store/store';
import './Components/i18n';

export default function App() {
  return (
    <Provider store={Store()}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

