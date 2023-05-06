import {
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    Image,
    ViewStyle,
  } from 'react-native';
  import React from 'react';
  import {Flow} from 'react-native-animated-spinkit';
  import constants from '../../constants';
  
  type Props = {
    isDark?: boolean;
    contentContainerStyle?: ViewStyle;
    buttonText: string;
    showLoader?: boolean;
    isDisabled?: boolean;
    textStyle?: TextStyle;
    handleAction: Function;
    rightimage?: any;
    leftimage?: any;
    imageStyle?: any;
    LimageStyle?: any;
  };
  
  export default function CustomButton(props: Props) {
    const isDisabled = props.isDisabled || props.showLoader;
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: props.isDark
              ? isDisabled
                ? constants.colors.gray
                : constants.colors.colorPrimary
              : constants.colors.colorPrimary,
            borderColor: props.isDark
              ? constants.colors.white
              : constants.colors.colorPrimary,
          },
          props.contentContainerStyle,
        ]}
        onPress={() => props.handleAction()}
        disabled={isDisabled}
        activeOpacity={0.8}>
        {props.leftimage && (
          <Image
            source={props.leftimage}
            resizeMode={'contain'}
            style={props.LimageStyle}
          />
        )}
        {props.showLoader === false ? (
          <Text
            style={[
              styles.buttonText,
              {
                color: props.isDark
                  ? constants.colors.white
                  : constants.colors.white,
              },
              props.textStyle,
            ]}>
            {props.buttonText}
          </Text>
        ) : (
          <View style={styles.containerLoader}>
            <Flow
              color={
                props.isDark ? constants.colors.white : constants.colors.white
              }
              size={28}
            />
          </View>
        )}
        {props.rightimage && (
          <Image
            source={props.rightimage}
            resizeMode={'contain'}
            style={props.imageStyle}
          />
        )}
      </TouchableOpacity>
    );
  }
  
  CustomButton.defaultProps = {
    textStyle: {},
    isArrow: false,
    customStyle: {},
    showLoader: false,
    isDisabled: false,
  };
  
  const styles = StyleSheet.create({
    buttonText: {
      fontSize: constants.vw(14),
      lineHeight: 14,
      textTransform: 'uppercase',
      letterSpacing: 0.3,
      padding: constants.vh(15),
      fontWeight: 'bold',
    },
    containerLoader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      height: constants.vh(48),
      width: constants.vw(335),
      // marginBottom: constants.vh(3),
      marginTop: constants.vh(0),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: constants.colors.colorPrimary,
      position: 'relative',
      borderRadius: constants.vh(10),
    },
  });
  