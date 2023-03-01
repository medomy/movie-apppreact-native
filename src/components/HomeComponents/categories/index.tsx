import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { SIZES } from '../../../constants'
import ListsHeader from '../listsHeader'
import { Genre } from '../../../types/Genre'
import CategoryCard from './categoryCard'

type props = {
    genres: Genre[],
    selectCategory: (id: number) => void;
}
const CategoriesList = ({ genres, selectCategory }: props) => {
    const chooseCategory = (genre_id: number) => {
        selectCategory(genre_id);
    };
    const flatListRenderer: ListRenderItem<Genre> = useCallback(({ item }) => {
        return (
            <CategoryCard genre={item} onPress={chooseCategory} />
        )
    }, [genres])
    
    return (
        <View style={styles.container}>
            <ListsHeader title={"Categories"} />
            <FlatList
                data={genres}
                renderItem={flatListRenderer}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false} />
        </View>
    )
}

export default CategoriesList

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        marginVertical: SIZES.margin2
    }

})