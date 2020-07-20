import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView} from 'react-native'
import {colors} from './styles';
import HotelView from './screens/HotelView/first'
import ProfileView from './screens/ProfileView';
export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
    {/*<HotelView/>*/}
    <ProfileView/>
      </ScrollView>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.darkBg,
    
  }
})