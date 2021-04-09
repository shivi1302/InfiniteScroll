import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import InfiniteData from '../../Components/InfiniteData';
import {search_Data} from '../../redux/actions/action';
import {ActivityIndicator} from 'react-native-paper';
import styles from './styles';
import commonStyles from '../../styles/commonStyles';
import {scale} from '../../styles/responsiveSize';
export default class Search extends Component {
  state = {
    search: '',
    searchData: [],
    isLoading: false,
  };

  apicall = query => {
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
    let query = `?name=${search}`;
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
    coordinates = JSON.stringify(coordinates);
    let query = `?coordinates=${coordinates}`;
    this.setState({isLoading: true});
    this.apicall(query);
  };

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
        <TouchableOpacity
          style={{
            ...commonStyles.button,
            width: scale(300),
            marginHorizontal: 35,
          }}
          onPress={this.findGeoLoaction}>
          <Text style={commonStyles.buttonText}>NEAR ME</Text>
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
