import {NavigationContainer} from "@react-navigation/native"
import React,{Fragment} from "react";
import AuthStack from "./AuthStack";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./MainStack";
import { connect } from "react-redux";
import reducer from "../redux/reducers/reducer";


const Stack = createStackNavigator();
Stack.Screen
function Routes (props){
    // console.log(props, "@@@@@@")
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
                { !(props.userData) && AuthStack(Stack)}
                {MainStack(Stack)}
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}
mapStateToProps=state=>{
    return{
        userData :state.userData
    }
}
export default connect(mapStateToProps)(Routes) ;