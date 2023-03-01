import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../constants'
import SearchHeader from '../../components/searchComponents/header'
import { useSearchMovies } from '../../hooks/useSearchMovies'
import SearchInput from '../../components/searchComponents/searchInput'
import SearchResultsShow from '../../components/searchComponents/searchResults'

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const { searchedMovies, searchKeys } = useSearchMovies(searchQuery);

    useEffect(() => {
        console.log("from screen", searchQuery);
    }, [searchQuery])
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <SearchHeader />
            {/* {SearchInput({sendSearchVal : (val)=> setSearchQuery(val) , searchKeys})} */}
            <SearchInput sendSearchVal={(val) => setSearchQuery(val)} searchKeys={searchKeys} />
            {searchQuery.length > 0 && searchedMovies ? <SearchResultsShow searchResults={searchedMovies} />
                : <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: COLORS.white }}>No results yet...</Text>
                </View>}
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})