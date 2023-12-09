import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text
} from 'react-native';



function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Holaaaa</Text>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}
export default App;
