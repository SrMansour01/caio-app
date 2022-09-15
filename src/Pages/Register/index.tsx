import React from "react";
import { 
  SafeAreaView, 
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Back from "../../components/back";
import { Theme } from "../../global/theme";
import { Style } from "./style";

export default function Reg(){
  return(
    <SafeAreaView style={Style.Cont}>
      <View style={Style.v}>
        <Back/>
        <Text style={Style.txt}>REGISTRO</Text>
      </View>
      <View style={Style.v1}>
        <Image source={Theme.img.log} style={Style.img}/>
        <Text style={Style.txt1}>OBRIGADO POR ESCOLHER A <Text style={{color: Theme.colors.green100}}>4MJ</Text> PARA MAIS INFORMAÇÕES SOBRE O NOSSO PRODUTO ACESSE NOSSO SITE</Text>
        <TouchableOpacity style={Style.btn}>
          <Text style={Style.txt2}>Acessar o site</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
