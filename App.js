import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
