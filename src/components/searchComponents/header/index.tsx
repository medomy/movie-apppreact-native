import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import AsyncStorageCache from '../../../services/asyncstorageCache'

const SearchHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.iconCircle} onPress={() => {
                navigation.goBack()
            }}>
                <Icon name='ios-close-circle-outline' size={1.5 * SIZES.iconSize2} color={COLORS.white} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchHeader

const styles = StyleSheet.create({
    header: {
        marginVertical: SIZES.margin2,
        paddingHorizontal: SIZES.padding2,
    },
    iconCircle: {
        backgroundColor: COLORS.white,
        opacity: 0.4,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
})