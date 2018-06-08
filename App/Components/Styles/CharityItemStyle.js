import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems      : 'center',
    padding : Metrics.marginVertical,
    marginBottom: 5,
    borderRadius: 3,
    backgroundColor : '#ffffff',
  },
  logo : {
      width: 60,
      height : 60,      
  },
  title : {
    flex : 1,
    marginLeft : 20,
    fontSize        : Fonts.size.medium,
    fontFamily      : Fonts.type.base,
    fontWeight      : '400',
    color : Colors.textColor,    
  },
})
