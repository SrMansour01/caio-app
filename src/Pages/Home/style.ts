import { StyleSheet } from "react-native";
import { Theme } from "../../global/theme";

export const Style = StyleSheet.create({
  Const:{
    flex: 1,
    backgroundColor: Theme.colors.black,
  },
  v:{
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 25,
    width: 25,
    marginRight: '2%',
    opacity: 0.8,
  },
  txt:{
    marginTop: '2%',
    color: 'white',
    fontSize: 16,
    letterSpacing: 2,
    opacity: 0.8
  },
  v1:{
    height: '20%',
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.green100,
    marginHorizontal: '10%',
    marginTop: '5%'
  },
  scroll:{
    flex: 1,
  },
  btn:{
    height: 110,
    width: 120,
    backgroundColor: Theme.colors.gray,
    marginRight: 20,
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {
      height: 10,
      width: 5
    },
    shadowOpacity: 10,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img1:{
    height: 35,
    width: 35,
    opacity: 0.8,
    marginBottom: '7%'
  },
  txt1:{
    fontSize: 16,
    color: 'white',
    opacity: 0.8
  },
  v2:{
    flex: 1,
    marginHorizontal: '10%',
    marginTop: '5%'
  },
  scrol1:{
    flex: 1,
  },
  btn1:{
    height: 100,
    width: '100%',
    backgroundColor: Theme.colors.gray,
    marginBottom: '5%',
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset:{
      height: 10,
      width: 5,
    },
    shadowOpacity: 10,
    shadowRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '10%'
  },
  v3:{
    marginBottom: '5%',
    height: 100,
    width: '100%',
  },
  img2:{
    height: 40,
    width: 40,
  },
  v4:{
    marginLeft: '7%'
  },
  txt2:{
    fontSize: 16,
    color: Theme.colors.green,
    letterSpacing: 2,
    marginBottom: '5%'
  },
  txt3:{
    fontSize: 16,
    color: Theme.colors.green100
  }
})
