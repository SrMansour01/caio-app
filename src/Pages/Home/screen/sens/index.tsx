import React, {useState, useEffect} from "react";
import { 
  SafeAreaView, 
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import { Firebase } from "../../../../global/firebase";

import Back from "../../../../components/back";
import { Theme } from "../../../../global/theme";
import { Style } from "./style";

export default function Sens(){

  const [gs, setGS] = useState<number>()
  const [ft, setft] = useState<number>()

  useEffect(() => {
    Firebase.database().ref("/Sensores/").on("value", (value) => {
      const gas = value.val().gas
      const ft = value.val().foto

      setGS(gas)
      setft(ft)
    })
  })

  return(
    <SafeAreaView style={Style.Cont}>
      <View style={Style.v}>
        <Back/>
          <Text style={Style.txt}>SENSORES</Text>
      </View>
      <View style={Style.v1}>
        <ScrollView style={Style.scrol}>
          <View style={Style.v2}>
            <View style={Style.v3}/>
            <Image source={Theme.img.sens} style={Style.img}/>
            <View>
              <Text style={Style.txt1}>GAS</Text>
              <Text style={Style.txt2}>sensor</Text>
              <Text style={Style.txt3}>{gs}% - gases</Text>
            </View>
          </View>
          <View style={Style.v2}>
            <View style={Style.v3}/>
            <Image source={Theme.img.sens} style={Style.img}/>
            <View>
              <Text style={Style.txt1}>ILUMINAÇÂO</Text>
              <Text style={Style.txt2}>sensor</Text>
              <Text style={Style.txt3}>{ft}% - claridade</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
