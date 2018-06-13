import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerSection : {
    height : Metrics.mainHeaderHeight,
    padding: Metrics.baseMargin,
  },
  headerView : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView_sm : {
    fontSize        : Fonts.size.medium,
    fontFamily      : Fonts.type.base,
    fontWeight      : '500',
    color: '#ffffff',
  },
  headerView_currency:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerView_lg : {
    fontSize        : Fonts.size.lg,
    fontWeight      : '500',
    // fontFamily      : 'LibreBaskerville-Regular',
    color: '#ffffff'
  },
  headerView_md : {
    fontSize        : Fonts.size.md,
    fontFamily      : Fonts.type.base,
    fontWeight      : '500',
    color: '#ffffff'
  },
  headerView_xl : {
    fontSize        : Fonts.size.input,
    fontFamily      : Fonts.type.base,
    fontWeight      : '500',
    color: '#ffffff'
  },
  
  mainBody : {
    flex : 1,
    paddingTop: Metrics.smallMargin,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin,
    paddingBottom: Metrics.smallMargin,
    justifyContent: 'center',
    backgroundColor : '#ffffff'
  },

  mainBodyItem :{
    height: Metrics.mainItemHeight, 
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom:10,
  },
  item_md : {
    fontSize        : Fonts.size.medium,
    fontFamily      : Fonts.type.base,
    fontWeight      : '400',
    color: '#000000',    
    marginBottom : 8,
  },
  redeem_logo : {
    height: 40,
  },

  item_component_redeem : {
    flex : 1,
    borderWidth : 1,
    borderColor: '#2d9ed8',
    borderRadius: 5,
    backgroundColor : '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#81c5e7',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 1,
  },
  item_component : {
    flex : 1,
    borderWidth : 1,
    borderColor: '#2d9ed8',
    borderRadius: 5,
    shadowColor: '#81c5e7',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 1,
    backgroundColor: '#fff'
  },
  
  mainFooter : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    height: Metrics.mainFooterHeight,
  },
  camera : {
    width: 120,
    height: 55,
  },

})
