import React from 'react';
import {Text, SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import constants from '../../constants';
import CustomHeader from '../../components/CustomHeader';

interface props {
  navigation: any;
}

const HomeScreen = (props: props) => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <StatusBar
        backgroundColor={constants.colors.colorPrimary}
        animated={true}
        barStyle="light-content"
      />
      <CustomHeader
        headerTxt={'Home'}
        rightImg={constants.images.menu}
        isBack={false}
        onMenuPress={() => {
          props.navigation?.openDrawer();
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

export default HomeScreen;
