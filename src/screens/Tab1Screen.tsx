import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Icon name="wrench" size={30} color="#900" />
    </View>
  );
};

export default Tab1Screen;
