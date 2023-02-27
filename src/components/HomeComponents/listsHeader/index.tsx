import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'

type props = {
    title: string,
}
const ListsHeader = ({ title }: props) => {
    return (
        <View style={styles.row}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.link}>view more</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListsHeader

const styles = StyleSheet.create({
    row: {
        width: SIZES.fullWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SIZES.margin
    },
    title: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    link: {
        color: COLORS.tintColor,
        ...FONTS.body5
    }
})