import { StyleSheet } from "react-native";
import { Theme } from "../../../../../global/theme";

export const Style = StyleSheet.create({
  Cont:{
    flex: 1,
    backgroundColor: Theme.colors.black
  },
  v1:{
    flex: 1,
    marginTop: '10%',
    alignItems: 'center'
  },
  v2:{
    height: '25%',
    width: '85%',
    backgroundColor: Theme.colors.gray,
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset:{
      height: 10,
      width: 5
    },
    shadowOpacity: 10,
    shadowRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
  },
  btn:{
    height: '70%',
    width: '35%',
    backgroundColor: Theme.colors.black,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Theme.colors.green100,
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset:{
      height: 10,
      width: 5
    },
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
  },
  v3:{
    marginLeft: '10%',
  },
  txt:{
    color: Theme.colors.green,
    fontSize: 20,
    letterSpacing: 5,
    marginBottom: '20%'
  },
  txt1:{
    color: Theme.colors.green100,
    fontSize: 16
  },
  v4:{
    height: '20%',
    width: '80%',
    backgroundColor: Theme.colors.gray,
    marginTop: '10%',
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {
      height: 10,
      width: 5
    },
    shadowOpacity: 10,
    shadowRadius: 5,
  },
  btn1:{
    height: '10%',
    width: '60%',
    backgroundColor: Theme.colors.green100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '45%',
    borderRadius: 25,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {
      height: 10,
      width: 5
    },
    shadowOpacity: 10,
    shadowRadius: 5,
  },
  img:{
    height: 40,
    width: 40,
  },
  txt2:{
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 2
  },
  txt3:{
    color: Theme.colors.green100,
    marginTop: '2%',
    marginLeft: '5%'
  },
  v5:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
    marginTop: '5%',
    marginBottom: '5%'
  },
  img1:{
    height: 20,
    width: 20
  },
  txt4:{
    color: Theme.colors.green100
  }
})
