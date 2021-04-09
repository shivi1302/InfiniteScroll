import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Loader from '../../Components/Loader';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import commonStyles from '../../styles/commonStyles';
import styles from './styles';

export default class OtpVerification extends Component {
  state = {
    isLoading: false,
  };
  LoginUsingOTP = () => {
    let {isLoading} = this.state;
    actions
      ._OtpVerification({
        userId: this.props.route.params.data,
        otp: '12345',
        deviceToken: '123',
        registerFrom: 'ANDROID',
      })
      .then(res => {
        isLoading = true;
        console.log(res);
        this.props.navigation.navigate(navigationStrings.HOMEPAGE);
      })
      .catch(error => {
        console.warn(error);
        isLoading = false;
      });
    this.setState({isLoading: true});
  };
  render() {
    let {isLoading} = this.state;
    return (
      <View style={{flex: 1}}>
        <WrapperContainer>
          <Text style={commonStyles.heading}>{strings.OTP_VERIFICATION}</Text>
          <Text style={styles.input2}>
            ENTER CODE TO VERIFY YOUR EMAIL AND PHONE NUMBER
          </Text>
          <View style={styles.txtInput}>
            <TextInput style={styles.input3} maxLength={1} />
            <TextInput style={styles.input3} />
            <TextInput style={styles.input3} />
            <TextInput style={styles.input3} />
            <TextInput style={styles.input3} />
          </View>
          <View style={{marginTop: 20}}>
            <TouchableOpacity
              onPress={this.LoginUsingOTP}
              style={commonStyles.button}>
              <Text style={commonStyles.buttonText}>{strings.VERIFY_ACCOUNT}</Text>
            </TouchableOpacity>
          </View>
        </WrapperContainer>
        <Loader isLoading={isLoading} />
      </View>
    );
  }
}
