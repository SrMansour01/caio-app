import React, {useState} from "react";
import { 
  SafeAreaView, 
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import InputScrollView from "react-native-input-scroll-view";

import { Style } from "./style";
import Back from "../../components/back";
import { Theme } from "../../global/theme";

import { useNavigation } from "@react-navigation/native";
import { Firebase } from "../../global/firebase";

export default function Log(){

  const nav = useNavigation();


  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')

  const [mmodal, setMModal] = useState(false)
  const [pmodal, setPModal] = useState(false)

  const [errir, setError] = useState('')
  const [load, setLoad] = useState(false)

  function enter(){
    setLoad(true)
    if (!mail || !pass){
      setMModal(!mmodal)
      setLoad(false)
    } else {
      Firebase.auth().signInWithEmailAndPassword(mail, pass)
      .then(() => {
        nav.navigate('Tab')
        setLoad(false)
      })
      .catch((error) => {
        var errorCode = error.code
        setError(errorCode)
        setPModal(!pmodal)
        setLoad(false)
      })
    }
  }

  function register(){
    nav.navigate('Reg')
  }

  const Load = () => {
    if (load == true){
      return <ActivityIndicator style={{position: 'absolute', marginLeft: '20%'}} size="small" />
    } else {
      return <Text style={Style.txt1}>ENTRAR</Text>
    }
  }

  return(
      <InputScrollView style={Style.Cont}>

        <Modal animationType="fade" visible={mmodal} transparent>
          <View style={Style.vM}>
            <View style={Style.vm1}>
              <Text style={Style.txt4}>campo de email ou senha esta vazio ou esta incorreto</Text>
              <TouchableOpacity style={Style.btn2} onPress={() => setMModal(!mmodal)} >
                <Text style={Style.txt5}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal animationType="fade" visible={pmodal} transparent>
          <View style={Style.vM}>
            <View style={Style.vm1}>
              <Text style={Style.txt4}>{errir}</Text>
              <TouchableOpacity style={Style.btn2} onPress={() => setPModal(!pmodal)} >
                <Text style={Style.txt5}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={Style.v}>
          <Back/>
          <Text style={Style.txt}>LOGIN</Text>
        </View>
        <View style={Style.v1}>
          <View style={Style.v2}>
            <View style={Style.input}>
              <Image source={Theme.img.mail} style={Style.img} />
              <TextInput 
              style={{color: 'white', opacity: 0.8, marginTop: '3%'}} 
              placeholder="email" placeholderTextColor="white" 
              onChangeText={(mail) => setMail(mail) } value={mail}
              />
            </View>
            <View style={Style.input}>
              <Image source={Theme.img.pass} style={Style.img} />
              <TextInput 
              style={{color: 'white', opacity: 0.8, marginTop: '3%'}} 
              placeholder="senha" placeholderTextColor="white" secureTextEntry 
              onChangeText={(pass) => setPass(pass) } value={pass}
              />
            </View>
          </View>
        </View>
        <View style={Style.v1}>
          <TouchableOpacity style={Style.btn} onPress={enter} disabled={load} >
              <Load/>
          </TouchableOpacity>
          <TouchableOpacity style={Style.btn1} onPress={register} >
            <Text style={Style.txt2}>ainda não tenho conta  <Text style={Style.txt3}>criar conta</Text></Text>
          </TouchableOpacity>
        </View>
      </InputScrollView>
  )
}
