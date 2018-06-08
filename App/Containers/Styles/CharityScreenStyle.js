import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container : {
    flex: 1,
    backgroundColor :  Colors.background1,
  },
  headerbar : {
    flexDirection: 'row',
    alignItems      : 'center',
    height: Metrics.navBarHeight,
    backgroundColor: Colors.backgroundDark,
    paddingLeft: Metrics.marginVertical,
    paddingRight : Metrics.marginVertical,    
  },
  searchBar : {
    flex: 1,
    flexDirection: 'row',
    alignItems      : 'center',
    justifyContent  : 'space-between',
    marginLeft : 20,
  },
  search_back :{
    color             : Colors.greenColor,
    fontSize          : Fonts.size.h4,
  },
  search_icon :{
    color             : Colors.greenColor,
    fontSize          : Fonts.size.h5,
  },
  close_icon :{
    color             : Colors.greenColor,
    fontSize          : Fonts.size.h5,
    marginRight : 20,
  },
  search_text : {
    flex : 1,
    color             : '#fff',
    fontSize          : Fonts.size.h5,
    marginLeft : 10
  },

  body : {
    padding: Metrics.marginVertical,      
  }
})
