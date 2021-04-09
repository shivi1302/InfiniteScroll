import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import Loader from '../../Components/Loader';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import validations from '../../utils/validations';

class Login extends Component {
  state = {
    phone: '',
    isLoading: false,
  };
  onChangeText(key) {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }
  isValidPhone = () => {
    let {phone} = this.state;
    const error = validations({
      phoneNumber: phone,
    });
    if (error) {
      showMessage({
        type: 'danger',
        icon: 'danger',
        message: error,
      });
      return false;
    }
    return true;
  };

  loginUsingPhone = () => {
    let {isLoading, phone} = this.state;
    if (this.isValidPhone()) {
      actions.loginUsingPhone({
        contactDetails: {
          phoneNo: phone,
          countryCode: '+91',
          countryCodeISO: 'IN',
        },
      })
        .then(res => {
          (isLoading = true), console.log(res);

          this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION, {
            data: res.data.userId,
          });
        })
        .catch(error => {
          isLoading = false;
        });
      this.setState({
        isLoading: true,
      });
    }
  };
  render() {
    let {isLoading} = this.state;
    return (
      <View style={{flex: 1}}>
        <WrapperContainer>
          <View>
            <Text style={styles.mainText}>Enter Mobile Number</Text>
            <TextInput
              placeholder="Mobile Number"
              style={styles.placeHolders}
              onChangeText={this.onChangeText('phone')}></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={this.loginUsingPhone}>
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
            <Text style={{textAlign: 'center', marginTop: 20}}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(navigationStrings.SIGNUP);
              }}>
              <Text style={{color: colors.themeColor, textAlign: 'center'}}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </WrapperContainer>
        <Loader isLoading={isLoading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  navBar: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  mainText: {
    fontSize: 20,
    margin: 20,
    fontFamily: fontFamily.subTitles,
    textAlign: 'center',
  },
  placeHolders: {
    backgroundColor: colors.white,
    padding: 10,
    paddingLeft: 15,
    borderRadius: 10,
    margin: 10,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.themeColor,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 40,
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: fontFamily.subTitles,
    textAlign: 'center',
    fontSize: 17,
    color: colors.white,
  },
});

export default Login;
