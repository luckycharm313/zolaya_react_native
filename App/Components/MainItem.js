import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/MainItemStyle'
import { Images, Metrics } from '../Themes'

export default class MainItem extends Component {
  constructor(props) {
    super(props);
  }

  _goNext = () => {
    const nextpage = this.props.nextPage;

    if(nextpage == 'community')
      this.props.nav.navigate('CharityScreen')
    else
      this.props.nav.navigate('MerchantScreen')
  }

  render () {
    
    return (
      <TouchableOpacity style={styles.container} onPress = {this._goNext}>
        <View style = {styles.next} />      
        <Image source = {this.props.img} style = {styles.left} resizeMode='contain'/>
        <View style = {styles.next_view}>
          <Image source = {Images.next} style = {styles.next} resizeMode='contain'/>      
        </View>         
      </TouchableOpacity>
    )
  }
}
