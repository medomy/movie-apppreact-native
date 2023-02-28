import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Movie } from '../../../../types/movie'
import { COLORS, FONTS, SIZES, images } from '../../../../constants'
import { useNavigation } from '@react-navigation/native'

type props = {
    movie: Movie
}
const MovieCard = ({ movie }: props) => {
    const navigation = useNavigation();
    const navigateToDetails = () => {
        navigation.navigate("details" as never, {
            movieId: movie.id
        } as never);
    }
    return (
        <TouchableOpacity style={styles.container} onPress={navigateToDetails}>
            <Image
                style={styles.img}
                source={movie.poster_path ? { uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}` } : images.movie_pic}
            />
            <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
        </TouchableOpacity>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    container: {
        width: 200,
        marginHorizontal: SIZES.margin2
    },
    img: {
        width: "100%",
        //width : "50%",
        height: 270,
        borderRadius: SIZES.radius2,
        marginBottom: 0.5 * SIZES.margin,
        resizeMode: "contain"
    },
    title: {
        ...FONTS.body4,
        color: COLORS.white
    }
})