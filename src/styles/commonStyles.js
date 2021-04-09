import {StyleSheet} from 'react-native';
import colors from './colors';
import fontFamily from './fontFamily';

import {
  textScale,
  moderateScale,
  moderateScaleVertical,
  verticalScale,
  scale,
} from './responsiveSize';

export default StyleSheet.create({

  heading:{
    fontFamily: fontFamily.mainfont,
    color: colors.themeColor,
    fontSize: textScale(25),
    textAlign: 'center',
    marginVertical:verticalScale(10),
  },
  button: {
    backgroundColor: colors.themeColor,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: scale(10),
    marginTop:verticalScale(10),
    marginBottom:verticalScale(40)
  },
  buttonText: {
    fontFamily: fontFamily.subTitles,
    textAlign: 'center',
    fontSize: 17,
    color: colors.white,
  },
    mediumFont14:{
        fontSize:textScale(14),
        color:colors.black,
        fontFamily:fontFamily.mainfont,
        opacity:.7
    
      },
      mediumFont14Normal:{
        fontSize:textScale(14),
        color:colors.black,
        fontFamily:fontFamily.mainfont,
        opacity:1
      },
      mediumFont16:{
        fontSize:textScale(14),
        color:colors.black,
        fontFamily:fontFamily.mainfont,
      },
      subTitleFont16:{
        fontSize:textScale(16),
        color:colors.black,
        fontFamily:fontFamily.subTitles
        
      },
      subTitleFont14:{
        fontSize:textScale(14),
        color:colors.black,
        fontFamily:fontFamily.subTitle
        
      },
      subTitleBt:{
        fontSize:textScale(16),
        color:colors.black,
        fontFamily:fontFamily.subTitle
      },
})