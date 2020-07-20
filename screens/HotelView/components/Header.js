import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Entypo'
import {gs} from '../../../styles'
const Header = () => {
    return (
        <View >
           <Image source={require('../../img/hostel2.png')} style={{width:'100%', height:400}}/>
           <View style={styles.topButtons}>
           <Icon name="close" size={30} color="#000"/>



           <View style={gs.rowCenter}>
           
           <Icon name="save" size={30} style={styles.topButtonRight}/>
           <Icon name="sharealt" size={30} style={styles.topButtonRight}/>
           <Icon2 name="dots-three-vertical" size={22} style={styles.topButtonRight}/>
           </View>
           </View>
        </View>
    )
}

export default Header

const styles= StyleSheet.create({
   topButtons: {
       ...gs.rowBetween,
       position: 'absolute',
       top: 54,
       right: 18,
       left: 14
   },
   topButtonRight: {
       marginLeft: 8,
       color:"#000",
   

   }
})
