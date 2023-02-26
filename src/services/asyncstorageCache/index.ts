import AsyncStorage from "@react-native-async-storage/async-storage";
import { Genre } from "../../types/Genre";
import { asyncStorageKeys } from "./asyncStorageKeys";
import { Movie } from "../../types/movie";

class AsyncStorageCache {
    // setter and getter for caching generes
    static async cacheGenres(genres: Genre[]) {
        try {
            await AsyncStorage.setItem(asyncStorageKeys.GENERES_STORE, JSON.stringify(genres));
        } catch (err) {
            throw new Error(`could not store generes , ${err}`);
        }
    }

    static async getCachedGeneres(): Promise<Genre[]> {
        try {
            const generesStringified = await AsyncStorage.getItem(asyncStorageKeys.GENERES_STORE);
            return JSON.parse(generesStringified!);
        } catch (err) {
            throw new Error(`could not get generes , ${err}`);
        }
    }
    // setters and getters for movies

    //popular movies:

    static async getCachedPopularMovies(): Promise<Movie[]> {
        try {
            const MoviesStringified = await AsyncStorage.getItem(asyncStorageKeys.POPULARMOVIES_STORE);
            return JSON.parse(MoviesStringified!);
        } catch (err) {
            throw new Error(`could not get cached movies , ${err}`);
        }
    }

    static async setCachedPopularMovies(movies: Movie[]) {
        try {
            await AsyncStorage.setItem(asyncStorageKeys.POPULARMOVIES_STORE, JSON.stringify(movies));
        } catch (err) {
            throw new Error(`could not set movies , ${err}`);
        }
    }

    // top rated movies

    static async getCachedTopRatedMovies(): Promise<Movie[]> {
        try {
            const MoviesStringified = await AsyncStorage.getItem(asyncStorageKeys.TOPRATEDMOVIES_STORE);
            return JSON.parse(MoviesStringified!);
        } catch (err) {
            throw new Error(`could not get cached movies , ${err}`);
        }
    }

    static async setCachedTopRatedMovies(movies: Movie[]) {
        try {
            await AsyncStorage.setItem(asyncStorageKeys.TOPRATEDMOVIES_STORE, JSON.stringify(movies));
        } catch (err) {
            throw new Error(`could not set movies , ${err}`);
        }
    }

    // upcoming movies

    static async getCachedUpcomigMovies(): Promise<Movie[]> {
        try {
            const MoviesStringified = await AsyncStorage.getItem(asyncStorageKeys.UPCOMINGMOVIES_STORE);
            return JSON.parse(MoviesStringified!);
        } catch (err) {
            throw new Error(`could not get cached movies , ${err}`);
        }
    }

    static async setCachedUpcomingMovies(movies: Movie[]) {
        try {
            await AsyncStorage.setItem(asyncStorageKeys.UPCOMINGMOVIES_STORE, JSON.stringify(movies));
        } catch (err) {
            throw new Error(`could not set movies , ${err}`);
        }
    }
    // now playing movies
    static async getCachedNowPlayingMovies(): Promise<Movie[]> {
        try {
            const MoviesStringified = await AsyncStorage.getItem(asyncStorageKeys.NOWPLAYINGMOVIES_STORE);
            return JSON.parse(MoviesStringified!);
        } catch (err) {
            throw new Error(`could not get cached movies , ${err}`);
        }
    }

    static async setCachedNowPlayingMovies(movies: Movie[]) {
        try {
            await AsyncStorage.setItem(asyncStorageKeys.NOWPLAYINGMOVIES_STORE, JSON.stringify(movies));
        } catch (err) {
            throw new Error(`could not set movies , ${err}`);
        }
    }
}

export default AsyncStorageCache;