import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics, Fonts, Images } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :  '#fff',
    marginTop: 2,
    marginBottom : 2,
    padding : Metrics.marginVertical,
    borderRadius    : 5,
  },
  text_lg: {
    fontSize        : Fonts.size.medium,
    fontFamily      : Fonts.type.base,
    fontWeight      : '500',
    color : Colors.textColor,
  },
  text_md: {
    fontSize        : Fonts.size.small,
    fontFamily      : Fonts.type.base,
    color : Colors.textColor,
    marginTop : 3,
  },
  
  cashback: {
    flexDirection : 'row',    
    marginTop : 3,
  },
  text_lg_grey: {
    fontSize        : Fonts.size.medium,
    fontFamily      : Fonts.type.base,
    fontWeight      : '500',
    color : Colors.textColor,
    
  },
  text_lg_blue: {
    fontSize        : Fonts.size.medium,
    fontFamily      : Fonts.type.base,
    fontWeight      : '500',
    color : Colors.greenColor,
  },
  
  btn_group : {
    flexDirection   : 'row',
    marginTop: 10, 
    justifyContent: 'space-between'
  },
  btn_view :{
    
  },
  btn : {
    textAlign: 'center',
    textAlignVertical: "center",
    width: 170,
    height : 40,
    fontSize        : Fonts.size.medium,
    fontFamily      : Fonts.type.base,
    fontWeight      : '500',
    borderRadius    : 5,
    color : '#fff',
    backgroundColor : Colors.greenColor,
  },

})
