import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import {gs, colors} from '../../../styles'
import { pink } from 'color-name';
import meImg from '../../img/react-me.png'

export default class Header extends Component {
    state= {
        name: "Nicola Montaleone",
        img: meImg

    }
    render() {
   
        return (
            <View style={styles.header}>
            <View style={{marginHorizontal: 32, paddingVertical: 64}}>
                <View style={gs.rowBetween}>
                <Ionicons name="md-arrow-back" color={colors.text} size={32}/>
                <Entypo name="dots-three-vertical" color={colors.text} size={32}/>
                </View>
                <View style={styles.imgContainer}>
                <View>
                <View style={styles.check}>
                <Ionicons name="md-checkmark" size={20} color={colors.pink}/>
                </View>
                <Image source={this.state.img} style={{width: 100, height: 100, borderRadius: 32}}
                />
                
                </View>
                
                </View>
                <View style={[gs.center, {marginVertical:12}]}>
                <Text style={gs.title}>{this.state.name}</Text>
                <Text style={{marginTop: 8,fontWeight: "600",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                fontSize: 15,
                letterSpacing: 1}}>Traveler/Developer</Text>

                <TouchableOpacity style={styles.follow}>
                <Entypo name="plus" size={20} color="rgba(255,255,255,0.6)"/>
                <Text style={styles.followText}>Follow</Text>
                
                
                </TouchableOpacity>
                </View>
            </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.pink
    },
    imgContainer: {
   ...gs.center,
   marginTop: 16,
   shadowColor: colors.darkBg,
   shadowOffset:{height: 3, width:1},
   shadowOpacity: 0.5,
   
  
    
    
}, check: {
    ...gs.center,
    backgroundColor: colors.text,
    borderRadius: 100,
    width: 32,
    shadowColor: colors.darkBg,
    shadowOffset: {
        height: 3, width: 1
    },
    shadowOpacity: 0.3,
    position: 'absolute',
    zIndex: 1,
    right: -16,
    bottom: 16,

}, follow :{
    ...gs.button,
    ...gs.rowCenter,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 16,
    borderColor: '#de5fc8',
    backgroundColor: "#e74ca3",
    borderWidth: 2,

},
followText : {
    fontSize: 16,
    color: colors.text,
    fontWeight: "600",
    marginLeft: 4,
    
}
})
