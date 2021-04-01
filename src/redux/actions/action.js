import store from '../store';
import {setUserData, apiPost, apiGet, clearUserData} from '../../utils/utils';
import types from "../types"
import { INFINITE_SCROLL, SEARCH_API } from '../../config/urls';

const {dispatch} = store;
export const infinite_Scroll=(data)=>{
    return new Promise((resolve,reject)=>{
        apiPost(INFINITE_SCROLL,data)
        .then((res)=>{
            resolve(res);
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

export const search_Data=(data)=>{
    return new Promise ((resolve,reject)=>{
        apiGet(SEARCH_API,data).then((res)=>{
            console.log(res)
            resolve(res);
        }).catch((error)=>{
            reject(error)
        })
    })
}