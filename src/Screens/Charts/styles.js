import {StyleSheet} from 'react-native';
import {scale,verticalScale} from '../../styles/responsiveSize';

export default StyleSheet.create({
  bargraph: {
    height: verticalScale(300),
    width: scale(300),
    marginHorizontal: scale(30),
  },
});
