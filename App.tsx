import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './src/navigator/StackNavigator';
import {LateralMenu} from './src/navigator/LateralMenu';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <LateralMenu />
    </NavigationContainer>
  );
}
export default App;
