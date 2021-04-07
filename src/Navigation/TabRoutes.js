import React from "react";
import {Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import navigationStrings from "../constants/navigationStrings";
import colors from "../styles/colors";
import { Charts, HomePage, QRCode, Search } from "../Screens";
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
                tabBarIcon:()=>{
                    return<Image style={{height:25,width:20}} source={imagePath.home}/>
                }
            }}
            />
              <Tab.Screen
                name={navigationStrings.SEARCH}
                component={Search}
                options={{tabBarLabel:"Search",
                tabBarIcon:()=>{
                    return<Image  style={{height:30,width:30}} source={imagePath.search}/>
                }
            }}
            />
            <Tab.Screen
                name={navigationStrings.CHARTS}
                component={Charts}
                options={{tabBarLabel:"Charts",
                tabBarIcon:()=>{
                    return<Image  style={{height:20,width:20}} source={imagePath.charts}/>
                }
            }}
            />
            <Tab.Screen
                name={navigationStrings.QRCODE}
                component={QRCode}
                options={{tabBarLabel:"QRCode",
                tabBarIcon:()=>{
                    return<Image  style={{height:25,width:20}} source={imagePath.qr}/>
                }
            }}
            />
        </Tab.Navigator>
    )
}