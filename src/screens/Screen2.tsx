import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const Screen2 = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: '',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Button
        title="Ir pagina 3"
        onPress={() => navigation.navigate('Screen3')}
      />
    </View>
  );
};

export default Screen2;
