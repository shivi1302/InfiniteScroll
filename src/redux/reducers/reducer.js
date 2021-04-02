import types from "../types";
const initialState ={
    userData:[]
}
export default function reducer(state=initialState, action) {
    let {userData} = state
    switch(action.type){
        case types.LOGIN:{
            return{
                ...state,
                userData : action.payload
            }
        }
       
        default:
        return{
            ...state
        }
    }
}