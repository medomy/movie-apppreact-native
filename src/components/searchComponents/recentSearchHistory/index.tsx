import { StyleSheet, Text, View, FlatList, ListRenderItem, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'

type props = {
    searchKeys: string[],
    chooseKey: (key: string) => void
}
const RecentSearchComponent = ({ searchKeys, chooseKey }: props) => {

    const listRenderer: ListRenderItem<string> = useCallback(({ item }) => {
        return (
            <TouchableOpacity style={styles.searchEntity} onPress={() => chooseKey(item)}>
                <Text style={styles.searchEntTxt}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recent :</Text>
            <FlatList
                style={{ marginVertical: SIZES.margin }}
                data={searchKeys.reverse()}
                renderItem={listRenderer}
                keyExtractor={(item) => item} />
        </View>
    )
}

export default RecentSearchComponent

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        paddingVertical: SIZES.padding2,
        backgroundColor: COLORS.primary,
        zIndex: 50
    },
    title: {
        ...FONTS.body3,
        color: COLORS.white,
        fontWeight: "bold"
    },
    searchEntity: {
        paddingHorizontal: SIZES.padding2,
        paddingVertical: SIZES.padding2,
        width: SIZES.fullWidth
    },
    searchEntTxt: {
        ...FONTS.body4,
        color: COLORS.white,
    }
})