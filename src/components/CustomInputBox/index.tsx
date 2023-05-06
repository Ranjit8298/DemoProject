import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import constants from '../../constants';
// import utils from '../../utils';
import CommonFunction from '../../utils/CommonFunction';
// import validationss from '../../utils/validations';
interface Props {
  contentContainerStyle?: any;
  onChangeText?: any;
  autoCapitalize?: any;
  secureTextEntry?: any;
  keyboardType?: any;
  placeholder?: string;
  value?: any;
  onSubmitEditing?: any;
  ref?: any;
  returnKeyType?: any;
  blurOnSubmit?: boolean;
  majorContainer?: ViewStyle;
  hasError?: string;
  title?: any;
  image?: any;
  text?: any;
  maxLength?: any;
  multiline?: any;
  headingStyle?: TextStyle | Array<TextStyle>;
  renderLeft?: Function;
  textInputStyle?: ViewStyle;
  isDefault?: boolean;
  onFocus?: Function;
  editable?: any;
  selectTextOnFocus?: any;
  renderExtra?: any;
  imageStyle?: any;
  autoFocus?: any;
}
const CustomInputBox = React.forwardRef((props: Props, ref: any) => {
  const {contentContainerStyle} = props;
  const [toggleShow, setToggleShow] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(
    props.secureTextEntry,
  );

  const handleToggleText = () => {
    setToggleShow(!toggleShow);
    setSecureTextEntry(!secureTextEntry);
  };

  const renderPasswordToggle = () => (
    <TouchableOpacity
      onPress={handleToggleText}
      style={styles.passwordIconContainer}>
      <Image
        source={
          toggleShow ? constants.images.passVisible : constants.images.eyeClose
        }
        style={{width: 25, height: 25}}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );

  const removeEmojis = (str: string) => {
    const regex =
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
    return str.replace(regex, '');
  };
  const normalizeSpaces = (value: string) => {
    return value.replace(/^\s+/g, '');
  };
  const errorStyle =
    props.hasError === '' ? styles.errorWithOutStyle : styles.errorStyle;
  return (
    <View style={props.majorContainer}>
      {/* {props.title && (
        <Text style={[styles.title, props.headingStyle]}>{props.title}</Text>
      )} */}
      <Text style={[styles.title, props.headingStyle]}>
        {props.title}
        {props.isDefault && (
          <Text
            style={{color: constants.colors.red, fontSize: constants.vw(15)}}>
            *
          </Text>
        )}
      </Text>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          ref?.current?.focus();
        }}
        style={[styles.container, contentContainerStyle, errorStyle]}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {props.text && <Text>{props.text}</Text>}
          {props.renderLeft && props.renderLeft()}
          <TextInput
            ref={ref}
            selectionColor={constants.colors.colorPrimary}
            value={props.value}
            style={{
              ...styles.textInput,
              textAlignVertical: props.multiline ? 'top' : 'auto',
              marginTop: props.multiline ? constants.vh(8) : 0,
              marginBottom: props.multiline ? constants.vh(8) : 0,
              ...props.contentContainerStyle,
              ...props.textInputStyle,
            }}
            onChangeText={text => {
              props.onChangeText(normalizeSpaces(removeEmojis(text)));
            }}
            autoCapitalize={props.autoCapitalize}
            secureTextEntry={secureTextEntry}
            keyboardType={props.keyboardType}
            placeholder={props.placeholder}
            returnKeyType={props.returnKeyType}
            onFocus={() => {
              props.onFocus && props.onFocus();
            }}
            autoCorrect={false}
            blurOnSubmit={props.blurOnSubmit}
            maxLength={props.maxLength}
            onSubmitEditing={() => {
              props.onSubmitEditing();
            }}
            multiline={props.multiline}
            editable={props.editable}
            selectTextOnFocus={props.selectTextOnFocus}
            autoFocus={props.autoFocus}
          />
        </View>

        {props.image && (
          <Image source={props.image} style={{...props.imageStyle}} />
        )}
        {props.secureTextEntry && renderPasswordToggle()}
      </TouchableOpacity>
      {props.renderExtra && props.renderExtra()}
      {typeof props.hasError !== 'undefined' ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: props.hasError ? 30 : 10,
          }}>
          {props.hasError !== '' && (
            <>
              <Image
                source={constants.images.warning}
                style={{width: 18, height: 18, marginStart: 10}}
                resizeMode={'contain'}
              />
              <Text {...CommonFunction.nFixedLines(2)} style={styles.errorText}>
                {props.hasError}
              </Text>
            </>
          )}
        </View>
      ) : null}
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: constants.vw(335),
    height: constants.vh(48),
    backgroundColor: constants.colors.white,
    borderRadius: constants.vw(10),
    borderWidth: constants.vw(1.5),
    borderColor: constants.colors.colorPrimary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: constants.vw(16),
    alignItems: 'center',
    marginTop: constants.vh(8),
  },
  textInput: {
    fontSize: constants.vw(14),
    color: constants.colors.black,
    paddingStart: constants.vh(0),
    textAlign: 'left',
    borderColor: constants.colors.colorPrimary,
  },
  passwordIconContainer: {
    height: constants.vw(25),
    width: constants.vw(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorStyle: {
    borderColor: constants.colors.red,
    color: constants.colors.red,
  },
  errorWithOutStyle: {
    borderColor: constants.colors.colorPrimary,
    color: constants.colors.black,
    borderWidth: constants.vh(1.5),
  },
  errorText: {
    width: constants.vw(310),
    marginVertical: constants.vw(6),
    fontSize: 14,
    color: constants.colors.red,
    textAlign: 'left',
    left: constants.vw(5),
  },
  title: {
    color: constants.colors.black,
    fontSize: constants.vw(14),
    marginHorizontal: constants.vw(15),
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
});
export default CustomInputBox;
