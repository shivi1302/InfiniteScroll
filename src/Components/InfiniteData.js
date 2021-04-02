import React from "react";
import {View,Image,StyleSheet, Text} from "react-native"
import fontFamily from "../styles/fontFamily";

export default function InfiniteData(props) {
    let{profiles} = props
    return(
        <View style={styles.container}>
                <Image source={{uri:profiles.profileImg[0].thumbnail}} style={styles.profileImage}></Image>
                <Text style={styles.text}>{profiles.fullName}</Text>
                <Text style={styles.text}>{profiles.gender}</Text>
                <Text style={styles.text}>{profiles.addressDetails.city}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileImage:{
        height:120,
        width:120,
        resizeMode:"contain",
        borderRadius:10,
        marginVertical:5,
        alignItems:"center"
    },
  text:{
      textAlign:"center",
      fontFamily:fontFamily.subTitles,
    
  },
  container:{
      margin:5,
      marginHorizontal:10,
      borderRadius:10,
      padding:20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  }
})