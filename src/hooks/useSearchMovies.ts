import { useEffect, useState } from "react";
import { Movie } from "../types/movie";
import AsyncStorageCache from "../services/asyncstorageCache";
import MovieNetwork from "../services/movies";

export function useSearchMovies(searchQuery: string) {
    const [searchedMovies, setSearchedMovies] = useState<Movie[]>();
    const [searchKeys, setSearchKeys] = useState<string[]>([]);
    async function search() {
        try {
            await AsyncStorageCache.setSearchKeysAsyncStorage(searchQuery);
            const [_searchedMovies, _searchKeys] = await Promise.all([MovieNetwork.getSearchedMovies(searchQuery),
            AsyncStorageCache.getSearchKeysAsyncStorage()]);
            setSearchedMovies(_searchedMovies);
            setSearchKeys(_searchKeys);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        search();
    }, [searchQuery])
    return { searchedMovies, searchKeys };
}