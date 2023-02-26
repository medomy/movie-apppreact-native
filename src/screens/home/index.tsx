import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../constants'
import { useFetch } from '../../hooks/useFetch'

const HomeScreen = () => {
  const { generes, nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies } = useFetch();

  useEffect(() => {
    console.log(generes);
    console.log(topRatedMovies);
  }, [
    generes, topRatedMovies
  ])
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})