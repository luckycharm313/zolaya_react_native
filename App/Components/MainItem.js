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
      <View style={styles.container}>
        <View style = {styles.next} />      
        <Image source = {this.props.img} style = {styles.left} resizeMode='contain'/>
        <TouchableOpacity onPress = {this._goNext}>
          <Image source = {Images.next} style = {styles.next} resizeMode='contain'/>      
        </TouchableOpacity>         
      </View>
    )
  }
}
