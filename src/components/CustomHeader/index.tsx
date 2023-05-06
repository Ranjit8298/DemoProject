import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import constants from '../../constants';

interface props {
  headerTxt: any;
  onMenuPress: any;
  onMessagePress?: any;
  headerTxtStyle?: any;
  showRound?: any;
  leftImg?: any;
  rightImg: any;
  isBack?: any;
  rightImgH?: any;
}

const CustomHeader = (props: props) => {
  return (
    <View style={styles.headerView}>
      {props.isBack ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            props.onMenuPress();
          }}>
          <Image style={styles.menuIcon} source={props.rightImg} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            props.onMenuPress();
          }}>
          <Image style={styles.menuIcon} source={props.rightImg} />
        </TouchableOpacity>
      )}

      <View>
        <Text
          style={[styles.headerTxt, props.headerTxtStyle]}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {props.headerTxt}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: constants.colors.colorPrimary,
    height: 'auto',
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    padding: constants.vw(10),
  },
  menuIcon: {
    tintColor: constants.colors.white,
    resizeMode: 'contain',
    width: constants.vw(28),
    height: constants.vh(28),
  },
  headerTxt: {
    fontSize: constants.vh(20),
    fontWeight: '500',
    color: constants.colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
    marginStart:constants.vh(40)
  },
  userTxt: {
    alignSelf: 'center',
    color: constants.colors.colorPrimary,
  },
});
export default CustomHeader;