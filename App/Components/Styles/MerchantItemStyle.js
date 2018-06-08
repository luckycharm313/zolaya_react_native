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
  contents : {
    flex : 1,
    marginLeft : 20,
    justifyContent      : 'center',
  },

  title : {
    fontSize        : Fonts.size.small,
    fontFamily      : Fonts.type.base,
    fontWeight      : '500',
    color : Colors.textColor,
    marginBottom : 10
  },
  text_p : {
    fontSize        : Fonts.size.tiny,
    fontFamily      : Fonts.type.base,
    fontWeight      : '400',
    color : Colors.textColor,
    marginBottom : 3,
  },
})
