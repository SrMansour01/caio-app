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
    marginLeft: '17%',
    fontSize: 20,
    marginTop: '5%',
    color: Theme.colors.green100,
    letterSpacing: 2
  },
  v1:{
    flex: 1,
    marginHorizontal: '10%',
    marginTop: '10%'
  },
  scrol:{
    flex: 1,
  },
  v2:{
    height: 100,
    width: '100%',
    backgroundColor: Theme.colors.gray,
    marginBottom: 20,
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
  },
  img: {
    height: 40,
    width: 40,
    marginRight: '5%'
  },
  v3:{
    height: '70%',
    width: '1%',
    backgroundColor: Theme.colors.green100,
    borderRadius: 10,
    marginRight: '7%'
  },
  txt1:{
    color: Theme.colors.green100,
    letterSpacing: 2
  },
  txt2:{
    color: 'gray'
  },
  txt3:{
    color: Theme.colors.green100
  }
})
