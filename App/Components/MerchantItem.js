import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/MerchantItemStyle'

export default class MerchantItem extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const {logo, title} = this.props.data;
    return (
      <View style={styles.container}>
        <Image source = {logo} style = {styles.logo} resizeMode='contain'/>
        <View style={styles.contents}>
          <Text style = {styles.title} >{title}</Text>
          <Text style = {styles.text_p} >One invoice per (24) hours</Text>
          <Text style = {styles.text_p} >Submit your invoice in (24) hours</Text>
        </View>
      </View>
    )
  }
}
