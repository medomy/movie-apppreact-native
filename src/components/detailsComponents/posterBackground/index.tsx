import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../../constants'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
type props = {
    imgPath: string | null,
    movieId: number
}
const PosterBackground = ({ imgPath, movieId }: props) => {
    const navigation = useNavigation();
    return (
        <ImageBackground
            source={imgPath ? { uri: `https://image.tmdb.org/t/p/w500/${imgPath}` } : images.movie_pic}
            style={styles.imgBackground}
            resizeMode='stretch'>
            <View style={styles.heder}>
                <TouchableOpacity style={styles.iconCircle} onPress={() => navigation.goBack()}>
                    <Icon name='ios-close-circle-outline' size={SIZES.iconSize2} color={COLORS.white} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconCircle}>
                    <Icon name='bookmark-outline' size={SIZES.iconSize2} color={COLORS.white} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.playCircle} >
                <Icon name='play' size={2 * SIZES.iconSize} color={COLORS.white} />
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default PosterBackground

const styles = StyleSheet.create({
    heder: {
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 1.5 * SIZES.margin2
    },
    iconCircle: {
        backgroundColor: COLORS.white,
        opacity: 0.6,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    imgBackground: {
        width: SIZES.fullScreenWidth,
        height: 500,
        justifyContent: "center",
        alignItems: "center"
    },
    playCircle: {
        backgroundColor: COLORS.white,
        opacity: 0.6,
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
    }

})