import { StyleSheet } from "react-native";
import { Theme } from "../../global/theme";

export const Style = StyleSheet.create({
  Const:{
    flex: 1,
    backgroundColor: Theme.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    height: 220,
    width: 220,
    marginBottom: '30%'
  }
})
