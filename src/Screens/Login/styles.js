import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {verticalScale} from '../../styles/responsiveSize';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  navBar: {
    flexDirection: 'row',
    marginBottom: verticalScale(30),
  },
  placeHolders: {
    backgroundColor: colors.white,
    padding: 10,
    paddingLeft: 15,
    borderRadius: 10,
    margin: 10,
    color: colors.black,
  },
});
