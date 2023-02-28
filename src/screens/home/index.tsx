import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { COLORS } from '../../constants'
import { useFetch } from '../../hooks/useFetch'
import HomeHeader from '../../components/HomeComponents/header'
import SearchInitializer from '../../components/HomeComponents/searchInit'
import CategoriesList from '../../components/HomeComponents/categories'
import MoviesList from '../../components/HomeComponents/showMovies'
import Utils from '../../utils/filterMovies'
import MovieNetwork from '../../services/movies'
import GenresNetwork from '../../services/genres'
import AsyncStorageCache from '../../services/asyncstorageCache'

const HomeScreen = () => {
  // states for genres and refresh control
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);
  // fetch data custom hook call
  const { generes, nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies, setGeneres, setNowPlayingMovies, setPopularMovies, setTopRatedMovies, setUpcomingMovies } = useFetch();
  // the on refresh function that reloads and sets entities 
  const onRefresh = useCallback(async () => {
    try {
      setRefresh(true);
      const [_genres, _nowPlayingMovies, _upcominMovies, _topRatedMovies, _popularMovies] = await Promise.all([
        GenresNetwork.getGenres(), MovieNetwork.getNowPlayingMovies(), MovieNetwork.getUpcomingMovies(), MovieNetwork.getTopRatedMovies(), MovieNetwork.getPopularMovies()
      ]);
      setGeneres(_genres);
      setNowPlayingMovies(_nowPlayingMovies);
      setUpcomingMovies(_upcominMovies);
      setTopRatedMovies(_topRatedMovies);
      setPopularMovies(_popularMovies);
      setRefresh(false);
    } catch (err) {
      setRefresh(true);
      const [_genres, _nowPlayingMovies, _upcominMovies, _topRatedMovies, _popularMovies] = await Promise.all([
        AsyncStorageCache.getCachedGeneres(),
        AsyncStorageCache.getCachedNowPlayingMovies(),
        AsyncStorageCache.getCachedUpcomigMovies(),
        AsyncStorageCache.getCachedTopRatedMovies(),
        AsyncStorageCache.getCachedPopularMovies()
      ])
      setGeneres(_genres);
      setNowPlayingMovies(_nowPlayingMovies);
      setUpcomingMovies(_upcominMovies);
      setTopRatedMovies(_topRatedMovies);
      setPopularMovies(_popularMovies);
      setRefresh(false);
      console.warn(err);
    }
  }, [])
  // useEffect(() => {
  //   console.log(generes);
  //   console.log(topRatedMovies);
  // }, [
  //   generes, topRatedMovies
  // ])
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: COLORS.primary }}
      refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} colors={[COLORS.primary, COLORS.tintColor]}
       />}
    >
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