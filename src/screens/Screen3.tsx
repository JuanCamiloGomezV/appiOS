import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Screen3'> {}
const Screen3 = ({navigation, route}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Screen3</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir pagna 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Screen3;
