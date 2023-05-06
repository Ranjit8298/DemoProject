import React, {useState, createRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Keyboard,
} from 'react-native';
import constants from '../../constants';
import CustomInputBox from '../../components/CustomInputBox';
import CustomButton from '../../components/CustomButton';
import * as Yup from 'yup';
import Router from '../../navigators/routers';
import CommonFunction from '../../utils/CommonFunction';

const errorInitialData = {
  userName: '',
  password: '',
};

interface props {
  props?: any;
  navigation?: any;
}

const LoginScreen = (props: props) => {
  const [userName, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const input1_ref: any = createRef();
  const input2_ref: any = createRef();

  const [moduleAdditionError, setModuleAdditionError] =
    useState(errorInitialData);

  const isValidate = () => {
    try {
      const accountInfoSchema = Yup.object().shape({
        password: Yup.string()
          .nullable()
          .required(constants.string.password_error),
        userName: Yup.string()
          .nullable()
          .required(constants.string.userName_error),
      });
      accountInfoSchema.validateSync({
        userName: userName,
        password: password,
      });
      return true;
    } catch (err: any) {
      setModuleAdditionError({
        ...errorInitialData,
        [err.path]: err.message,
      });
      return false;
    }
  };

  const handleSubmit = () => {
    if (isValidate()) {
      Router.resetNew(props.navigation, 'DrawerNavigation', {});
      CommonFunction.isToast('success', 'Successfully Login');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#FFFFFF"
        animated={true}
        barStyle="dark-content"
      />
      <View>
        <View>
          <Text style={styles.loginTxt}>{constants.string.login}</Text>
        </View>
        <CustomInputBox
          ref={input1_ref}
          title={constants.string.userName}
          onChangeText={(val: any) => {
            setModuleAdditionError({
              ...errorInitialData,
              userName: '',
            });
            setUserName(val);
          }}
          placeholder={`Enter ${constants.string.userName}`}
          autoCapitalize={'none'}
          value={userName}
          returnKeyType={'next'}
          hasError={moduleAdditionError.userName}
          isDefault={true}
          majorContainer={{marginTop: constants.vh(15)}}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            input2_ref.current.focus();
          }}
        />

        <CustomInputBox
          ref={input2_ref}
          value={password}
          title={constants.string.password}
          majorContainer={{marginTop: constants.vh(10)}}
          onChangeText={(val: any) => {
            setpassword(val);
            setModuleAdditionError({
              ...errorInitialData,
              password: '',
            });
          }}
          autoCapitalize={'none'}
          returnKeyType={'done'}
          isDefault={true}
          placeholder={`Enter ${constants.string.password}`}
          secureTextEntry
          hasError={moduleAdditionError.password}
          onSubmitEditing={() => {
            Keyboard.dismiss();
            handleSubmit();
          }}
        />

        <CustomButton
          buttonText={constants.string.submit}
          contentContainerStyle={{marginTop: constants.vh(30)}}
          handleAction={() => {
            handleSubmit();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.colors.white,
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  loginTxt: {
    fontSize: constants.vw(20),
    color: constants.colors.black,
    letterSpacing: 0.3,
    fontWeight: 'bold',
    // textAlign:'center',
    alignSelf: 'center',
  },
});

export default LoginScreen;
