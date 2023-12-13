import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

const AlbumsScreen = () => {
  const {
    logOut,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text>AlbumsScreen</Text>
      {isLoggedIn && <Button title="Cerrar Sesion" onPress={logOut} />}
    </View>
  );
};

export default AlbumsScreen;
