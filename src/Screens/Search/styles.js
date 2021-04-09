import {StyleSheet} from "react-native"
import colors from "../../styles/colors"
import { scale, verticalScale } from "../../styles/responsiveSize"
export default StyleSheet.create({
    textIN: {
        borderWidth: 0.2,
        marginHorizontal: scale(40),
        marginVertical: verticalScale(10),
        paddingHorizontal: 10,
        borderRadius: 10,
      },
      activity: {
        position: 'absolute',
        color: colors.themeColor,
        marginLeft: scale(250),
        marginTop: verticalScale(20),
      },
})