import React, { Component } from 'react'
import { ScrollView, Text, TextInput, Image, View, FlatList, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Styles
import styles from './Styles/MerchantScreenStyle'
import { Metrics, ApplicationStyles, Colors, Fonts, Images } from '../Themes/'
import MerchantItem from '../Components/MerchantItem'

class MerchantScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [{
                logo: Images.child_hospital,
                title: 'Ronald McDonald House Montreal'
              },
              {
                logo: Images.child_hospital,
                title: 'Hellenic Community of Greater Montreal'
              },
              {
                logo: Images.child_hospital,
                title: 'Make-A Wish Quebec'
              },{
                logo: Images.child_hospital,
                title: 'Ronald McDonald House Montreal'
              },
              {
                logo: Images.child_hospital,
                title: 'Hellenic Community of Greater Montreal'
              },
              {
                logo: Images.child_hospital,
                title: 'Make-A Wish Quebec'
              },{
                logo: Images.child_hospital,
                title: 'Ronald McDonald House Montreal'
              },
              {
                logo: Images.child_hospital,
                title: 'Hellenic Community of Greater Montreal'
              },
              {
                logo: Images.child_hospital,
                title: 'Make-A Wish Quebec'
              }],
      isSearchCancel : false,
      searchText: '',
    };
  }
  _goBack = () =>{
      this.props.navigation.navigate('MainScreen')
  }

  _cancel = () =>{
      this.refs.search.setNativeProps({ text: '' })
  }
  _renderItem = ({item}) => (
    <TouchableOpacity onPress={() => { this.props.navigation.navigate('MerchantDatailScreen')}}>
      <MerchantItem
        data = {item}
      />
    </TouchableOpacity>
  )

  _search = () => {
    
    if(this.state.searchText == '')
      this.setState({isSearchCancel: false})
    else
      this.setState({isSearchCancel: true})
  }

  render () {
    return (
      <View style={styles.container}>
        <View style = { styles.headerbar}>
          <TouchableOpacity onPress = {this._goBack}>
            <Icon name="arrow-back" style = {styles.search_back}/>
          </TouchableOpacity>
          <View style = { styles.searchBar}>
            <Icon name="search" style = {styles.search_icon}/>
            <TextInput
                name = {'search' }
                ref = {'search'}
                type = {'TextInput'}
                underlineColorAndroid = {'transparent'}
                autoCapitalize = {'none'}
                autoCorrect = {false}
                placeholder = {'search merchants...'}
                placeholderTextColor = {Colors.textHintColor}
                style = {styles.search_text }
                returnKeyType = 'go'
                selectionColor = {"#fff"}
                onChangeText = {(searchKey) => { this.setState({searchText: searchKey})}}
                onChange = {this._search}
                maxLength = {100}/>
              {this.state.isSearchCancel && 
              <TouchableOpacity onPress = {this._cancel}>
                <Icon name="close" style = {styles.close_icon}/>
              </TouchableOpacity>}
            
          </View>
        </View>
        <View style = { styles.body}>
          <FlatList
            data={this.state.data}
            // extraData={this.state}
            // keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(MerchantScreen)
