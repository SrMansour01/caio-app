import { StyleSheet } from "react-native";
import { Theme } from "../../global/theme";

export const Style = StyleSheet.create({
  Const:{
    flex: 1,
    backgroundColor: Theme.colors.black,
    alignItems: 'center',
    paddingTop: '2%'
  },
  v:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderBottomColor: Theme.colors.green100,
    borderBottomWidth: 1,
    height: '10%'
  },
  img:{
    height: 30,
    width: 30,
    marginRight: '2%'
  },
  txt:{
    color: 'white',
    opacity: 0.8,
    letterSpacing: 2,
  },
  v1:{
    height: '12%',
    width: '80%',
    backgroundColor: Theme.colors.gray,
    marginTop: '10%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    flexDirection: 'row',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset:{
      height: 10,
      width: 5
    },
    shadowOpacity: 10,
    shadowRadius: 5
  },
  txt1:{
    color: 'white',
    opacity: 0.8,
    fontSize: 16,
    letterSpacing: 2,
  },
  btn:{
    height: '12%',
    width: '80%',
    backgroundColor: Theme.colors.gray,
    marginTop: '5%',
    flexDirection: 'row',
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset:{
      height: 10,
      width: 5
    },
    shadowOpacity: 10,
    shadowRadius: 5,
    alignItems: 'center',
    paddingLeft: '6%'
  },
  img1:{
    height: 30,
    width: 30,
  },
  txt2:{
    fontSize: 14,
    color: Theme.colors.green100,
    letterSpacing:2,
    marginLeft: '5%'
  }
})
