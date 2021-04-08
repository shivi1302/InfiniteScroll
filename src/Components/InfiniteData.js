import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import fontFamily from '../styles/fontFamily';
import ImageZoom from 'react-native-image-pan-zoom';

export default function InfiniteData(props) {
  let {profiles} = props;
  return (
    <View style={styles.container}>
      <ImageZoom
        cropWidth={Dimensions.get('window').width - 600}
        cropHeight={Dimensions.get('window').height - 500}
        imageWidth={120}
        imageHeight={120}>
        <Image
          source={{uri: profiles.profileImg[0].thumbnail}}
          style={styles.profileImage}></Image>
      </ImageZoom>
      <Text style={styles.text}>{profiles.fullName}</Text>
      <Text style={styles.text}>{profiles.gender}</Text>
      <Text style={styles.text}>{profiles.addressDetails.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: fontFamily.subTitles,
  },
  container: {
    margin: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
