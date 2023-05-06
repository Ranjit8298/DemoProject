import constants from '../constants';
import {Keyboard} from 'react-native';
import string from '../constants/strings';
import Toast from 'react-native-toast-message';

function isToast(type: any, textMsg: any) {
  try {
    Toast.show({
      type: type, //success or error
      text2: textMsg,
      autoHide: true,
    });
  } catch (error) {
    console.log(error);
  }
}

type ellipsizeMode = 'head' | 'middle' | 'tail' | 'clip';

const nFixedLines = (
  numberOfLines: number = 1,
  ellipsizeMode: ellipsizeMode = 'tail',
) => ({
  numberOfLines,
  ellipsizeMode,
});
function isNullUndefined(item: any, check: boolean = false) {
  try {
    let x =
      item === null ||
      item === undefined ||
      item === 'undef' ||
      item === 'undefined' ||
      item === '' ||
      Object.keys(item).length === 0;
    if (check) {
    }
    return x;
  } catch (err) {
    return true;
  }
}
function char_count(str: string, letter: string) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) === letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}
const convertNumber = (num: any) => {
  let res = Number(num).toFixed(2);
  return res;
};

export const containsMinLength = (val: string) => val.length >= 8;
export const containsMaxLength = (val: string) => val.length <= 15;
export const containsLowerCase = (val: string) => /[a-z]/.test(val);
export const containsUpperCase = (val: string) => /[A-Z]/.test(val);
export const containsNumber = (val: string) => /\d/.test(val);
export const containsSpecialChar = (val: string) => /[!@#$%^*()]/.test(val);
const getValFromString = (str: string) =>
  parseInt(str.replace(/[^\d.-]/g, ''), 10);

export default {
  nFixedLines,
  isNullUndefined,
  char_count,
  containsNumber,
  containsLowerCase,
  containsUpperCase,
  containsSpecialChar,
  containsMinLength,
  containsMaxLength,
  getValFromString,
  convertNumber,
  isToast,
};
