import {StyleSheet} from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container:{
    backgroundColor:theme.colors.base.gray700,

    alignItems:'center',
    justifyContent:'center',
    
    height:173,
    width:'100%',

    position:'relative'
  },
  form:{
    height:54,
    bottom:-54/2,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute'
  },
  input:{
    height:54,
    width:'75%',
    backgroundColor:theme.colors.base.gray500,
    borderRadius:5,
    padding:16,
    fontSize:theme.font_size.md,
    borderColor: theme.colors.base.gray700,
    color: theme.colors.base.gray100,
    borderWidth:1,
    marginRight:4
  },
  inputBorder:{
    borderColor: theme.colors.brand.purple,
  },
  button:{
    height:54,
    width:54,
    borderRadius:5,
    backgroundColor:theme.colors.brand.blue_dark,
    alignItems:'center',
    justifyContent:'center'
  }
})