import React from "react";
import {Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import navigationStrings from "../constants/navigationStrings";
import colors from "../styles/colors";
import { HomePage, Search } from "../Screens";
import imagePath from "../constants/imagePath";
const Tab = createBottomTabNavigator()
export default function BottomTabNavigator(){
    return(
        <Tab.Navigator
        initialRouteName={navigationStrings.HOMEPAGE}
        activeColor= {colors.themeColor}
        barStyle={{
            backgroundColor:colors.white
        }}
        >
            <Tab.Screen
                name={navigationStrings.HOMEPAGE}
                component={HomePage}
                options={{tabBarLabel:"Home",
                tabBarIcon:({tintColor})=>{
                    return<Image style={{height:20,width:20}} source={imagePath.home}/>
                }
            }}
            />
              <Tab.Screen
                name={navigationStrings.SEARCH}
                component={Search}
                options={{tabBarLabel:"Search",
                tabBarIcon:({tintColor})=>{
                    return<Image  style={{height:20,width:20}} source={imagePath.search}/>
                }
            }}
            />
        </Tab.Navigator>
    )
}