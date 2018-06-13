import { StackNavigator } from 'react-navigation'
import RedeemScreen from '../Containers/RedeemScreen'
import MerchantDatailScreen from '../Containers/MerchantDatailScreen'
import MerchantScreen from '../Containers/MerchantScreen'
import CharityScreen from '../Containers/CharityScreen'
import MainScreen from '../Containers/MainScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  RedeemScreen: { screen: RedeemScreen },
  MerchantDatailScreen: { screen: MerchantDatailScreen },
  MerchantScreen: { screen: MerchantScreen },
  CharityScreen: { screen: CharityScreen },
  MainScreen: { screen: MainScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
