import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'

type props = {
    overview: string
}
const DetailsOverviewSec = ({ overview }: props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.overView}>{overview}</Text>
        </View>
    )
}

export default DetailsOverviewSec

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: SIZES.padding2,
        marginVertical: SIZES.margin2
    },
    overView: {
        color: COLORS.darkgray,
        ...FONTS.body3,
        fontWeight: "600",
        lineHeight: 30
    }
})