import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ActionSheetIOS,
  TextInput,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import InfiniteData from '../../Components/InfiniteData';
import Loader from '../../Components/Loader';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import {infinite_Scroll, search_Data} from '../../redux/actions/action';
import {logoutUsingNumber} from '../../redux/actions/auth';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

const LIMIT = '10';
class HomePage extends Component {
  state = {
    skip: 0,
    profiles: [],
    isListEnd: false,
    isLoadingMore: false,
    isNoMoreData: false,
    refreshing: false,
    isLoading: true,
    search: '',
  };

  componentDidMount = () => {
    this.getData();
  };

  onChangeText(key) {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }

  
  getData = (onEndReachCall = false) => {
    const {skip, profiles, isListEnd} = this.state;

    let calcSkip = onEndReachCall ? skip + profiles.length : 0;

    let data = {
      searchType: 'LEADERBOARD',
      limit: LIMIT,
      skip: calcSkip.toString(),
    };
    console.log(data);
    // console.log(header);
    infinite_Scroll(data)
      .then(res => {
        // console.log('this is the response: ', res);
        let updatedStateVar = {};
        if (res.data.length > 0) {
          let profilesData = onEndReachCall
            ? [...profiles, ...res.data]
            : res.data;

          updatedStateVar = {
            profiles: profilesData,
          };
        } else {
          updatedStateVar = {
            isListEnd: true,
            isNoMoreData: true,
          };
        }

        this.setState({
          ...updatedStateVar,
          isLoading: false,
          isLoadingMore: false,
          refreshing: false,
        });
      })
      .catch(err => {
        // console.log('this is the error: ', err);
        this.setState({isLoading: false, isLoadingMore: false});
      });
  };

  _onRefresh = () => {
    this.setState({refreshing: true, isNoMoreData: false});
    this.getData();
  };

  onEndReached = () => {
    const {isLoadingMore, isNoMoreData} = this.state;

    if (isLoadingMore || isNoMoreData) {
      return;
    }
    this.setState({isLoadingMore: true});
    this.getData(true);
  };

  renderFooter = () => {
    const {isLoadingMore} = this.state;
    if (isLoadingMore) {
      return (
        <View style={{paddingBottom: 80}}>
          <ActivityIndicator color={colors.themeColor} />
        </View>
      );
    }
    return <View style={{height: 50}} />;
  };

  logout() {
    logoutUsingNumber();
    showMessage({
      type: 'success',
      icon: 'success',
      message: "Logged Out Succesfully",
    });
    // this.props.navigation.navigate(navigationStrings.LOGIN);
  }

  render() {
    let {profiles, refreshing, isLoading} = this.state;
    return (
      <WrapperContainer>
        <View style={{paddingBottom: 280}}>
          <Text
            style={{
              fontFamily: fontFamily.mainfont,
              color: colors.themeColor,
              fontSize: 25,
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Details
          </Text>
          <TextInput
            placeholder="Search"
            onChangeText={this.onChangeText('search')}
            style={styles.textIN}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={
              this.logout
            }>
            <Text style={styles.buttonText}>LOGOUT</Text>
          </TouchableOpacity>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this._onRefresh}
              />
            }
            data={profiles}
            renderItem={({item}) => (
              <InfiniteData profiles={item}></InfiniteData>
            )}
            keyExtractor={({key}) => key}
            numColumns={2}
            onEndReached={this.onEndReached}
            ListFooterComponent={this.renderFooter}
            onEndReachedThreshold={0.8}
          />
        </View>
      </WrapperContainer>
    );
  }
}
const styles = StyleSheet.create({
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
  textIN: {
    borderWidth: 0.2,
    marginHorizontal: 50,
    padding: 10,
    borderRadius: 10,
  },
});
export default HomePage;
