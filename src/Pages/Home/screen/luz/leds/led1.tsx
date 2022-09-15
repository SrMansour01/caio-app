import React, {useState, useEffect} from "react";
import { 
  SafeAreaView, 
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import Slider from "@react-native-community/slider";
import { Firebase } from "../../../../../global/firebase";

import Back from "../../../../../components/back";
import { Theme } from "../../../../../global/theme";
import { Style } from "./style";

export default function Led1(){

  const [l, setl] = useState<number>()
  const [ln, setln] = useState<'ligado' | 'desligado'>()

  useEffect(() => {
    Firebase.database().ref('/Leds/').on('value', (value) => {
      const l1 = value.val().Led1

      setl(l1)
    })
  },[])

  useEffect(() => {
    if (l == 0){
      setln('desligado')
    } else {
      setln('ligado')
    }
  })

  function salve(){
    Firebase.database().ref('/Leds/').update({
      led1: l,
    })
    if (l == 0){
      setln('desligado')
    } else {
      setln('ligado')
    }
  }

  return(
    <SafeAreaView style={Style.Cont}>
      <View style={Style.v}>
        <Back/>
      </View>
      <View style={Style.v1}>
        <View style={Style.v2}>
          <TouchableOpacity style={Style.btn}>
            <Image source={Theme.img.lmapg} style={Style.img} />
          </TouchableOpacity>
          <View style={Style.v3} >
            <Text style={Style.txt}>LED1</Text>
            <Text style={Style.txt1}>{ln}</Text>
          </View>
        </View>
        <View style={Style.v4}>
          <Text style={Style.txt3}>potencia do led</Text>
          <View style={Style.v5}>
            <Image source={Theme.img.ledP} style={Style.img1}/>
            <Text style={Style.txt4}>{l}%</Text>
            <Image source={Theme.img.ledA} style={Style.img1}/>
          </View>
          <Slider
            style={{width: '95%', height: '10%',marginHorizontal: '2.5%',}}
            maximumValue={100}
            minimumValue={0}
            maximumTrackTintColor={Theme.colors.green100}
            minimumTrackTintColor={Theme.colors.green}
            onValueChange={value => setl(parseInt(value))}
            value={.5}
          />
        </View>
        <TouchableOpacity style={Style.btn1} onPress={salve} >
          <Text style={Style.txt2}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
