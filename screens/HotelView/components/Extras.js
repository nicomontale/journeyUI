import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {gs, colors} from '../../../styles';

export default function Extras() {
    const extras =[
        "Pagamento al checkout",
        "Wi-fi illimitato",
        "Vietato l'uso della psicina dopo le 22:00",
        "Si ad animali"
    ]
    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>Informazioni</Text>
            <View style={styles.list}>
            {extras.map((extras, key)=>
                {
                    return <Text style={styles.listItem} key={key}>&mdash; {extras}</Text>
                })
            }
            </View>
            <View style={{marginTop: 32, marginBottom: -30}}>
            <TouchableOpacity style={styles.filterButton}>
            <Text style={{fontWeight: "700", color: '#fff'}}>Cerca</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        ...gs.sectionContainer,
        marginTop: 8,
        marginBottom: 64
    },
    list : {
    marginTop: 16,
    marginLeft: 8
    },
    listItem: {
        color: colors.textSec,
        marginVertical: 8
    }, filterButton: {
        ...gs.button,
        paddingVertical:16
    }
})
