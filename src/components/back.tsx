import { useNavigation } from "@react-navigation/native";
import React from "react";
import { 
  TouchableOpacity, 
  Image,
} from "react-native";
import { Theme } from "../global/theme";

export default function Back(){

  const nav = useNavigation();

  return(
    <TouchableOpacity onPress={() => nav.goBack()} style={{
      height: 60,
      width: 60,
      borderColor: Theme.colors.green,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      marginTop: '7%',
      marginLeft: '7%'
    }} >
      <Image source={Theme.img.back} style={{
        height: 25,
        width: 25
      }} />
    </TouchableOpacity>
  )
}
