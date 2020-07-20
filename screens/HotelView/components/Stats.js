import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo'
import {gs, colors} from '../../../styles'
const starsColor= [
    "#e3ab53","#e3ab53","#e3ab53","#e3ab53","#8b6f43"
]
const Circle = props => {
    return <View style={[styles.circle, props.style]}/>
}
const Stats = () => {
    return (
        <View style={styles.container}>
<View style={styles.weatherContainer}>
<Icon name="sun" size={24} color={colors.darkHl}/>
<View style={{marginLeft: 8}}>
<Text style={styles.title}> 22°</Text>
<Text style={styles.subtitle}> Sereno</Text>


</View>
 </View>
 <View>
 <Text style={styles.title}>8.4 
 <Text style={[styles.subtitle, {paddingLeft:8}]}> &nbsp; &nbsp; +8k voti</Text>
 </Text>
 <View style={gs.rowCenter}>
 {starsColor.map((color,index)=>{return(
     <Icon2 name="star" size={14} color={color} key={index} style={{marginHorizontal: 2}}/>
 )})}
 </View>
 </View>

 <View style={styles.circlesContainer}>
 <Circle style={{backgroundColor: "#999", marginRight: -10, zIndex:3}}/>
 <Circle style={{backgroundColor: "#888", marginRight: -10, zIndex:2}}/>
 <Circle style={{backgroundColor: "#777", marginRight: -10, zIndex:1}}/>
 </View>
 </View>
    )
}

export default Stats
 const styles = StyleSheet.create({
     container: {
        ...gs.rowCenter,
        ...gs.sectionContainer

     },
     weatherContainer: {
         ...gs.rowCenter,
         paddingRight: 12,
         marginRight: 12,
         borderRightColor: '#444',
         borderRightWidth: 1
     },
     title : {
         color: colors.text,
         fontSize: 18,
         fontWeight: "800"
     },
     subtitle: {
         color: colors.textSec,
         fontSize: 10,
         fontWeight: '800'
     },
     circlesContainer: {
         flex:1,
         flexDirection:'row',
         justifyContent: 'flex-end',
        



     },
     circle: {
         width: 36,
         height: 36,
         borderRadius: 36 /2,
         borderWidth: 2,
         borderColor: colors.lightBg
     }
 })
