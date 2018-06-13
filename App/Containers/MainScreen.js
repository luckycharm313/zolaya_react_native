import React, { Component } from 'react'
import { View, Text, Easing, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Drawer from 'react-native-drawer-menu';
// import Camera from 'react-native-camera';
import ImagePicker  from 'react-native-image-picker';

import NavBar from '../Components/NavBar'
import NavMenu from '../Components/NavMenu'
import MainItem from '../Components/MainItem'
// Styles
import styles from './Styles/MainScreenStyle'
import { Images, Metrics } from '../Themes'

var customStyles = {
  drawer: {
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 10
  },
  mask: {}, // style of mask if it is enabled
  main: {} // style of main board
};

var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class MainScreen extends Component {
  onSelectMenu = () => {
    this.refs.menu.openLeftDrawer();
  }
  
  takePicture = () => {
    
    ImagePicker.launchCamera(options, (response)  => {
      
    });
  }

  _gotoRedeem = () => {
    this.props.navigation.navigate('RedeemScreen');
  }

  render () {
    return (
      <View style={styles.mainContainer}>      
        <Drawer
          ref = {'menu'}
          style={styles.container}
          drawerWidth={Metrics.menuWidth}
          drawerContent={NavMenu}
          type={Drawer.types.Overlay}
          customStyles={{drawer: styles.drawer}}
          drawerPosition={Drawer.positions.Left}
          onDrawerOpen={() => {console.log('Drawer is opened');}}
          onDrawerClose={() => {console.log('Drawer is closed')}}
          easingFunc={Easing.ease}
        >
        <ImageBackground
            source={Images.header_bg}
            style={styles.headerSection}
          > 
            <NavBar onSelectMenu = {this.onSelectMenu}/>
            <View style={styles.headerView}>
              <Text style = {styles.headerView_sm}>YOU CURRENTY HAVE:</Text>
              <View style={styles.headerView_currency}>
                <Text style = {styles.headerView_md}>$</Text>
                <Text style = {styles.headerView_lg}>22.46</Text>
              </View>
              <Text style = {styles.headerView_xl}>JOHN SMITH</Text>
            </View>
        </ImageBackground>
        <View style={styles.mainBody}>
          <View style={styles.mainBodyItem}>
            <Text style = {styles.item_md}>REDEEM</Text>
            <TouchableOpacity style={styles.item_component_redeem} onPress={this._gotoRedeem}>
              <Image source = {Images.amazon_giftcard} style = {styles.redeem_logo} resizeMode='contain'/>      
            </TouchableOpacity>
          </View>
          <View style={styles.mainBodyItem}>
            <Text style = {styles.item_md}>YOUR FAVORITE CHARITY IS</Text>
            <View style={styles.item_component}>
              <MainItem nav = {this.props.navigation} img = {Images.child_hospital} nextPage={'community'}/>
            </View>
          </View>
          <View style={styles.mainBodyItem}>
          <Text style = {styles.item_md}>MERCHANTS</Text>
            <View style={styles.item_component}>
              <MainItem nav = {this.props.navigation} img = {Images.coco_logo}  nextPage={'merchant'}/>
            </View>
          </View>
        </View>
        <View style={styles.mainFooter}>        
          <TouchableOpacity onPress={this.takePicture.bind(this)}>
            <Image source = {Images.camera} style = {styles.camera} resizeMode='contain'/>
          </TouchableOpacity>
        </View>
      </Drawer>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
