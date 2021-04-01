import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import colors from '../styles/colors';
const WrapperContainer = ({
  children,
  bgColor = colors.themeColor,
  statusBarColor = colors.themeColor,
  barStyle = 'light-content',
}) => {
  return (
    <SafeAreaView >
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
     
        {children}
     
    </SafeAreaView>
  );
};
export default WrapperContainer;
