import React,{Component} from "react";
import {Text, View,StyleSheet,TouchableOpacity, ScrollView,Linking}  from "react-native";
import QRCode  from "react-native-qrcode-svg"
import QRCodeScanner  from "react-native-qrcode-scanner";
import {RNCamera} from "react-native-camera"
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
 export default class QRCodes extends Component{
    onSuccess = e => {
       alert("QR CODE SCANNED SUCCESFULY")
      };
     render(){
        let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
         return(
            <ScrollView>
                <Text style={styles.text}> SCAN ME</Text>
             <View style={styles.qr}>
                <QRCode 
                  value="SHIVI"
                  logo={{uri: base64Logo}}
                  logoBackgroundColor='transparent'
                />
             </View>
             <Text style={styles.text}></Text>
             <View style={styles.qr1}>
             
             <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        bottomContent={
          <TouchableOpacity>
            <Text style={styles.text}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
             </View>
            </ScrollView>
         )
     }
 }
 const styles= StyleSheet.create({
     qr:{
         marginVertical:20,
         alignItems:"center"
     },
     text:{
        color:colors.themeColor,
        fontFamily:fontFamily.mainfont,
        fontSize:25,
        marginVertical:10,
        textAlign:"center"
     },
     qr1:{
        marginTop:60
    },
 })