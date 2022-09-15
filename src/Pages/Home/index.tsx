import { useNavigation } from "@react-navigation/native";
import React from "react";
import { 
  SafeAreaView, 
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from "react-native";

import { Theme } from "../../global/theme";
import { Style } from "./style";

import { Firebase } from "../../global/firebase";

export default function Home(){

  const nav = useNavigation();

  function luz(){
    nav.navigate('Luz')
  }

  function Sens(){
    nav.navigate('sens')
  }

  function des_luz(){
    Firebase.database().ref('/Leds/').set({
      led1: 0,
      led2: 0,
      led3: 0,
      led4: 0,
      led5: 0,
    })
  }

  function close(){
    Firebase.database().ref('/Seg/').set({
      porta: 0,
    })
  }

  return(
    <SafeAreaView style={Style.Const}>
      <View style={Style.v}>
        <Image source={Theme.img.home} style={Style.img}/>
        <Text style={Style.txt}>HOME</Text>
      </View>
      <View style={Style.v1}>
        <ScrollView style={Style.scroll} horizontal showsHorizontalScrollIndicator={false} >
          <TouchableOpacity style={Style.btn} onPress={close} >
            <Image source={Theme.img.tran} style={Style.img1}/>
            <Text style={Style.txt1}>Trancar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.btn} onPress={des_luz} >
            <Image source={Theme.img.lamp} style={Style.img1}/>
            <Text style={Style.txt1}>Desligar tudo</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={Style.v2}>
        <ScrollView style={Style.scrol1} showsVerticalScrollIndicator={false} >
          <TouchableOpacity style={Style.btn1} onPress={luz} >
            <Image style={Style.img2} source={Theme.img.lmapg}/>
            <View style={Style.v4} >
              <Text style={Style.txt2}>LUZES</Text>
              <Text style={Style.txt3}>5 dispositivos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Style.btn1} onPress={Sens} >
            <Image style={Style.img2} source={Theme.img.sens}/>
            <View style={Style.v4} >
              <Text style={Style.txt2}>SENSORES</Text>
              <Text style={Style.txt3}>2 dispositivos</Text>
            </View>
          </TouchableOpacity>
          <View style={Style.v3}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
