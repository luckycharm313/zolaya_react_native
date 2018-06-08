import React, { Component } from 'react'
import { View, Text, Easing, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Drawer from 'react-native-drawer-menu';
// import Camera from 'react-native-camera';

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

class MainScreen extends Component {
  onSelectMenu = () => {
    this.refs.menu.openLeftDrawer();
  }
  // takePicture = () => {
  //   this.camera.capture()
  //      .then((data) => console.log(data))
  //      .catch(err => console.error(err));
  // }

  render () {
    return (      
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
            <View style={styles.item_component_redeem}>
              <Image source = {Images.amazon_giftcard} style = {styles.redeem_logo} resizeMode='contain'/>      
            </View>
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
          {/* <Camera
            ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}>
                <TouchableOpacity onPress={this.takePicture.bind(this)}>
                </TouchableOpacity>             
          </Camera> */}
                  <Image source = {Images.camera} style = {styles.camera} resizeMode='contain'/>
          
        </View>
      </Drawer>
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
