import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../constants'
import { useFetch } from '../../hooks/useFetch'
import HomeHeader from '../../components/HomeComponents/header'
import SearchInitializer from '../../components/HomeComponents/searchInit'
import CategoriesList from '../../components/HomeComponents/categories'
import MoviesList from '../../components/HomeComponents/showMovies'
import Utils from '../../utils/filterMovies'

const HomeScreen = () => {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
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
      <CategoriesList genres={generes} selectCategory={(id) => setSelectedGenre(id)} />
      <MoviesList headerTitle={'Now Playing Movies'} movies={Utils.filterMovies(nowPlayingMovies, selectedGenre)} />
      <MoviesList headerTitle={'Top Rated'} movies={Utils.filterMovies(topRatedMovies, selectedGenre)} />
      <MoviesList headerTitle='Popular Movies' movies={Utils.filterMovies(popularMovies, selectedGenre)} />
      <MoviesList headerTitle='Upcoming Movies' movies={Utils.filterMovies(upcomingMovies, selectedGenre)} />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})