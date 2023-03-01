import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native'
import React, { useCallback } from 'react'
import { Movie } from '../../../types/movie'
import ToWatchCard from '../../towatchComponents/towatchCard'

type props = {
    searchResults: Movie[]
}
const SearchResultsShow = ({ searchResults }: props) => {

    const listRenderer: ListRenderItem<Movie> = useCallback(({ item }) => {
        return (
            <ToWatchCard searchMovie={item} />
        )
    }, [searchResults])
    return (
        <FlatList
            data={searchResults}
            renderItem={listRenderer}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false} />
    )
}

export default SearchResultsShow

const styles = StyleSheet.create({})