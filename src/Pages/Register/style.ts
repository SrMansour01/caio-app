import { StyleSheet } from "react-native";
import { Theme } from "../../global/theme";

export const Style = StyleSheet.create({
  Cont:{
    flex: 1,
    backgroundColor: Theme.colors.black,
  },
  v:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt:{
    marginTop: '5%',
    fontSize: 18,
    color: Theme.colors.green100,
    letterSpacing: 2,
    marginLeft: '17%'
  },
  v1:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    height: 250,
    width: 250,
  },
  txt1:{
    fontSize: 16,
    color: 'gray',
    marginHorizontal: '15%',
    textAlign: 'center'
  },
  btn:{
    height: '10%',
    width: '60%',
    backgroundColor: Theme.colors.green100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: '20%',
    marginBottom: '20%'
  }
})
