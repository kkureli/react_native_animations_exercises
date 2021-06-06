import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SecondAnimations from '../screens/Animations/Second';
import ThirddAnimations from '../screens/Animations/Third';
import PanResponder from '../screens/Animations/PanResponder';

const Stack = createStackNavigator();

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="RegisterScreen"
        component={PanResponder}
      />
    </Stack.Navigator>
  );
};
