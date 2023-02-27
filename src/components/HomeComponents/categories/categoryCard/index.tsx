import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Genre } from '../../../../types/Genre'
import { COLORS, FONTS, SIZES } from '../../../../constants'

type props = {
    genre: Genre,
    onPress: (genreId: number) => void
}
const CategoryCard = ({ genre, onPress }: props) => {
    console.log(genre);
    return (
        <TouchableOpacity style={styles.card} onPress={() => onPress(genre.id)}>
            <Text style={styles.txt}>{genre.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    card: {
        paddingHorizontal:2.* SIZES.padding,
        paddingVertical: SIZES.padding2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.offBlack,
        marginHorizontal: 0.5 * SIZES.margin2,
        borderRadius: SIZES.radius
    },
    txt: {
        color: COLORS.offWhite,
        ...FONTS.body3
    }
})