import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { Movie } from '../../../types/movie'
import { SIZES } from '../../../constants'
import ListsHeader from '../listsHeader'
import MovieCard from './movieCard'

type props = {
    headerTitle: string,
    movies: Movie[]
}
const MoviesList = ({ headerTitle, movies }: props) => {
    const listRenderer: ListRenderItem<Movie> = useCallback(({ item }) => {
        return (
            <MovieCard movie={item} />
        )
    }, [movies])
    return (
        <View style={styles.container}>
            <ListsHeader title={headerTitle} />
            <FlatList
                data={movies}
                renderItem={listRenderer}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false} />
        </View>
    )
}

export default MoviesList

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        marginVertical: SIZES.margin2
    }
})