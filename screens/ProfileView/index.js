
import React from 'react'
import { StyleSheet, Text, View, StatusBar,ActivityIndicator} from 'react-native'
import {gs, colors} from '../../styles';
import Header from './components/Header';
import Stats from './components/Stats'
import About from './components/About';
import Location from './components/Location';
import Photos from './components/Photos';
export default class index extends React.Component {
   
    render() {
       
     
        return (
            <View style={styles.container}>
               <Header  />
               <Stats/>
               <About/>
               <Location/>
               <Photos/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       flex:1,
        backgroundColor: colors.darkBg
    }
})
