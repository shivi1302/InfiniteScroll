import React, { Fragment } from "react";
import {} from "react-native"
import navigationStrings from "../constants/navigationStrings";
import { OneToOneChat } from "../Screens";
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
            component ={OneToOneChat}
            options ={{
                headerShown:false
            }}
            name={navigationStrings.ONE_TO_ONE_CHAT}
           />
        </Fragment>
    )
}

export default MainStack;