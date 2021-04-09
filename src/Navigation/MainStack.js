import React, { Fragment } from "react";
import {} from "react-native"
import PersonalChat from "../Components/PersonalChat";
import navigationStrings from "../constants/navigationStrings";
import MyDrawer from "./DrawerRoutes";
function MainStack (Stack){
    return(
        <Fragment>
            <Stack.Screen
            component ={MyDrawer}
            options ={{
                headerShown:false
            }}
            name={navigationStrings.HOMEPAGE}
           />
           <Stack.Screen
            component ={PersonalChat}
            options ={{
                headerShown:false
            }}
            name={navigationStrings.PERSONALCHAT}
           />
        </Fragment>
    )
}

export default MainStack;