import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
export default function ChatComp(props) {
  let {profiles} = props;
  return (
    <TouchableOpacity>
      <View style={styles.mainContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.profile}
            source={{uri: profiles.userInfo.profileImg[0].thumbnail}}></Image>

          <View style={{flexDirection: 'column'}}>
            <Text style={styles.text}>{profiles.userInfo.fullName}</Text>
           <View style={{flexDirection:'row'}}>
           <Image
            style={{height:15,width:15,marginTop:8,marginLeft:15}}
            source={
              profiles.lastMessage[0].isRead ? imagePath.read : imagePath.notRead
            }></Image>
           <Text style={styles.chat}>{profiles.lastMessage[0].text}</Text>
           
           </View>
          </View>
          <Image
            style={styles.online}
            source={
              profiles.userInfo.isOnline ? imagePath.online : imagePath.offline
            }></Image>
        </View>
        {/* <Image style={styles.delete} source={imagePath.delete}/> */}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.lineColor,
    margin: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: 340,
  },
  text: {
    fontFamily: fontFamily.subTitles,
    color: colors.themeColor,
    fontSize: 15,
    marginLeft: 15,
    marginTop: 5,
    marginRight: 20,
  },
  online: {
    height: 10,
    width: 10,
    marginLeft: 'auto',
    marginTop: 10,
  },
  profile: {
    height: 60,
    width: 60,
    marginRight:10,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  chat: {
    fontSize: 15,
    marginLeft: 5,
    marginTop: 5,
    marginRight: 20,
    color: colors.black,
  },
  delete:{
    height:20,
    width:20,
    marginLeft: 'auto',
    marginTop:-10
  }
});
