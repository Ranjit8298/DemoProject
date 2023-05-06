import React from 'react';
import {SafeAreaView, Image, StyleSheet, View, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import constants from '../constants';
import ProfileScreen from '../screens/DashboardScreen/ProfileScreen';
import HomeScreen from '../screens/DashboardScreen/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();


interface props {
  navigation: any;
}

const DrawerNavigation = (props: props) => {
  const CustomDrawerContent = (props: any) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View
            style={{
              marginTop: constants.vh(-5),
              marginBottom: constants.vh(10),
              backgroundColor: constants.colors.colorPrimary,
            }}>
            <Image style={styles.userImg} source={constants.images.menu} />
            <Text
              style={{
                ...styles.bottomTxt,
                color: constants.colors.white,
                alignSelf: 'center',
                marginBottom: constants.vh(10),
                fontWeight: '500',
                letterSpacing: 0.3,
              }}>
              {'Test Engineer'}
            </Text>
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </SafeAreaView>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: constants.colors.colorPrimary,
        drawerInactiveBackgroundColor: constants.colors.border1,
        drawerActiveTintColor: constants.colors.white,
        drawerInactiveTintColor: constants.colors.black,
        drawerStyle: {
          backgroundColor: constants.colors.white,
          width: constants.vw(280),
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        name="HomeScreen"
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({focused}) => (
            <Image
              source={constants.images.menu}
              resizeMode="contain"
              style={{
                ...styles.icon,
                tintColor: focused
                  ? constants.colors.white
                  : constants.colors.colorPrimary,
              }}
            />
          ),
        }}
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name="ProfileScreen"
        options={{
          drawerLabel: 'Profile',
          drawerIcon: ({focused}) => (
            <Image
              source={constants.images.menu}
              resizeMode="contain"
              style={{
                ...styles.icon,
                tintColor: focused
                  ? constants.colors.white
                  : constants.colors.colorPrimary,
              }}
            />
          ),
        }}
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: constants.vw(25),
    height: constants.vh(25),
    resizeMode: 'contain',
  },
  bottomStyle: {
    backgroundColor: constants.colors.red,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    height: constants.vh(43.5),
    position: 'absolute',
    top: 250,
    end: 0,
    start: 0,
    margin: constants.vw(10),
    borderRadius: constants.vw(5),
  },
  bottomTxt: {
    color: constants.colors.white,
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.3,
  },
  userImg: {
    width: constants.vw(110),
    height: constants.vw(110),
    borderRadius: constants.vw(55),
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: constants.vh(15),
    tintColor: constants.colors.white,
  },
});

export default DrawerNavigation;
