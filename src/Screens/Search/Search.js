import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import InfiniteData from '../../Components/InfiniteData';
import {search_Data} from '../../redux/actions/action';
import colors from '../../styles/colors';
import {ActivityIndicator} from 'react-native-paper';
import fontFamily from '../../styles/fontFamily';
import {locationPermission} from '../../utils/permissions';
import Geolocation from 'react-native-geolocation-service';
export default class Search extends Component {
  state = {
    search: '',
    searchData: [],
    isLoading: false,
  };

  apicall = (query) => {
    search_Data(query)
      .then(res => {
        this.setState({searchData: [...res.data], isLoading: false});
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangeText = val => {
    let {search} = this.state;
    this.setState({search: val});
    let query = `?name=${search}`
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
       
      this.setState({isLoading: true});
      this.apicall(query);
    }, 600);
  };

 


  findGeoLoaction = () => {
    let coordinates = [76.7794179, 30.7333148];
    coordinates = JSON.stringify(coordinates)
    let query = `?coordinates=${coordinates}`;
    this.apicall(query);
}




  render() {
    const {searchData, isLoading} = this.state;
    return (
      <View style={{paddingBottom: 170}}>
        <View style={{margin: 10}}>
          <TextInput
            placeholder="Search"
            onChangeText={this.onChangeText}
            style={styles.textIN}></TextInput>

          {isLoading ? <ActivityIndicator style={styles.activity} /> : null}
        </View>
        <TouchableOpacity style={styles.button} onPress={this.findGeoLoaction}>
          <Text style={styles.buttonText}>NEAR ME</Text>
        </TouchableOpacity>
        <FlatList
          data={searchData}
          renderItem={({item}) => <InfiniteData profiles={item}></InfiniteData>}
          keyExtractor={({key}) => key}
          numColumns={2}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.themeColor,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 50,
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: fontFamily.subTitles,
    textAlign: 'center',
    fontSize: 17,
    color: colors.white,
  },
  textIN: {
    borderWidth: 0.2,
    marginHorizontal: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  activity: {
    position: 'absolute',
    color: colors.themeColor,
    marginLeft: 250,
    marginTop: 25,
  },
});
