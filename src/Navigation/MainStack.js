import React, { Fragment } from "react";
import {} from "react-native"
import navigationStrings from "../constants/navigationStrings";
import { HomePage} from "../Screens";
function MainStack (Stack){
    return(
        <Fragment>
            <Stack.Screen
            component ={HomePage}
            options ={{
                headerShown:false
            }}
            name={navigationStrings.HOMEPAGE}
           />
           
        </Fragment>
    )
}

export default MainStack;