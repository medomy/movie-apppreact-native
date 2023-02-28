import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import ToWatchHeader from '../../components/towatchComponents/header'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ToWatchCard from '../../components/towatchComponents/towatchCard'

const ToWatchScreen = () => {
  const favs_ids = useSelector((state: RootState) => state.toWatch.toWatchIds);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ToWatchHeader title='to-watch list' />
      {favs_ids.map((id) => {
        return (
          <ToWatchCard movie_id={id} key={id} />
        )
      })}
    </ScrollView>
  )
}

export default ToWatchScreen

const styles = StyleSheet.create({})