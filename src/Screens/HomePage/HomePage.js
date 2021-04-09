import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import InfiniteData from '../../Components/InfiniteData';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

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
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = (onEndReachCall = false) => {
    const {skip, profiles, isListEnd, isSearch} = this.state;

    let calcSkip = onEndReachCall ? skip + profiles.length : 0;

    let data = {
      searchType: 'LEADERBOARD',
      limit: LIMIT,
      skip: calcSkip.toString(),
    };
    console.log(data);
    // console.log(header);
    actions
      .infinite_Scroll(data)
      .then(res => {
        console.log('this is the response: ', res);
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
          isSearch: false,
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
    actions.logoutUsingNumber();
    showMessage({
      type: 'success',
      icon: 'success',
      message: 'Logged Out Succesfully',
    });
    // this.props.navigation.navigate(navigationStrings.LOGIN);
  }

  render() {
    let {profiles, refreshing, isLoading, isSearch, searchData} = this.state;
    return (
      <WrapperContainer>
        <View style={{paddingBottom: 280}}>
          <Text style={commonStyles.heading}>Details</Text>

          <TouchableOpacity style={commonStyles.button} onPress={this.logout}>
            <Text style={commonStyles.buttonText}>LOGOUT</Text>
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

export default HomePage;
