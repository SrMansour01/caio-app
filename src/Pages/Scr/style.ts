import { StyleSheet } from "react-native";
import { Theme } from "../../global/theme";

export const Style = StyleSheet.create({
  Cont:{
    flex: 1,
    backgroundColor: Theme.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    height: 250,
    width: 250,
  },
  btn:{
    height: '40%',
    width: '70%',
    backgroundColor: Theme.colors.gray,
    justifyContent: 'center',
    paddingLeft: '10%',
    borderRadius: 20,
    marginTop: '7%',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset:{
      height: 10,
      width: 5,
    },
    shadowOpacity: 10,
    shadowRadius: 5
  },
  v:{
    width: '100%',
    height: '25%',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%'
  },
  txt:{
    color: 'white',
    fontSize: 16,
    letterSpacing: 2,
    opacity: 0.8
  },
  btn1:{
    marginTop: '5%'
  },
  txt1:{
    color: 'white',
  },
  txt2:{
    color: Theme.colors.green100
  }
})
