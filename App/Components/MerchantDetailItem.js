import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Platform, Linking } from 'react-native'
import styles from './Styles/MerchantDetailItemStyle'

// import { createOpenLink } from 'react-native-open-maps';
import openMap from 'react-native-open-maps';
 
const yosemite = { latitude: 37.865101, longitude: -119.538330 };
// const openYosemite = createOpenLink(yosemite);
// const openYosemiteZoomedOut = createOpenLink({ ...yosemite, zoom: 30 });

export default class MerchantDetailItem extends Component {
  
  _onClickMap = () => {
    openMap(yosemite);
  }

  _onClickCall = () => {
    Linking.openURL('tel:5551231234');
  }

  // navigate = (url) => { // E
  //   const { navigate } = this.props.navigation;
  //   const route = url.replace(/.*?:\/\//g, '');
  //   const id = route.match(/\/([^\/]+)\/?$/)[1];
  //   const routeName = route.split('/')[0];
  
  //   if (routeName === 'people') {
  //     navigate('People', { id, name: 'chris' })
  //   };
  // }

  handleOpenURL = (event) => { // D
    this.props.nav.navigate(event.url);
  }

  render () {
    const {title, contact_info, percent} = this.props.data
    return (
      <View style={styles.container}>
        <Text style = {styles.text_lg} >{title}</Text>
        <Text style = {styles.text_md} >{contact_info}</Text>
        <View style = { styles.cashback}>
          <Text style = {styles.text_lg_grey} >Cashback   </Text>
          <Text style = {styles.text_lg_blue} >{percent} %</Text>
        </View>
        <View style = { styles.btn_group}>
          <TouchableOpacity onPress = {this._onClickMap}>
            <Text style = {styles.btn} >Map</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {this._onClickCall}>
            <Text style = {styles.btn} >Call</Text>
          </TouchableOpacity> 
        </View>
      </View>
    )
  }
}
