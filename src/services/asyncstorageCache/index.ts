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

    // for towatch movies part

    static async getToWatchMoviesAsyncStorage(): Promise<number[] | null> {
        try {
            const moviesStringified = await AsyncStorage.getItem(asyncStorageKeys.TOWATCHSTOREDMOVIES_STORE);
            return moviesStringified ? JSON.parse(moviesStringified) : null;
        } catch (err) {
            throw new Error(`could not get movies, ${err}`)
        }
    }

    static async setToWatchMoviesAsyncStorage(ids: number[]) {
        try {
            await AsyncStorage.setItem(asyncStorageKeys.TOWATCHSTOREDMOVIES_STORE, JSON.stringify(ids));
        } catch (err) {
            throw new Error(`could not set movie, ${err}`)
        }
    }

    // for search keys

    static async getSearchKeysAsyncStorage() {
        try {
            const searchKeysString = await AsyncStorage.getItem(asyncStorageKeys.SEARCH_HISTORY_STORE);
            return searchKeysString ? JSON.parse(searchKeysString) : null;
        } catch (err) {
            throw new Error(`${err}`)
        }
    }

    static async setSearchKeysAsyncStorage(key: string) {
        try {
            const searchKeys: string[] | null = await this.getSearchKeysAsyncStorage();
            if (searchKeys && searchKeys.length === 5) {
                searchKeys.shift();
            }
            if (searchKeys) {
                searchKeys.push(key);
                await AsyncStorage.setItem(asyncStorageKeys.SEARCH_HISTORY_STORE, JSON.stringify(searchKeys));
            }
            else if (searchKeys == null) await AsyncStorage.setItem(asyncStorageKeys.SEARCH_HISTORY_STORE, JSON.stringify([key]));
        } catch (err) {
            throw new Error(`${err}`);
        }
    }
}

export default AsyncStorageCache;