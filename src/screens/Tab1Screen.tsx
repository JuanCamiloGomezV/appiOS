import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';

import {TouchableIcon} from '../components/TouchableIcon';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <TouchableIcon iconName="water" />
      <TouchableIcon iconName="wrench" />
    </View>
  );
};

export default Tab1Screen;
