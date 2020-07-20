import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {gs, colors} from '../../../styles';

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>ABOUT ME</Text>
            <Text style={styles.about}>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.
             Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, 
             quando un anonimo tipografo prese una cassetta di caratteri e 
             li assemblò per preparare un testo campione
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {margin: 32},
    about: {
fontSize: 15,
fontWeight: "500",
color: colors.darkHl,
marginTop: 8,
lineHeight: 22
    }
})
