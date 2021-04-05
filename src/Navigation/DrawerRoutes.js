import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import {Charts, HomePage, Search} from '../Screens';
import BottomTabNavigator from './TabRoutes';
import colors from "../styles/colors";
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerType="slide"  drawerStyle={{
        backgroundColor: colors.white,
        width: 240,
      }}>
          <Drawer.Screen name={navigationStrings.HOMEPAGE} component={BottomTabNavigator} />
      <Drawer.Screen name={navigationStrings.SEARCH} component={Search} />
      <Drawer.Screen name={navigationStrings.CHARTS} component={Charts} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
