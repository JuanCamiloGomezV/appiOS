import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

export type RootStackParams = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Screen1" options={{title: '1'}} component={Screen1} />
      <Stack.Screen name="Screen2" options={{title: '2'}} component={Screen2} />
      <Stack.Screen name="Screen3" options={{title: '3'}} component={Screen3} />
    </Stack.Navigator>
  );
};
