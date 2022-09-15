import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { 
  SafeAreaView, 
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  Switch,
} from "react-native";

import { Theme } from "../../global/theme";
import { Style } from "./style";

import { Firebase } from "../../global/firebase";

export default function Settigns(){

  const nav = useNavigation();

  function deslog(){
    Firebase.auth().signOut().then(() => {
      nav.navigate('Scre')
    })
  }

  return(
    <SafeAreaView style={Style.Const}>
      <View style={Style.v}>
        <Image source={Theme.img.set} style={Style.img}/>
        <Text style={Style.txt}>configurações</Text>
      </View>
      <TouchableOpacity style={Style.btn} onPress={deslog} >
        <Image source={Theme.img.deslog} style={Style.img1}/>
        <Text style={Style.txt2}>SAIR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
