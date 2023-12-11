import {View, Text, TouchableOpacity, Button} from 'react-native';
import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Screen1 = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

export default Screen1;
