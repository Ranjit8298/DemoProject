import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Image} from 'react-native';
import constants from '../constants';
import HomeScreen from '../screens/DashboardScreen/HomeScreen';
import SettingScreen from '../screens/DashboardScreen/SettingScreen';
import DrawerNavigation from './DrawerNavigation';

const HomeStack = createStackNavigator();

const HomeScreenStack = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name={'HomeScreen'}
      component={HomeScreen}
      options={{headerShown: false, gestureEnabled: false}}
    />
  </HomeStack.Navigator>
);

const SettingStack = createStackNavigator();

const SettingStackScreen = () => (
  <SettingStack.Navigator>
    <SettingStack.Screen
      name={constants.screens.SettingScreen}
      component={SettingScreen}
      options={{headerShown: false, gestureEnabled: false}}
    />
  </SettingStack.Navigator>
);

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: constants.colors.colorPrimary,
        tabBarLabelStyle: {
          fontSize: constants.vh(12),
          fontWeight:'500',
          marginTop: constants.vh(2),
          marginBottom: constants.vh(5),
        },
        tabBarStyle: {
          paddingVertical: constants.vh(5),
        },
      }}
      //   tabBarOptions={{
      //     safeAreaInsets: {
      //       top: 0,
      //       bottom: 0,
      //       left: 0,
      //       right: 0,
      //     },
      //   }}
    >
      <Tab.Screen
        name="HomeScreenStack"
        component={HomeScreenStack}
        options={{
          headerShown: false,
          tabBarLabel: constants.string.home,
          tabBarIcon: ({focused}) => (
            <Image
              source={constants.images.menu}
              resizeMode="contain"
              style={{
                tintColor: focused
                  ? constants.colors.colorPrimary
                  : constants.colors.gray,
              }}
            />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('HomeScreen', {
              isScrollToTop: true,
            });
          },
        })}
      />
      <Tab.Screen
        name="SettingStackScreen"
        component={SettingStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: constants.string.setting,
          tabBarIcon: ({focused}) => (
            <Image
              source={constants.images.eyeClose}
              resizeMode="contain"
              style={{
                tintColor: focused
                  ? constants.colors.colorPrimary
                  : constants.colors.gray,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
