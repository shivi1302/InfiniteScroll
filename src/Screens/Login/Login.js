import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import Loader from '../../Components/Loader';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {verticalScale} from '../../styles/responsiveSize';
import validations from '../../utils/validations';
import styles from './styles';

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
      actions
        .loginUsingPhone({
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
            <Text
              style={{...commonStyles.heading, marginTop: verticalScale(30)}}>
              {strings.ENTER_MOBILE_NUMBER}
            </Text>
            <TextInput
              placeholder="Mobile Number"
              style={styles.placeHolders}
              onChangeText={this.onChangeText('phone')}></TextInput>
            <TouchableOpacity
              style={commonStyles.button}
              onPress={this.loginUsingPhone}>
              <Text style={commonStyles.buttonText}>{strings.START}</Text>
            </TouchableOpacity>
            <Text style={{textAlign: 'center', marginTop: 20}}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(navigationStrings.SIGNUP);
              }}>
              <Text style={{color: colors.themeColor, textAlign: 'center'}}>
                {strings.SIGNUP}
              </Text>
            </TouchableOpacity>
          </View>
        </WrapperContainer>
        <Loader isLoading={isLoading} />
      </View>
    );
  }
}
export default Login;
