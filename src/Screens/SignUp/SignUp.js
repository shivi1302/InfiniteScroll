import React,{Component} from "react";
import { Text, View,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import { showMessage } from "react-native-flash-message";
import Loader from "../../Components/Loader";
import WrapperContainer from "../../Components/WrapperContainer";
import navigationStrings from "../../constants/navigationStrings";
import { loginUsingPhone } from "../../redux/actions/auth";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import validations from "../../utils/validations";

class SignUp extends Component{
    state={
        phone:"",
        name:"",
        Lname:"",
        isLoading:false
    }
    onChangeText(key) {
        return (value) => {
          this.setState({
            [key]: value,
          });
        };
      }
      isValidPhone=()=>{
        let{phone,name,Lname} = this.state
        const error = validations({
          phoneNumber : phone,
          firstName : name,
          lastName:Lname
        })
        if (error) {
          showMessage({
            type:'danger',
            icon:'danger',
            message:error,
          })
          return false;
        }
        return true;
      }
      loginUsingPhone =()=>{
        let{isLoading,phone}=this.state
        if (this.isValidPhone())
        {
            loginUsingPhone( {"contactDetails":{"phoneNo": phone,
             "countryCode": "+91",
             "countryCodeISO": "IN"}
           }).then((res)=>{
             isLoading=true,
             console.log(res)
             
             this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION,{data:res.data.userId})
           }).catch((error)=>{
             isLoading=false
           })
           this.setState({
             isLoading:true
           })
          }
         } 
    render(){
        let{isLoading}=this.state
        return(
            <View style={{flex:1}}>
                <WrapperContainer>
                <Text style={styles.mainText}>SignUp</Text>
        <TextInput
           placeholder="First Name"
           style={styles.placeHolders}
           onChangeText={this.onChangeText("name")}
           ></TextInput>
  <TextInput
           placeholder="Last Name"
           style={styles.placeHolders}
           onChangeText={this.onChangeText("Lname")}
           ></TextInput>
<TextInput
           placeholder="Mobile Number"
           style={styles.placeHolders}
           onChangeText={this.onChangeText("phone")}
           ></TextInput>

<TouchableOpacity style={styles.button} onPress={this.loginUsingPhone}>
     <Text style={styles.buttonText}>Login Using OTP</Text>
 </TouchableOpacity>
                </WrapperContainer>
                <Loader isLoading={isLoading}/>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    mainText: {
        fontSize: 20,
        margin: 20,
        fontFamily: fontFamily.subTitles,
        textAlign:'center'
      },
      placeHolders: {
        backgroundColor: colors.white,
        padding: 10,
        paddingLeft: 15,
        borderRadius: 10,
        margin: 10,
        color:colors.black
      },
      button:{
        backgroundColor:colors.themeColor,
        padding:10,
        borderRadius:10,
        marginHorizontal:40,
        marginVertical:10
      },
      buttonText:{
        fontFamily: fontFamily.subTitles,
        textAlign:'center',
        fontSize:17,
        color:colors.white
      }
})
export default SignUp;