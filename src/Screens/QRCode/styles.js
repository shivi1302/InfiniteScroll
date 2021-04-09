import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../styles/responsiveSize';
export default StyleSheet.create({
  qr: {
    marginVertical: verticalScale(20),
    alignItems: 'center',
  },
  camera: {
    height: verticalScale(400),
    width: scale(250),
    marginHorizontal: 30,
  },
});
