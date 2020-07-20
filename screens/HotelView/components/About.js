import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {gs, colors} from '../../../styles'

const hostel = {
    name:"Ostello Bello",
    price: "10 $",
    location: "Milan",
    about:"Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo"
}
const About = () => {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{hostel.name}</Text>
            <Text style={styles.info}>
            {hostel.price} &#8226; {hostel.location}
            </Text>
            <View style={gs.divider}/>
            <Text style={gs.sectionTitle}> Info : {hostel.name}</Text>
            <Text style={styles.about}>{hostel.about}</Text>
        </View>
    )
}

export default About
 const styles = StyleSheet.create({
   container: {
       ...gs.sectionContainer,
       backgroundColor: colors.darkBg
       
   }, info: {
       color: colors.textSec,
       fontWeight: '600',
       marginTop: 4
   }, about : {
       fontSize: 13,
       fontWeight: '600',
       color: colors.textSec,
       marginTop: 6,
       lineHeight: 20
   }


 })