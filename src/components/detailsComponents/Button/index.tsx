import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'

type props = {
    messege: string,
    btnTxt: string
}
const CustomBtn = ({ messege, btnTxt }: props) => {
    const showToast = useCallback(() => {
        ToastAndroid.show(
            messege,
            ToastAndroid.SHORT
        )
    }, [messege])
    return (
        <TouchableOpacity style={styles.btn} onPress={showToast}>
            <Text style={styles.txt}>{btnTxt}</Text>
        </TouchableOpacity>
    )
}

export default CustomBtn

const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.tintColor,
        borderRadius: SIZES.radius,
        paddingHorizontal: 3 * SIZES.padding,
        paddingVertical: 2 * SIZES.padding,
        alignSelf: "center",
        bottom: 20,
        elevation: 15,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute"
    },
    txt: {
        color: COLORS.white,
        ...FONTS.body3,
    }
})