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

export default function Dados(){
  return(
    <SafeAreaView style={Style.Const}>
      <View style={Style.v}>
        <Image source={Theme.img.dado} style={Style.img}/>
        <Text style={Style.txt}>DADOS</Text>
      </View>
      <View style={Style.v1}>
        <View style={Style.v2}>
          <Text style={Style.txt1}>WIFI: <Text style={Style.txt2}>KORMAN</Text></Text>
          <Text style={Style.txt1}>PING: <Text style={Style.txt2}>42ms</Text></Text>
        </View>
        <Image source={Theme.img.wif} style={Style.img1}/>
      </View>
      <View style={Style.v3}>
        <View style={Style.v4}>
          <Text style={Style.txt3}>Consumo total</Text>
          <Text style={Style.txt4}>80W/mes</Text>
        </View>
        <View style={Style.v5}>
          <Text style={Style.txt3}>Consumo geral</Text>
          <Text style={Style.txt4}>10W/hrs</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
