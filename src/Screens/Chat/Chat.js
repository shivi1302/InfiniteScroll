import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import ChatComp from '../../Components/ChatComp';
import actions from '../../redux/actions';
import styles from './styles';

export default class Chat extends Component {
  state = {
    data: [],
    limit: 10,
    skip: 0,
    isLoading: true,
  };

  getData = query => {
    const {isLoading, data} = this.state;
    actions
      .getUserMessgeOneToOne(query)
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
    const {data} = this.state;
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
