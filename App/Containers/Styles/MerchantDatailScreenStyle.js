import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics, Fonts, Images } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container : {
    flex: 1,
    backgroundColor :  Colors.background1,
  },
  headerbar : {
    backgroundColor: Colors.backgroundDark,
    padding: Metrics.marginVertical,
    justifyContent      : 'center',
  },
  search_back :{
    color             : Colors.greenColor,
    fontSize          : Fonts.size.h4,
  },
  merchant_view: {
    margin : Metrics.marginVertical,        
  },
  merchant: {
    flexDirection: 'row',
    alignItems      : 'center',
    backgroundColor :  '#fff',
    padding : Metrics.marginVertical,
    borderRadius    : 3,    
  },
  logo : {
    marginLeft : 20, 
      width: 65,
      height : 65,      
  },
  title : {
    flex : 1,
    marginLeft : 20,
    fontSize        : Fonts.size.medium,
    fontFamily      : Fonts.type.base,
    fontWeight      : '500',
    color : Colors.textColor,    
  },


  searchBar : {
    flexDirection: 'row',
    alignItems      : 'center',
    justifyContent  : 'space-between',
    backgroundColor :  '#fff',
    padding : Metrics.marginVertical,
    marginTop: 3,
    borderRadius    : 3,
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
  },
  search_text : {
    flex : 1,
    color             : Colors.textColor,
    fontSize          : Fonts.size.h5,
    marginLeft : 10
  },

  detail : {
    marginTop: 7,
  },
})
