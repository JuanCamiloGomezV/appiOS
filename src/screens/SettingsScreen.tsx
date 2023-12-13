import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import {colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{marginTop: insets.top}}>
      <Text>SettingsScreen</Text>
      <Text>{JSON.stringify(authState)}</Text>
      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={160} color={colors.primary} />
      )}
    </View>
  );
};

export default SettingsScreen;
