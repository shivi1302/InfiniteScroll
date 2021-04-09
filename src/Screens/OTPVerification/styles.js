import {StyleSheet} from 'react-native';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {scale, verticalScale} from '../../styles/responsiveSize';
export default StyleSheet.create({
  input: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    ...commonStyles.mediumFont14,
    fontFamily: fontFamily.mainfont,
  },
  txtInput: {
    flexDirection: 'row',
    marginTop: verticalScale(40),
    marginLeft: scale(20),
    justifyContent: 'space-between',
  },
  input3: {
    borderWidth: 0.2,
    width: scale(50),
    borderRadius: 20,
    marginRight: 14,
    textAlign: 'center',
  },
  input2: {
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: fontFamily.subTitles,
  },
});
