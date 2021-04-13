import React,{Component} from "react";
import {} from "react-native"
import FlashMessage from "react-native-flash-message";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import Routes from "./src/Navigation/Routes";
import { saveUserData } from "./src/redux/actions/auth";
import store from "./src/redux/store";
import { requestUserPermission } from "./src/utils/permissions";
import { getUserData, setUserData } from "./src/utils/utils";
const {dispatch}  = store
export default class App extends Component{

  componentDidMount=()=>{
    
    getUserData().then(res=>{
      console.log(res);
      saveUserData(res);
      SplashScreen.hide();
      // setTimeout(()=>SplashScreen.hide);
    })
  }


  render(){
    return(
      <Provider store={store}>
      <Routes />
      <FlashMessage position="bottom"/>
      </Provider>
    )
  }
}
