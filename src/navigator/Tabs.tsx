import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab1Screen from '../screens/Tab1Screen';
import {colors} from '../theme/appTheme';
import {StackNavigator} from './StackNavigator';
import {TopTabs} from './TopTabs';

export type RootTabsParams = {
  Tab1Screen: undefined;
  TopTabs: undefined;
  StackNavigator: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParams>();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarShowLabel: false,
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string;
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'home-outline';
              break;
            case 'TopTabs':
              iconName = 'location-outline';
              break;
            case 'StackNavigator':
              iconName = 'hammer-outline';
              break;
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}>
      <Tab.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="TopTabs"
        component={TopTabs}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
