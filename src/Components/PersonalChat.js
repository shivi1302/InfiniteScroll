import React from "react";
import { Text, View,StyleSheet,Image, TextInput} from "react-native";
import colors from "../styles/colors";
import fontFamily from "../styles/fontFamily";
export default function PersonalChat(props) {
    let item = props.route.params.data;
    return(
        <View>
            <View style={{flexDirection:"row",margin:10}}>
                <Image  style={styles.profile}
            source={{uri: item.userInfo.profileImg[0].thumbnail}}>

                </Image>
            <Text style={styles.text}>
                {item.userInfo.fullName}
            </Text>
            </View>
            
            <TextInput placeholder="Enter text">

            </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    text :{
        fontFamily:fontFamily.mainfont,
        textAlign:"center",
        marginVertical:10,
        fontSize:15,
        color:colors.themeColor
    },
    profile: {
        ...text,
      height: 60,
      width: 60,
      marginRight:10,
      borderRadius: 100,
      resizeMode: 'contain',
    },
})