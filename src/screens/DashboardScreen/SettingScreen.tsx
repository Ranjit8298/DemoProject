import React from 'react';
import {Text, SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import constants from '../../constants';
import CustomHeader from '../../components/CustomHeader';

interface props {
  navigation: any;
}

const SettingScreen = (props: props) => {
  return (
    <SafeAreaView style={styles.conatiner}>
       <StatusBar
        backgroundColor={constants.colors.colorPrimary}
        animated={true}
        barStyle="light-content"
      />
      <CustomHeader
        headerTxt={'Setting'}
        rightImg={constants.images.back_arrow}
        isBack={false}
        onMenuPress={() => {
          props.navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: constants.colors.white,
  },
});

export default SettingScreen;
