import store from '../store';
import {setUserData, apiPost, apiGet, clearUserData} from '../../utils/utils';
import types from "../types"
import {
  LOGIN_API,
  OTP_VERIFICATION_API,
  PHONE_API,
  SIGNUP_API
} from '../../config/urls';
// import { reject } from 'lodash';

const {dispatch} = store;

export const saveUserData = (data) => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

const saveViewData = (data) => {
  dispatch({
    type: types.SAVE_VIEW_DATA,
    payload: data,
  });
};
// export function login(data) {
//   saveUserData(data);
//   // setUserData(data)
// }

export const updateInternetConnection = (data) => {
  dispatch({
    type: types.NO_INTERNET,
    payload: data,
  });
};

export const login = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    apiPost(LOGIN_API, data)
      .then((res) => {
        saveUserData(res);
        setUserData(res).then((suc) => {
          resolve(res);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const signUp = (data) => {
  console.log(data, 'the geiv ndart');
  return new Promise((resolve, reject) => {
    apiPost(SIGNUP_API, data)
      .then((res) => {
        saveUserData(res.data);
        setUserData(res.data).then((suc) => {
          resolve(res);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const logoutUsingNumber=()=>{
  clearUserData();
  dispatch({
    type:types.LOGOUT,
    payload:undefined
  })
}


export const loginUsingPhone=(data)=>{
  return new Promise((resolve, reject)=>{
    apiPost(PHONE_API, data).then((res)=>{
    saveUserData(res.data)
    setUserData(res.data)
       resolve(res)
    }).catch((error)=>{
      reject(error)
    })
  })
}


export const _OtpVerification=(data)=>{
  return new Promise((resolve, reject)=>{
    apiPost(OTP_VERIFICATION_API, data).then((res)=>{
      setUserData(res.data)
      saveUserData(res.data)
      resolve(res);
    }).catch((error)=>{
      reject(error)
    })
  })
}


export const getViewData = (data) => {
  console.log(data, 'the geiv ndart');
  return new Promise((resolve, reject) => {
    apiPost(VIEW_DATA)
      .then((res) => {
        console.log(res, '@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------');
        saveViewData(res.data);
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};