import React, {Component} from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';
import ChatComp from '../../Components/ChatComp';
import InfiniteData from '../../Components/InfiniteData';
import {getUserMessgeOneToOne} from '../../redux/actions/action';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

export default class Chat extends Component {
  state = {
    data: [],
    limit: 10,
    skip: 0,
    isLoading: true,
  };

  getData = query => {
    const {isLoading, data} = this.state;
    getUserMessgeOneToOne(query)
      .then(res => {
        console.log(res);
        this.setState({data: res.data, isLoading: false});
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    const {limit, skip} = this.state;
    let query = `?limit= ${limit} &skip=${skip}`;
    this.getData(query);
  };

  render() {
      const {data} = this.state
    return (
      <View>
        <Text style={styles.txt}>CHATS</Text>
        <FlatList
          data={data}
          renderItem={({item}) => <ChatComp profiles={item}></ChatComp>}
          keyExtractor={({key}) => key}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily:fontFamily.mainfont,
    marginVertical:15,
    color:colors.themeColor
  },
});
