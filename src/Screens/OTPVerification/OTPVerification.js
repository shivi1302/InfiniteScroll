import React,{Component} from 'react'
import {View,Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Loader from '../../Components/Loader'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../constants/navigationStrings'
import actions from '../../redux/actions'
// import { _OtpVerification } from '../../redux/actions/auth'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'

export default class OtpVerification extends Component{
  state={
    isLoading:false
}
 LoginUsingOTP=()=>{
    let{isLoading} =this.state
    actions._OtpVerification({
      "userId": this.props.route.params.data,
      "otp" : "12345",
      "deviceToken":"123",
      "registerFrom" : "ANDROID"
    }).then((res)=>{
      isLoading=true
      console.log(res)
      this.props.navigation.navigate(navigationStrings.HOMEPAGE
        )
    }).catch((error)=>{
      console.warn(error)
      isLoading=false
    })
    this.setState({isLoading:true});
   
  }
    render(){
      let{isLoading} = this.state
        return(
     <View style={{flex:1}}>
           <WrapperContainer>
             
             <Text style={styles.input}> OTP  VERIFICATION</Text>
             <Text style={styles.input2}>ENTER CODE TO VERIFY YOUR EMAIL AND PHONE NUMBER</Text>
             <View style={styles.txtInput}>
             <TextInput style={styles.input3} maxLength={1}/>
             <TextInput style={styles.input3}/>
             <TextInput style={styles.input3}/>
             <TextInput style={styles.input3}/>
             <TextInput style={styles.input3}/>
             </View>
             <View style={{marginTop:20}}>
             <TouchableOpacity onPress={this.LoginUsingOTP} style={styles.button}>
                 <Text style={{textAlign:'center',padding:4}}>Verify Account</Text>
             </TouchableOpacity>
             
             </View>
        
      </WrapperContainer>
      <Loader isLoading={isLoading}/>
     </View>
        )
    }
}

// Stylesheet
const styles=StyleSheet.create({
   
    input:{
        marginTop:30,
        textAlign:'center',
        fontSize:20,
        fontFamily:fontFamily.mainfont
    },
    button:{
      backgroundColor:colors.themeColor,
      padding:10,
      borderRadius:10,
      marginHorizontal:40,
      marginVertical:10
    },
    txtInput:
      {
        flexDirection:'row',
        marginTop:40,
        marginLeft:20,
        justifyContent:'space-between',
      },
    input3:{
      borderWidth:0.2,
      width:50,
      borderRadius:20,
      marginRight:14,
      textAlign:'center'
      
    },
    input2:{
      lineHeight:20,
      textAlign:'center',
      marginTop:20,
      fontFamily:fontFamily.subTitles
    }
      
})