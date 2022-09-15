import { StyleSheet } from "react-native";
import { Theme } from "../../global/theme";

export const Style = StyleSheet.create({
  Const:{
    flex: 1,
    backgroundColor: Theme.colors.black,
    alignItems: 'center',
  },
  v:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    paddingTop: '5%',
    borderBottomColor: Theme.colors.green100,
    borderBottomWidth: 1,
    paddingBottom: '5%',
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
    fontSize: 16,
    marginTop: '4%'
  },
  v1:{
    height: '20%',
    width: '80%',
    backgroundColor: Theme.colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '10%',
    borderRadius: 20,
    marginTop: '10%',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {
      height: 10,
      width: 5,
    },
    shadowOpacity: 10,
    shadowRadius: 5,
  },
  txt1:{
    color: 'gray',
    fontSize: 16,
  },
  txt2:{
    color: Theme.colors.green100
  },
  v2:{
    height: '50%',
    justifyContent: 'space-around'
  },
  img1:{
    height: 60,
    width: 60,
    marginBottom: '7%'
  },
  v3:{
    height: '20%',
    width: '80%',
    backgroundColor: Theme.colors.gray,
    marginTop: '5%',
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
  },
  v4:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
    borderRightColor: Theme.colors.green100,
    borderRightWidth: 1
  },
  v5:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%'
  },
  txt3:{
    fontSize: 16,
    color: 'gray',
    marginHorizontal: '20%',
    textAlign: 'center',
    marginBottom: '5%'
  },
  txt4:{
    color: Theme.colors.green100,
    fontSize: 18
  }
})
