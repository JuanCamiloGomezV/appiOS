import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import SettingsScreen from '../screens/SettingsScreen';
import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {
  const {width} = useWindowDimensions();

  const isLargeScreen = width >= 768;
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: isLargeScreen ? 'permanent' : 'front',
        drawerHideStatusBarOnOpen: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif',
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={styles.menuButtom}>
          <Text style={styles.menuText}>Navegación Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuButtom}>
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
