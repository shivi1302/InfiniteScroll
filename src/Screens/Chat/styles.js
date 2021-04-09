import {StyleSheet} from "react-native"
import colors from "../../styles/colors"
import commonStyles from "../../styles/commonStyles"
import fontFamily from "../../styles/fontFamily"
import { textScale, verticalScale } from "../../styles/responsiveSize"
export default StyleSheet.create({
    txt: {
        ...commonStyles.mediumFont16,
        fontSize: textScale(25),
        textAlign: 'center',
        color:colors.themeColor,
        marginTop:verticalScale(10)
      },
})