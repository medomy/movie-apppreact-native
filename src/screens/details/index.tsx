import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../constants'
import { useRoute } from '@react-navigation/native'
import { useFetchDetails } from '../../hooks/useFetchDetails'
import PosterBackground from '../../components/detailsComponents/posterBackground'
import InfoSec from '../../components/detailsComponents/infoSec'
import DetailsOverviewSec from '../../components/detailsComponents/detailsSec'
import CustomBtn from '../../components/detailsComponents/Button'

type RouteParams = {
    movieId: number
}
const MovieDetailsComponent = () => {
    const route = useRoute();
    const params = route.params as RouteParams;
    const movie = useFetchDetails(params.movieId);
    useEffect(() => {
        console.log(movie?.id);
    }, [movie])
    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.primary }}>
                {movie && <PosterBackground imgPath={movie ? movie!.backdrop_path : null} movieId={movie!.id} />}
                {movie && <InfoSec title={movie.title}
                    rating={Number(movie.vote_average.toFixed(1))}
                    vote_rate={Number(movie.vote_average.toFixed(1))}
                    vote_counts={movie.vote_count}
                    genres={movie.genres} />}
                {movie && <DetailsOverviewSec overview={movie.overview} />}
            </ScrollView>
            <CustomBtn btnTxt='go to reservation' messege='feature not added yet' />
        </>
    )
}

export default MovieDetailsComponent

const styles = StyleSheet.create({})