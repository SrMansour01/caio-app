import { StyleSheet } from "react-native";
import { Theme } from "../../../../global/theme";

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
    fontSize: 20,
    color: Theme.colors.green100,
    letterSpacing: 2,
    marginTop: '7%',
    marginLeft: '20%'
  },
  v1:{
    flex: 1,
    alignItems: 'center',
    marginTop: '10%'
  },
  v2:{
    height: '15%',
    width: '85%',
    backgroundColor: Theme.colors.gray,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  txt1:{
    color: 'gray',
    fontSize: 16
  },
  v3:{
    flex: 1,
    marginTop: '5%',
    marginHorizontal: '10%',
  },
  scrol:{
    flex: 1,
  },
  v4:{
    height: 150,
    width: '100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  btn:{
    height: '100%',
    width: '45%',
    backgroundColor: Theme.colors.gray,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 10,
    shadowOffset:{
      height: 10,
      width: 5
    },
    shadowOpacity: 10,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    height: 40,
    width: 40,
    marginBottom: '10%'
  },
  txt2:{
    fontSize: 18,
    color: Theme.colors.green,
    marginBottom: '1%'
  },
  txt3:{
    fontSize: 12,
    color: Theme.colors.green100
  },
  mv:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mv1:{
    height: '30%',
    width: '80%',
    backgroundColor: Theme.colors.black,
    borderRadius: 20,
    borderColor: Theme.colors.green100,
    borderWidth: 1,
  },
  mv2:{
    flexDirection: 'row',
    marginTop: '10%',
    paddingLeft: '7%',
  },
  img1:{
    height: 20,
    width: 20,  
    marginRight: '30%'
  },
  txtm:{
    color: Theme.colors.green100,
    fontSize: 18,
    letterSpacing: 3
  },
  mv3:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
