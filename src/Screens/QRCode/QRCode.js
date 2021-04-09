import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from './styles';
import commonStyles from '../../styles/commonStyles';
import strings from '../../constants/lang';
export default class QRCodes extends Component {
  onSuccess = e => {
    alert('QR CODE SCANNED SUCCESFULY');
  };
  render() {
    let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
    return (
      <ScrollView>
        <Text style={commonStyles.heading}>{strings.SCAN_ME} </Text>
        <View style={styles.qr}>
          <QRCode
            value="SHIVI"
            logo={{uri: base64Logo}}
            logoBackgroundColor="transparent"
          />
        </View>
        <Text style={commonStyles.heading}>{strings.CAMERA}</Text>

        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          cameraStyle={styles.camera}
        />
      </ScrollView>
    );
  }
}
