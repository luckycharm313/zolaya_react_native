import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    height          : Metrics.navigateHight,
    flexDirection   : 'row',
    justifyContent  : 'space-between',
    alignItems      : 'center',
  },
  _menu :{
    width: 35,
    height: 35,
  },
  logo :{
    width: 80,
    height: 30,
  },
})
