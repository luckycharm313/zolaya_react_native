import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/CharityItemStyle'

export default class CharityItem extends Component {
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
        <Text style = {styles.title} >{title}</Text>
      </View>
    )
  }
}
