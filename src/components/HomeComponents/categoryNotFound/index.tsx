import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'

const CategoryNotFound = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>no found movies in this category</Text>
        </View>
    )
}

export default CategoryNotFound

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        justifyContent: "center",
        alignItems: "center",
        height: 200
    },
    txt: {
        ...FONTS.body2,
        color: COLORS.tintColor,
        fontWeight: "700",
        textAlign: "center"
    }
})