import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'


type props = {
    title: string
}
const ToWatchHeader = ({ title }: props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>{title}</Text>
        </View>
    )
}

export default ToWatchHeader

const styles = StyleSheet.create({
    container: {
        marginVertical: 1.5 * SIZES.margin2,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        color: COLORS.darkgray,
        fontWeight: "bold",
        ...FONTS.body2
    }
})