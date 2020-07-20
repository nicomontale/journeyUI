import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Entypo'
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/FontAwesome5';
import Icon5 from 'react-native-vector-icons/Ionicons'
import {gs, colors} from '../../../styles';
export default function Amenities() {
    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>Servizi</Text>
            <View style={styles.amenitiesContainer}>
            <View style={styles.amenityContainer}>
            <View style={styles.amenity}>
            <Icon3 name="wifi" size={24} color={colors.lightHl}/>
            </View>
            <Text style={styles.aName}>WI-FI</Text>
            </View>

            <View style={styles.amenityContainer}>
            <View style={styles.amenity}>
            <Icon5 name="md-restaurant" size={20} color={colors.lightHl}/>
            </View>
            <Text style={styles.aName}>Ristorante</Text>
            </View>

            <View style={styles.amenityContainer}>
            <View style={styles.amenity}>
            <Icon4 name="swimmer" size={20} color={colors.lightHl}/>
            </View>
            <Text style={styles.aName}>Piscina</Text>
            </View>

            <View style={styles.amenityContainer}>
            <View style={styles.amenity}>
            <Icon2 name="drink" size={24} color={colors.lightHl}/>
            </View>
            <Text style={styles.aName}  color={colors.lightHl}>Bar</Text>
            </View>

            <View style={styles.amenityContainer}>
            <View style={styles.amenity}>
            <Icon5 name="ios-car" size={24} color={colors.lightHl}/>
            </View>
            <Text style={styles.aName}>Parcheggio</Text>
            </View>

            <View style={styles.amenityContainer}>
            <View style={styles.amenity}>
            <Icon3 name="speaker" size={24} color={colors.lightHl}/>
            </View>
            <Text style={styles.aName}>Night Club</Text>
            </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

amenitiesContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    ...gs.rowBetween,
    flexWrap: 'wrap'
},
amenityContainer: {
    alignItems: 'center',
    width: 95,
    marginVertical: 12,

},
amenity: {
    width: 48,
    height: 48,
    borderRadius: 48 /2,
    ...gs.center,
    backgroundColor: '#444'
},
aName: {
   
        color: colors.lightHl,
        fontSize: 12,
        fontWeight: "600",
        marginTop: 8,
        textAlign: "center"
    
}
})
