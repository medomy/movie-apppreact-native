import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../../../constants'

const HomeHeader = () => {
    return (
        <View style={styles.header}>
            <View style={styles.txtContainer}>
                <Text style={styles.welcomeTxt}>Welcome medomy,</Text>
                <Text style={styles.otherTxt}>Let's relax and choose a movie!</Text>
            </View>
            <Image
                source={images.profilePic}
                style={styles.profileImg} />
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    header: {
        marginVertical:1.5* SIZES.margin2,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.padding2,
        width: SIZES.fullWidth,
        alignItems: "center"
    },
    txtContainer: {
        flex: 1,
    },
    welcomeTxt: {
        color: COLORS.darkgray,
        ...FONTS.body3,
        marginBottom: 0.5 * SIZES.margin
    },
    otherTxt: {
        color: COLORS.white,
        ...FONTS.body2
    },
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: "contain"
    }

})