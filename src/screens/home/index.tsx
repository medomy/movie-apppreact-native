import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../constants'
import { useFetch } from '../../hooks/useFetch'
import HomeHeader from '../../components/HomeComponents/header'
import SearchInitializer from '../../components/HomeComponents/searchInit'

const HomeScreen = () => {
  const { generes, nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies } = useFetch();

  useEffect(() => {
    console.log(generes);
    console.log(topRatedMovies);
  }, [
    generes, topRatedMovies
  ])
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <HomeHeader />
      <SearchInitializer />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})