import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import {gs, colors} from '../../../styles';
import Entypo from 'react-native-vector-icons/Entypo'
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function Adress() {
    return (
        <View >
            <View style={{backgroundColor: "#000"}}>
            <Image source={require('../../img/mappa.png')} style={{height:200, opacity: 0.2}}/>
            </View>
            <View style={styles.adressContainer}>
            
           <Entypo  name="pin"color={colors.lightHl} size={24} />
           <View style={{marginLeft: 8, marginTop: 24}}>
           <Text style={gs.sectionTitle}>Indirizzo</Text>
           <Text style={styles.address}>{`Piazza Lodi, Milano\n4, Italia `}</Text>
           <View style={{marginTop: 16}}>
           <TouchableOpacity style={styles.checkButton}>
           <Text style={gs.smallText}>Check it</Text>
           <Entypo name="chevron-right" size={12} color="#fff" style={{marginLeft: 4}}/>
           
           </TouchableOpacity>
           </View>
           </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
adressContainer: {
    ...gs.absoluteFull,
    flexDirection: 'row',
    paddingHorizontal:32,
    paddingVertical: 16,

}, address: {
    ...gs.smallText,
    marginTop: 6,
    color: colors.darkHl,
letterSpacing: 1,
lineHeight: 20
},
checkButton: {
    ...gs.button,
    paddingVertical:8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    flexDirection: 'row'

}

})
