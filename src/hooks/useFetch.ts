import { useEffect, useState } from "react";
import { Genre } from "../types/Genre";
import { Movie } from "../types/movie";
import AsyncStorageCache from "../services/asyncstorageCache";
import GenresNetwork from "../services/genres";
import MovieNetwork from "../services/movies";

export function useFetch() {
    // set our states
    const [generes, setGeneres] = useState<Genre[]>([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
    const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

    async function fetchData() {
        try {
            setGeneres(await GenresNetwork.getGenres());
            setNowPlayingMovies(await MovieNetwork.getNowPlayingMovies());
            setTopRatedMovies(await MovieNetwork.getTopRatedMovies());
            setPopularMovies(await MovieNetwork.getPopularMovies());
            setUpcomingMovies(await MovieNetwork.getUpcomingMovies());
        } catch (err) {
            console.warn(err);
            setGeneres(await AsyncStorageCache.getCachedGeneres());
            setNowPlayingMovies(await AsyncStorageCache.getCachedNowPlayingMovies());
            setTopRatedMovies(await AsyncStorageCache.getCachedTopRatedMovies());
            setPopularMovies(await AsyncStorageCache.getCachedPopularMovies());
            setUpcomingMovies(await AsyncStorageCache.getCachedUpcomigMovies());
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { generes, nowPlayingMovies, topRatedMovies, popularMovies, upcomingMovies };
}