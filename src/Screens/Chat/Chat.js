import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import ChatComp from '../../Components/ChatComp';
import Loader from '../../Components/Loader';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
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

  getChat=(commonConversationId,id)=>{
    let query =`?commonConversationId=${commonConversationId}`
    this.props.navigation.navigate(navigationStrings.ONE_TO_ONE_CHAT,{commonConversationId,id})
  }
  render() {
    const {data,isLoading} = this.state;
    return (
      <View>
        <Text style={styles.txt}>{strings.CHATS}</Text>
        <FlatList
          data={data}
          renderItem={({item}) => <ChatComp profiles={item} getChatScreen={this.getChat}></ChatComp>}
          keyExtractor={({key}) => key}
        />
        <Loader isLoading={isLoading}/>
      </View>
    );
  }
}
