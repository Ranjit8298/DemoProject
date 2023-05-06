import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {UIManager} from 'react-native';
import constants from '../constants';
import LoginScreen from '../screens/OnboardingScreen/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { navigationRef } from './RootNavigation';
import DrawerNavigation from './DrawerNavigation';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const RootNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={constants.screens.LoginScreen}
      component={LoginScreen}
      options={{headerShown: false, gestureEnabled: false}}
    />
  </RootStack.Navigator>
);
const RootNavigators = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <RootStack.Group>
          <Stack.Screen
            name="RootNavigator"
            component={RootNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DrawerNavigation"
            component={DrawerNavigation}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigators;
