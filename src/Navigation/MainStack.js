import React, { Fragment } from "react";
import {} from "react-native"
import navigationStrings from "../constants/navigationStrings";
import { HomePage, Login} from "../Screens";
import BottomTabNavigator from "./TabRoutes";
function MainStack (Stack){
    return(
        <Fragment>
            <Stack.Screen
            component ={BottomTabNavigator}
            options ={{
                headerShown:false
            }}
            name={navigationStrings.HOMEPAGE}
           />
           
        </Fragment>
    )
}

export default MainStack;