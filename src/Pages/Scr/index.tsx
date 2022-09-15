import { useNavigation } from "@react-navigation/native";
import React from "react";
import { 
  SafeAreaView, 
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Theme } from "../../global/theme";
import { Style } from "./style";

export default function Scre(){

  const nav = useNavigation();

  function register(){
    nav.navigate('Reg')
  }

  function Login()
  {
    nav.navigate('Log')
  }

  function Them(){}

  return(
    <SafeAreaView style={Style.Cont}>
      <Image source={Theme.img.log} style={Style.img}/>
      <View style={Style.v}>
        <TouchableOpacity style={Style.btn} onPress={register} >
          <Text style={Style.txt}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.btn} onPress={Login} >
          <Text style={Style.txt}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.btn1} onPress={Them} >
          <Text style={Style.txt1}>Trocar de tema   <Text style={Style.txt2}>ESCURO</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
