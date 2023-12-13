import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

const ContactsScreen = () => {
  const {
    signIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text>ContactsScreen</Text>
      {!isLoggedIn && <Button title="Iniciar Sesion" onPress={signIn} />}
    </View>
  );
};

export default ContactsScreen;
