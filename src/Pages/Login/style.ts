import { StyleSheet } from "react-native";
import { Theme } from "../../global/theme";

export const Style = StyleSheet.create({
  Cont:{
    flex: 1,
    backgroundColor: Theme.colors.black,
  },
  v:{
    flexDirection: 'row',
  },
  txt:{
    marginTop: '11%',
    marginLeft: '21%',
    letterSpacing: 2,
    fontSize: 20,
    color: Theme.colors.green100,
  },
  v1:{
    flex: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  v2:{
    height: 200,
    width: '80%',
    backgroundColor: Theme.colors.gray,
    marginTop: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset:{
      height: 10,
      width: 5,
    },
    shadowOpacity: 10,
    shadowRadius: 5,
  },
  input:{
    height: '40%',
    width: '80%',
    borderBottomColor: Theme.colors.green100,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '5%'
  },
  img:{
    height: 30,
    width: 30,
    marginLeft: '5%',
    marginRight: '5%'
  },
  btn:{
    height: 70,
    width: '70%',
    backgroundColor: Theme.colors.gray,
    justifyContent: 'center',
    paddingLeft: '10%',
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset:{
      height: 10,
      width: 5,
    },
    shadowOpacity: 10,
    shadowRadius: 5,
  },
  txt1:{
    color: 'white',
    opacity: 0.8,
    letterSpacing: 2,
  },
  btn1:{
    marginTop: '5%'
  },
  txt2:{
    color: 'white',
    opacity: 0.6
  },
  txt3:{
    color: Theme.colors.green100,
    letterSpacing: 2,
  },
  vM:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vm1:{
    height: '40%',
    width: '70%',
    backgroundColor: Theme.colors.gray,
    borderColor: Theme.colors.green,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt4:{
    fontSize: 18,
    marginHorizontal: '10%',
    textAlign: 'center',
    color: Theme.colors.green100,
    marginBottom: '10%'
  },
  btn2:{
    height: '20%',
    width: '60%',
    backgroundColor: Theme.colors.green100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: '10%',
    shadowColor: 'black',
    shadowOffset:{
      height: 10,
      width: 5
    },
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
  }
})
