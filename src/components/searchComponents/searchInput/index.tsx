import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { COLORS, SIZES } from '../../../constants';
import { debounce } from 'lodash';
import RecentSearchComponent from '../recentSearchHistory';
type props = {
    sendSearchVal: (val: string) => void,
    searchKeys: string[]
}
const SearchInput = ({ sendSearchVal, searchKeys }: props) => {
    const [showRecentKeys, setShowRecentKeys] = useState<boolean>(false);
    const [searchTxt, setSearchTxt] = useState<string>("");

    const changeTxt = (txt: string) => {
        if (txt.length === 0) setShowRecentKeys(true);
        else setShowRecentKeys(false);
        //sendSearchVal(txt);
        // console.log(showRecentKeys, txt);
        setSearchTxt(txt)
    }

    // wait for txt and then call the function
    const debouncedSetter = useCallback(debounce(changeTxt, 500), []);

    const onFocus = () => {
        setShowRecentKeys(true);
    }
    const onBlur = () => {
        setShowRecentKeys(false);
    }

    useEffect(() => {
        if (searchTxt.length === 0) setShowRecentKeys(true);
        else setShowRecentKeys(false);
        sendSearchVal(searchTxt);
    }, [
        searchTxt
    ])
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={debouncedSetter}
                defaultValue={searchTxt}
                onFocus={onFocus}
                //onBlur={onBlur}
                placeholder='search for a movie'
                keyboardType="default"
            />
            {showRecentKeys && <RecentSearchComponent searchKeys={searchKeys ?? []} chooseKey={(key) => setSearchTxt(key)} />}
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