import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import { 
  SafeAreaView, 
  View,
  Text,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  Modal,
} from "react-native";

import Back from "../../../../components/back";
import { Theme } from "../../../../global/theme";
import { Style } from "./style";

import { Firebase } from "../../../../global/firebase";

export default function Luz(){


  useEffect(() => {
    Firebase.database().ref("/Leds/").on('value', (value) => {
      const l1 = value.val().led1
      const l2 = value.val().led2
      const l3 = value.val().led3
      const l4 = value.val().led4
      const l5 = value.val().led5

      setl1(l1)
      setl2(l2)
      setl3(l3)
      setl4(l4)
      setl5(l5)
    })
    Firebase.database().ref("/ilu/").on('value', (value) => {
      const i = value.val().ilu
      setI(i)
    })
  },[])

  useEffect(() => {
    if (l1 == 0){
      setlN1('desligado')
    } else {
      setlN1('ligado')
    }
    if (l2 == 0){
      setlN2('desligado')
    } else {
      setlN2('ligado')
    }
    if (l3 == 0){
      setlN3('desligado')
    } else {
      setlN3('ligado')
    }
    if (l4 == 0){
      setlN4('desligado')
    } else {
      setlN4('ligado')
    }
    if (l5 == 0){
      setlN5('desligado')
    } else {
      setlN5('ligado')
    }
  })

  const [i, setI] = useState(false)
  
  function Swich(){
    if (i == false){
      setI(true)
    } else {
      setI(false)
    }
    data()
  }

  function data(){
    Firebase.database().ref("/Leds/").set({
      led1: l1,
      led2: l2,
      led3: l3,
      led4: l4,
      led5: l5,
    })
    Firebase.database().ref("/ilu/").set({
      ilu: i,
    })
  }

  const [l1, setl1] = useState<number>()
  const [l2, setl2] = useState<number>()
  const [l3, setl3] = useState<number>()
  const [l4, setl4] = useState<number>()
  const [l5, setl5] = useState<number>()

  const [lN1, setlN1] = useState<"ligado" | "desligado">()
  const [lN2, setlN2] = useState<"ligado" | "desligado">()
  const [lN3, setlN3] = useState<"ligado" | "desligado">()
  const [lN4, setlN4] = useState<"ligado" | "desligado">()
  const [lN5, setlN5] = useState<"ligado" | "desligado">()


  const nav = useNavigation()

  function Long_led1(){
    nav.navigate('led1')
  }
  function Long_led2(){
    nav.navigate('led2')
  }
  function Long_led3(){
    nav.navigate('led3')
  }
  function Long_led4(){
    nav.navigate('led4')
  }
  function Long_led5(){
    nav.navigate('led5')
  }

  function Handle_led1(){
    if (l1 == 0){
      Firebase.database().ref('/Leds/').update({
        led1: 100,
      })
    } else {
      Firebase.database().ref('/Leds/').update({
        led1: 0,
      })
    }
  }
  function Handle_led2(){
    if (l2 == 0){
      Firebase.database().ref('/Leds/').update({
        led2: 100,
      })
    } else {
      Firebase.database().ref('/Leds/').update({
        led2: 0,
      })
    }
  }
  function Handle_led3(){
    if (l3 == 0){
      Firebase.database().ref('/Leds/').update({
        led3: 100,
      })
    } else {
      Firebase.database().ref('/Leds/').update({
        led3: 0,
      })
    }
  }
  function Handle_led4(){
    if (l4 == 0){
      Firebase.database().ref('/Leds/').update({
        led4: 100,
      })
    } else {
      Firebase.database().ref('/Leds/').update({
        led4: 0,
      })
    }
  }
  function Handle_led5(){
    if (l5 == 0){
      Firebase.database().ref('/Leds/').update({
        led5: 100,
      })
    } else {
      Firebase.database().ref('/Leds/').update({
        led5: 0,
      })
    }
  }

  return(

    <SafeAreaView style={Style.Cont}>
      <View style={Style.v}>
        <Back/>
        <Text style={Style.txt}>LUZES</Text>
      </View>
      <View style={Style.v1}>
        <View style={Style.v3}>
          <ScrollView style={Style.scrol} showsVerticalScrollIndicator={false} >
            <View style={Style.v4}>
              <TouchableOpacity style={Style.btn} onLongPress={Long_led1} onPress={Handle_led1} >
                <Image source={Theme.img.lmapg} style={Style.img} />
                <Text style={Style.txt2}>Led1</Text>
                <Text style={Style.txt3}>{lN1}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.btn} onLongPress={Long_led2} onPress={Handle_led2} >
                <Image source={Theme.img.lmapg} style={Style.img} />
                <Text style={Style.txt2}>Led2</Text>
                <Text style={Style.txt3}>{lN2}</Text>
              </TouchableOpacity>
            </View>
            <View style={Style.v4}>
              <TouchableOpacity style={Style.btn} onLongPress={Long_led3} onPress={Handle_led3} >
                <Image source={Theme.img.lmapg} style={Style.img} />
                <Text style={Style.txt2}>Led3</Text>
                <Text style={Style.txt3}>{lN3}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.btn} onLongPress={Long_led4} onPress={Handle_led4} >
                <Image source={Theme.img.lmapg} style={Style.img} />
                <Text style={Style.txt2}>Led4</Text>
                <Text style={Style.txt3}>{lN4}</Text>
              </TouchableOpacity>
            </View>
            <View style={Style.v4}>
              <TouchableOpacity style={Style.btn} onLongPress={Long_led5} onPress={Handle_led5} >
                <Image source={Theme.img.lmapg} style={Style.img} />
                <Text style={Style.txt2}>Led5</Text>
                <Text style={Style.txt3}>{lN5}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}
