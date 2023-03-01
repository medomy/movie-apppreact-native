import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../../../constants';
import _ from 'lodash';
import RecentSearchComponent from '../recentSearchHistory';
type props = {
    sendSearchVal: (val: string) => void,
    searchKeys: string[]
}
const SearchInput = ({ sendSearchVal, searchKeys }: props) => {
    const [showRecentKeys, setShowRecentKeys] = useState<boolean>(false);
    const [searchTxt, setSearchTxt] = useState<string>("");

    const changeTxt = (txt: string) => {
        setShowRecentKeys(false);
        _.debounce(() => {
            setSearchTxt(txt);
        }, 500, { maxWait: 2000 })
    }

    useEffect(() => {
        sendSearchVal(searchTxt);
    }, [
        searchTxt
    ])
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={changeTxt}
                value={searchTxt}
                onFocus={() => setShowRecentKeys(true)}
                onBlur={() => setShowRecentKeys(false)}
                placeholder='search for a movie'
                keyboardType="default"
            />
            {showRecentKeys && <RecentSearchComponent searchKeys={searchKeys} chooseKey={(key) => setSearchTxt(key)} />}
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        marginVertical: SIZES.margin
    },
    input: {
        backgroundColor: COLORS.offBlack,
        borderRadius: SIZES.radius,
        paddingHorizontal: SIZES.padding2,
        paddingVertical: 0.75 * SIZES.padding,
        width: SIZES.fullWidth,
        color: COLORS.white
    }
})