import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { gs,colors } from '../../../styles'
export default function Location() {
    return (
        <View style={styles.container}>
        <View style={{width: 75, height: 75}}>
        <Entypo name="location-pin" style={{flex:1, width: undefined, alignItems: 'center', marginTop: 5}}size={50} color={colors.pink}  />
        </View>
           <View style={{flex:1}}>
           <Text style={styles.location}>Italy</Text>
           <Text style={styles.distance}>154km</Text>
           </View>
           <Entypo name="chevron-right" size={24} color={colors.darkHl}/>
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    ...gs.rowCenter,
    backgroundColor: colors.lightBg,
    paddingHorizontal: 16,
    paddingVertical: 8,

}, location: {
    fontSize: 18,
    color: colors.text,
    fontWeight: "500",

}, distance: {
    ...gs.smallText,
    color: colors.darkHl,
    marginTop: 4,
    textTransform: "uppercase"
}
})
