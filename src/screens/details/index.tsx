import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../constants'
import { useRoute } from '@react-navigation/native'
import { useFetchDetails } from '../../hooks/useFetchDetails'
import PosterBackground from '../../components/detailsComponents/posterBackground'

type RouteParams = {
    movieId: number
}
const MovieDetailsComponent = () => {
    const route = useRoute();
    const params = route.params as RouteParams;
    const movie = useFetchDetails(params.movieId);
    useEffect(() => {
        console.log(movie)
    }, [movie])
    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <PosterBackground imgPath={movie ? movie!.backdrop_path : null} movieId={movie ? movie!.id : 0} />
        </ScrollView>
    )
}

export default MovieDetailsComponent

const styles = StyleSheet.create({})