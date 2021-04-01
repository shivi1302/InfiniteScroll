import React, { Fragment } from "react";
import {} from "react-native"
import navigationStrings from "../constants/navigationStrings";
import { Login, OTPVerification, SignUp } from "../Screens";


function AuthStack (Stack){
    return(
        <Fragment>
            <Stack.Screen
            component ={Login}
            options ={{
                headerShown:false
            }}
            name={navigationStrings.LOGIN}
           />
            <Stack.Screen
            component ={OTPVerification}
            options ={{
                headerShown:false
            }}
            name={navigationStrings.OTP_VERIFICATION}
           />
            <Stack.Screen
            component ={SignUp}
            options ={{
                headerShown:false
            }}
            name={navigationStrings.SIGNUP}
           />
        </Fragment>
    )
}

export default AuthStack;