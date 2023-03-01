import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native'
import React, { useCallback } from 'react'
import { COLORS, SIZES, images } from '../../../constants'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { BlurView } from '@react-native-community/blur'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import Utils from '../../../utils/filterMovies'
import { addToList, removeFromList, setList } from '../../../store/toWatchSlice'
import AsyncStorageCache from '../../../services/asyncstorageCache'
// try to understand blurView more in the future...

type props = {
    imgPath: string | null,
    movieId: number
}
const PosterBackground = ({ imgPath, movieId }: props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const favs_ids = useSelector((state: RootState) => state.toWatch.toWatchIds);

    const addOrRemoveTowatch = useCallback(async () => {
        try {
            // dispatch(setList([]));
            // await AsyncStorageCache.setToWatchMoviesAsyncStorage([]);
            if (!Utils.isAddedToWatchList(favs_ids, movieId)) {
                dispatch(addToList(movieId));
                //await AsyncStorageCache.setToWatchMoviesAsyncStorage(favs_ids);
                console.log("added", favs_ids);
                ToastAndroid.show("added to to-watch list successfuly", ToastAndroid.SHORT)
            }
            else {
                dispatch(removeFromList(movieId));
                //await AsyncStorageCache.setToWatchMoviesAsyncStorage(favs_ids);
                console.log("removed", favs_ids);
                ToastAndroid.show("removed from to to-watch list successfuly", ToastAndroid.SHORT)
            }
        } catch (err) {
            console.warn(err);
        }
    }, [favs_ids]);

    return (
        <ImageBackground
            source={imgPath ? { uri: `https://image.tmdb.org/t/p/w500/${imgPath}` } : images.movie_pic}
            style={styles.imgBackground}
            resizeMode='stretch'>
            <View style={styles.heder}>
                <TouchableOpacity style={styles.iconCircle} onPress={() => navigation.goBack()}>
                    <BlurView
                        blurType='light'
                        blurAmount={40}
                        reducedTransparencyFallbackColor="white"
                        blurRadius={25} />
                    <Icon name='ios-close-circle-outline' size={1.5 * SIZES.iconSize2} color={COLORS.white} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconCircle} onPress={addOrRemoveTowatch}>
                    <BlurView
                        blurType='light'
                        blurAmount={40}
                        blurRadius={25}
                        reducedTransparencyFallbackColor="white" />
                    {Utils.isAddedToWatchList(favs_ids, movieId) ?
                        <Icon name='bookmark' size={1.5 * SIZES.iconSize2} color={COLORS.white} /> :
                        <Icon name='bookmark-outline' size={1.5 * SIZES.iconSize2} color={COLORS.white} />}
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.playCircle} >
                <BlurView
                    blurType='light'
                    blurAmount={80}
                    blurRadius={25}
                    reducedTransparencyFallbackColor="white" />
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
        opacity: 0.4,
        width: 40,
        height: 40,
        borderRadius: 20,
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