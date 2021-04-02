import React,{Component} from "react";
import {View,Text, TextInput,StyleSheet,TouchableOpacity} from "react-native";
export default class Search extends Component{
    state={
        search: '',
    isSearch: false,
    searchData: [],
    }
    onChangeText(key) {
        return value => {
          this.setState({
            [key]: value,
          });
        };
      }
    
      apicall = () => {
        const {search, searchData, isSearch} = this.state;
        search_Data(search)
          .then(res => {
            console.log(res.data, 'search');
            this.setState({searchData: [...res.data], isSearch: true});
          })
          .catch(err => {
            console.log(err);
          });
      };
    
    render(){
        return(
            <View>
                   
            <TextInput
              placeholder="Search"
              onChangeText={this.onChangeText('search')}
              style={styles.textIN}
            />

          </View>
        )
    }
}
const styles = StyleSheet.create({
   
    textIN: {
      borderWidth: 0.2,
      margin: 40,
      paddingHorizontal:10,
      borderRadius: 10,
    },
  });