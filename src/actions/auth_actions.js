import {AsyncStorage} from 'react-native';
import {LOGIN_SUCCESS} from './types';

import {REACT_APP_TRADA} from '../config/constants';
const API = REACT_APP_TRADA + 'users/';

export const loginDetails = () => async (dispatch) => {
  let token = await AsyncStorage.getItem('login_token');
  if (token) {
    // Dispatch an action
    dispatch({type: LOGIN_SUCCESS, payload: token});
  } else {
    // start login process
    loginUser();
  }
};

const loginUser = async () => {
  let result = (await API) + 'login';
};
