
import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {connect} from 'react-redux';
import imagePath from '../../constants/imagePath';
import socketStrings from '../../constants/socketStrings';
import actions from '../../redux/actions';
import commonStyles from '../../styles/commonStyles';
import socketServices from '../../utils/socketServices';


class OneToOneChat extends Component{

    state = {
        messages: [],
      };
    
      componentDidMount() {
        let {userData} = this.props;
        socketServices.initializeSocket(userData.accessToken);
        setTimeout(() => {
          this.getChatListing();
          socketServices.on(socketStrings.RECEIVED_MESSAGE, this.onReceiveMessage);
        });
      }
    
      onSend(messages = []) {
        // alert(JSON.stringify(socketServices.emit));
    
        if (String(messages[0].text).trim().length < 1) {
          return;
        }
        const {id, commonConversationId} = this.props.route.params;
        const {userData} = this.props;
    
        socketServices.emit(socketStrings.SEND_MESSAGE, {
          senderId: userData._id,
          recieverId: id,
          commonConversationId,
          messageType: 'Text',
          text: messages[0].text,
        });
        console.log(messages);
        this.setState(previousState => {
          return {
            messages: GiftedChat.append(previousState.messages, messages),
          };
        });
      }
      componentWillUnmount() {
        socketServices.removeListener(socketStrings.ACKNOWLEDGED_SENT_BY_RECEIVER);
        socketServices.removeListener(socketStrings.RECEIVED_MESSAGE);
      }
    
      getChatListing = () => {
        const {commonConversationId, id} = this.props.route.params;
    
        actions
          .getChat(
            `?commonConversationId=${commonConversationId}&limit=100`,
          )
          .then(res => {
            // const {profileImg} = this.props.route.params;
            // console.log(profileImg, 'THIS IS PROFILE');
    
            //To send back response that all the messages have been seen;
            // socketServices.emit(SOCKET_STRINGS.SEEN_ALL_MESSAGES, {
            //   senderId: id,
            //   isRead: true,
            //   recieverId: (this.props.userData && this.props.userData._id) || '',
            // });
            //Initalizing the chat history
    
            const messages = res.data.map((data, index) => {
              let message = {
                _id: data._id,
                text: data.text,
                createdAt: data.createdAt,
                user: {
                  _id: data.senderId?._id,
                  // name: data.senderId.firstName,
                  // avatar: profileImg && profileImg[0].thumbnail,
                },
              };
              if (!!data.repliedToText) {
                message.replyText = data.repliedToText;
              }
              return message;
            });
            this.setState({isLoading: false, messages});
          })
          .catch(error => {
            console.log(error);
          });
      };
    
      onReceiveMessage = data => {
        const {commonConversationId} = this.props.route.params;
        const message = {
          _id: data._id,
          text: data.text,
          createdAt: data.createdAt,
          user: {
            _id: data.senderId,
            // name: firstName,
            // avatar: profileImg && profileImg[0].thumbnail,
          },
        };
        // console.log(data,"----------data")
        // console.log(commonConversationId,'the commonejoijoj');
        //To make sure that all the messages are seen if new message comes
    
        if (data.commonConversationId === commonConversationId) {
          socketServices.emit(socketStrings.SEEN_ALL_MESSAGES, {
            senderId: data.senderId,
            isRead: true,
            recieverId: data.recieverId,
          });
    
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
          }));
        }
      };
    
      render() {
        const {messages} = this.state;
        const {userData} = this.props;
    
        console.log(messages, 'THIS IS MESSAGES');
        return (
          <>
            <View>
              <TouchableOpacity
                style={commonStyles.button}
                onPress={this.props.navigation.goBack}>
                  <Text>back</Text>
                {/* <Image source={imagePath.online} style={{height:10,width:10}}/> */}
              </TouchableOpacity>
              {/* <View>
                <Image source={imagePath.user} style={styles.profileImage} />
              </View> */}
              <Text >
                Name
              </Text>
            </View>
            <GiftedChat
              messages={messages}
              onSend={messages => this.onSend(messages)}
              user={{
                _id:userData._id,
              }}
            />
          </>
        );
      }
}
mapStateToProps=state=>{
    return{
        userData :state.userData
    }
}
  export default connect(mapStateToProps)(OneToOneChat);





