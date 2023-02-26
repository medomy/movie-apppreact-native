import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Icon from 'react-native-vector-icons/Octicons'

const SearchInitializer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.searchView}>
                <Icon name='search' size={SIZES.iconSize2} color={COLORS.darkgray} />
                <Text style={styles.searchTxt}>Search movies...</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchInitializer

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: SIZES.padding2,
        marginVertical: SIZES.margin2
    },
    searchView: {
        width: SIZES.fullWidth,
        paddingHorizontal:1.5* SIZES.padding,
        paddingVertical: SIZES.padding2,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.offBlack,
    },
    searchTxt: {
        marginHorizontal: 0.6 * SIZES.margin,
        color: COLORS.darkgray,
        ...FONTS.body3,
        //alignSelf:"center"
    }
})