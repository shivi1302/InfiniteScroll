import store from '../store';
import {setUserData, apiPost, apiGet, clearUserData} from '../../utils/utils';
import types from "../types"
import { CONVERSATION_API, INFINITE_SCROLL, SEARCH_API } from '../../config/urls';

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
 export function search_Data(query){
        let searchUrl = `${SEARCH_API}` + query
       return apiGet(searchUrl)
      }

export function getUserMessgeOneToOne ( query ) { 
        return apiGet ( `${CONVERSATION_API}${query}`); 
    }