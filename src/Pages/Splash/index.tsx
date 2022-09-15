import React, {useEffect} from "react";
import { 
  SafeAreaView, 
  Image,
  ActivityIndicator,
} from "react-native";

import { Theme } from "../../global/theme";
import { Style } from "./style";

import { Firebase } from "../../global/firebase";
import { useNavigation } from "@react-navigation/native";

export default function Splash(){

  const nav = useNavigation();

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        nav.navigate('Tab')
      } else {
        nav.navigate('Scre')
      }
    })
  }, [])

  return(
    <SafeAreaView style={Style.Const}>
      <Image source={Theme.img.log} style={Style.img}/>
      <ActivityIndicator color={Theme.colors.green100} size="large" />
    </SafeAreaView>
  )
}
