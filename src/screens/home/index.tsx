import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'

const HomeScreen = () => {
  return (
    <View style={{flex : 1 , backgroundColor : COLORS.primary}}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})