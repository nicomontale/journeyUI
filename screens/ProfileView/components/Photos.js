import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {gs, colors} from '../../../styles';

const photos = [
    require('../../img/travel1.jpg'),
    require('../../img/travel2.jpg'),
    require('../../img/travel3.jpg'),
    require('../../img/travel4.jpeg'),
    require('../../img/travel5.jpg'),
    require('../../img/travel6.jpg')
]
export default function Photos() {
    return (
        <View style={[gs.sectionContainer, {marginTop: 8}]}>
            <Text style={gs.sectionTitle}>Galleria</Text>

            <View style={styles.photosContainer}>
            {
                photos.map((photo, key)=> {
                    return(
                        <Image source={photo} key={key} style={styles.photo
                         }/>
                    )
                })
            }
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    photosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
    },
    photo: {
        width: 108,
        height: 108,
        marginBottom: 12,
        borderRadius: 8,
        marginRight: 8
    }
})
