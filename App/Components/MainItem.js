import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/MainItemStyle'
import { Images, Metrics } from '../Themes'

export default class MainItem extends Component {
  
  render () {
    return (
      <View style={styles.container}>
        <View style = {styles.next} />      
        <Image source = {this.props.img} style = {styles.left} resizeMode='contain'/>      
        <Image source = {Images.next} style = {styles.next} resizeMode='contain'/>      
      </View>
    )
  }
}
