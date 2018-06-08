import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/MaterialIcons'
// Styles
import { Metrics, ApplicationStyles, Colors, Fonts, Images } from '../Themes/'
// Styles
import styles from './Styles/MerchantDatailScreenStyle'
import MerchantDetailItem from '../Components/MerchantDetailItem'

class MerchantDatailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchCancel : false,
      searchText: '',
      data : [
        {
          title : 'Aroush St-Martin O',
          contact_info : '2467 Boulevard Saint-Martin O, Laval,QC H7T 1A2, Canada',
          percent: '2.50'
        },
        {
          title : 'Aroush Maisonneuve',
          contact_info : '1600 Boulevard Maisonneuve O, Montreal,QC H3H 1J5, Canada',
          percent: '2.50'
        },
        {
          title : 'Aroush de Liege',
          contact_info : '2467 Boulevard Saint-Martin O, Laval,QC H7T 1A2, Canada',
          percent: '2.50'
        },
      ]
    };
  }

  _cancel = () =>{
    this.refs.search.setNativeProps({ text: '' })
  }
  
  _search = () => {    
    if(this.state.searchText == '')
      this.setState({isSearchCancel: false})
    else
      this.setState({isSearchCancel: true})
  }

  _goBack = () =>{
      this.props.navigation.navigate('MerchantScreen')
  }

  _renderItem = ({item}) => (
    <MerchantDetailItem
      data = {item}
      nav = {this.props}
    />
  )

  render () {
    const logo = Images.child_hospital;
    const title = 'Ronald McDonald House Montreal';
    return (
      <View style={styles.container}>
        <View style = { styles.headerbar}>
          <View style={styles.merchant}>
            <TouchableOpacity onPress = {this._goBack}>
              <Icon name="arrow-back" style = {styles.search_back}/>
            </TouchableOpacity>
            <Image source = {logo} style = {styles.logo} resizeMode='contain'/>
            <Text style = {styles.title} >{title}</Text>
          </View>
        </View>
        <View style={styles.merchant_view}>
          
          <View style = { styles.searchBar}>
            <Icon name="search" style = {styles.search_icon}/>
            <TextInput
                ref = {'search'}
                name = {'search' }
                type = {'TextInput'}
                underlineColorAndroid = {Colors.greenColor}
                autoCapitalize = {'none'}
                autoCorrect = {false}
                placeholder = {'search branches...'}
                placeholderTextColor = {Colors.textHintColor}
                style = {styles.search_text }
                returnKeyType = 'go'
                selectionColor = {Colors.textHintColor}
                onChangeText = {(searchKey) => { this.setState({searchText: searchKey})}}
                onChange = {this._search}
                maxLength = {100}/>
              {this.state.isSearchCancel && 
              <TouchableOpacity onPress = {this._cancel}>
                <Icon name="close" style = {styles.close_icon}/>
              </TouchableOpacity>}            
          </View>

          <View style = { styles.detail}>
            <FlatList
              data={this.state.data}
              renderItem={this._renderItem}
            />            
          </View>

        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MerchantDatailScreen)
