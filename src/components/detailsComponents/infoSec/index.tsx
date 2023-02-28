import { FlatList, Image, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { Genre } from '../../../types/Genre'
import { COLORS, FONTS, SIZES, images } from '../../../constants'
import CategoryCard from '../../HomeComponents/categories/categoryCard'

type props = {
    title: string,
    rating: number,
    vote_rate: number,
    vote_counts: number,
    genres: Genre[]
}
const InfoSec = ({ title, rating, vote_rate, vote_counts, genres }: props) => {
    const listRenderer: ListRenderItem<Genre> = useCallback(({ item }) => {
        return (
            <CategoryCard genre={item} onPress={() => { }} />
        )
    }, [genres])
    return (
        <View style={styles.container}>
            <View style={styles.rateRow}>
                <View style={styles.rateDiv}>
                    <Text style={styles.rateDivTxt}>
                        TMDB {rating}
                    </Text>
                </View>
                <View style={styles.rateVotesDiv}>
                    <Image
                        source={images.rate_pic}
                        style={styles.rateStar}
                        resizeMode="contain"
                    />
                    <Text style={styles.rateTxt}>
                        {vote_rate}
                    </Text>
                    <Text style={styles.votesTxt}>
                        ({vote_counts} reviews)
                    </Text>
                </View>
            </View>
            <Text style={styles.titleTxt}>
                {title}
            </Text>
            <FlatList
                data={genres}
                renderItem={listRenderer}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false} />
        </View>
    )
}

export default InfoSec

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        marginTop: SIZES.margin
    },
    rateRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    rateDiv: {
        backgroundColor: COLORS.yellowRate,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.radius2,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
    },
    rateDivTxt: {
        color: COLORS.black,
        ...FONTS.body4,
        fontWeight: "600"
    },
    rateVotesDiv: {
        flexDirection: "row",
        marginHorizontal: SIZES.margin,
        alignItems: "center"
    },
    rateStar: {
        width: SIZES.iconSize,
        height: SIZES.iconSize,
        marginHorizontal: 0.5 * SIZES.margin
    },
    rateTxt: {
        color: COLORS.yellowRate,
        ...FONTS.body3,
        fontWeight: "700",
        marginHorizontal: 0.5 * SIZES.margin
    },
    votesTxt: {
        ...FONTS.body5,
        color: COLORS.white
    },
    titleTxt: {
        marginVertical: 1.5 * SIZES.margin2,
        ...FONTS.h2,
        color: COLORS.white,
        fontWeight: "800"
    }

})