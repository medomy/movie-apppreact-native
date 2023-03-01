import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../../../constants'
import { useFetchDetails } from '../../../hooks/useFetchDetails'
import { useNavigation } from '@react-navigation/native'
import { Movie } from '../../../types/movie'

type props = {
    movie_id?: number,
    searchMovie?: Movie
}
const ToWatchCard = ({ movie_id, searchMovie }: props) => {
    if (movie_id) {
        const movie = useFetchDetails(movie_id);
        const navigation = useNavigation();
        return (
            <>
                {movie ? <TouchableOpacity style={styles.card} onPress={() => {
                    navigation.navigate("details" as never, {
                        movieId: movie_id
                    } as never)
                }}>
                    <Image
                        source={movie.poster_path
                            ? { uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}` }
                            : images.movie_pic}
                        style={styles.img} />
                    <View style={styles.infoSec}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <View style={styles.rating}>
                            <Image
                                source={images.rate_pic}
                                style={styles.ratingStar} />
                            <Text style={styles.ratingTxt}>
                                {movie.vote_average}
                            </Text>
                        </View>

                    </View>
                </TouchableOpacity>
                    : <View style={{ width: SIZES.fullWidth, height: 150, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator color={COLORS.tintColor} size={SIZES.iconSize}></ActivityIndicator>
                    </View>}
            </>
        )
    }
    else if (searchMovie) {
        const navigation = useNavigation();
        return (
            <>
                {searchMovie ? <TouchableOpacity style={styles.card} onPress={() => {
                    navigation.navigate("details" as never, {
                        movieId: movie_id
                    } as never)
                }}>
                    <Image
                        source={searchMovie.poster_path
                            ? { uri: `https://image.tmdb.org/t/p/w200/${searchMovie.poster_path}` }
                            : images.movie_pic}
                        style={styles.img} />
                    <View style={styles.infoSec}>
                        <Text style={styles.title}>{searchMovie.title}</Text>
                        <View style={styles.rating}>
                            <Image
                                source={images.rate_pic}
                                style={styles.ratingStar} />
                            <Text style={styles.ratingTxt}>
                                {searchMovie.vote_average}
                            </Text>
                        </View>

                    </View>
                </TouchableOpacity>
                    : <View style={{ width: SIZES.fullWidth, height: 150, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator color={COLORS.tintColor} size={SIZES.iconSize}></ActivityIndicator>
                    </View>}
            </>
        )
    }
    else return null;
}

export default ToWatchCard

const styles = StyleSheet.create({
    card: {
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: SIZES.margin2
    },
    img: {
        flex: 0.3,
        borderRadius: SIZES.radius2,
        height: 150,
        resizeMode: "contain"
    },
    infoSec: {
        flex: 0.6,
        paddingHorizontal: 0.6 * SIZES.padding,
    },
    title: {
        ...FONTS.body3,
        color: COLORS.white,
        fontWeight: "800",
    },
    rating: {
        marginVertical: SIZES.margin2,
        flexDirection: "row",
    },
    ratingStar: {
        width: SIZES.iconSize2,
        height: SIZES.iconSize2,
        resizeMode: "contain",
        // marginRight: 0.5 * SIZES.margin
    },
    ratingTxt: {
        ...FONTS.body5,
        color: COLORS.white,
        marginHorizontal: 0.5 * SIZES.margin
    }
})