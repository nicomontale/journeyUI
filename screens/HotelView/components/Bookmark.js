import React from 'react'
import { View, StyleSheet} from 'react-native'
import {gs, colors} from '../../../styles'
import Icon from 'react-native-vector-icons/Feather';
const Bookmark = () => {
    return (
        <View style={styles.bookmark}>
         <Icon name="bookmark" size={24} color={colors.pink}/>
        </View>
    )
}

export default Bookmark

const styles = StyleSheet.create({
    bookmark:  {
        position: 'absolute',
        width:56,
        height: 56,
        right: 32,
        justifyContent: "center",
        alignItems: "center",
        top: -56 / 2,
        backgroundColor: colors.text,
        ...gs.center ,
        borderRadius: 56 / 2,
        zIndex:10
    }
})