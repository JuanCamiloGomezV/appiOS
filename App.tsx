import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './src/navigator/StackNavigator';
import {LateralMenu} from './src/navigator/LateralMenu';
import {AuthProvider} from './src/context/AuthContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppState>
        <LateralMenu />
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({children}: {children: JSX.Element}) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default App;
