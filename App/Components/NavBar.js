import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/NavBarStyle'
import { Images } from '../Themes'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  _onclickMenu = () =>{
    this.props.onSelectMenu();
  }
  
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress = {this._onclickMenu}>
          <Image source = {Images.menu} style = {styles._menu} resizeMode='contain'/>
        </TouchableOpacity>
        <Image source = {Images.logo} style = {styles.logo} resizeMode='contain'/>        
        <View style = {styles._menu}></View>
      </View>
    )
  }
}
