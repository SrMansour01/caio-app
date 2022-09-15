import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "react-native";

import Splash from "./src/Pages/Splash";
import Scre from "./src/Pages/Scr";
import Log from "./src/Pages/Login";
import Reg from "./src/Pages/Register";

import Home from "./src/Pages/Home";
import Settigns from "./src/Pages/settign";
import Dados from "./src/Pages/dados";

import Luz from "./src/Pages/Home/screen/luz";
import Sens from "./src/Pages/Home/screen/sens";

import Led1 from "./src/Pages/Home/screen/luz/leds/led1";
import Led2 from "./src/Pages/Home/screen/luz/leds/led2";
import Led3 from "./src/Pages/Home/screen/luz/leds/led3";
import Led4 from "./src/Pages/Home/screen/luz/leds/led4";
import Led5 from "./src/Pages/Home/screen/luz/leds/led5";

import { Theme } from "./src/global/theme";

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function Tab(){
  return(
    <Bottom.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Theme.colors.green,
      tabBarInactiveTintColor: 'gray',
      tabBarStyle:{
        backgroundColor: Theme.colors.black,
        marginHorizontal: '5%',
        position: 'absolute',
        borderColor: Theme.colors.green100,
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: '10%',
        height: '10%',
        paddingBottom: '3%',
        paddingTop: '2%',
        paddingHorizontal: '4%'
      }
      }} initialRouteName="Home" >
      <Bottom.Screen name="Dados" component={Dados}/>
      <Bottom.Screen name="Home" component={Home}/>
      <Bottom.Screen name="Set" component={Settigns}/>
    </Bottom.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar backgroundColor={Theme.colors.black} barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}} >
          <Stack.Screen name="Splash" component={Splash}/>
          <Stack.Screen name="Scre" component={Scre}/>
          <Stack.Screen name="Log" component={Log}/>
          <Stack.Screen name="Reg" component={Reg}/>

          <Stack.Screen name="Tab" component={Tab}/>

          <Stack.Screen name="Luz" component={Luz}/>
          <Stack.Screen name="sens" component={Sens}/>

          <Stack.Screen name="led1" component={Led1}/>
          <Stack.Screen name="led2" component={Led2}/>
          <Stack.Screen name="led3" component={Led3}/>
          <Stack.Screen name="led4" component={Led4}/>
          <Stack.Screen name="led5" component={Led5}/>

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
