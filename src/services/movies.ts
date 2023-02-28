import networkInstance from "../network";
import { MovieDetailed } from "../types/mevieDetailed";
import { Movie } from "../types/movie";
import AsyncStorageCache from "./asyncstorageCache";

class MovieNetwork {
    private static PathsConfig = {
        NOWPLAYING_PATH: "/movie/now_playing",
        UPCOMING_PATH: "/movie/upcoming",
        TOPRATED_PATH: "/movie/top_rated",
        POPULAR_PATH: "/movie/popular",
    };
    private static async getMoviesByPath(path: string) {
        try {
            const Data = await networkInstance.get(path, {
                params: {
                    page: 1
                }
            });
            return Data.data;
        } catch (err) {
            throw new Error(`could not get movies, ${err}`)
        }
    }
    static async getNowPlayingMovies(): Promise<Movie[]> {
        try {
            const nowPlayingData = await this.getMoviesByPath(this.PathsConfig.NOWPLAYING_PATH);
            await AsyncStorageCache.setCachedNowPlayingMovies(nowPlayingData.results);
            return nowPlayingData.results;
        } catch (err) {
            throw new Error(`could not get now playing movies, ${err}`)
        }
    }

    static async getUpcomingMovies(): Promise<Movie[]> {
        try {
            const upcomingData = await this.getMoviesByPath(this.PathsConfig.UPCOMING_PATH);
            await AsyncStorageCache.setCachedUpcomingMovies(upcomingData.results);
            return upcomingData.results;
        } catch (err) {
            throw new Error(`${err}`);
        }
    }

    static async getTopRatedMovies(): Promise<Movie[]> {
        try {
            const topRatedData = await this.getMoviesByPath(this.PathsConfig.TOPRATED_PATH);
            await AsyncStorageCache.setCachedTopRatedMovies(topRatedData.results);
            return topRatedData.results;
        } catch (err) {
            throw err;
        }
    }

    static async getPopularMovies(): Promise<Movie[]> {
        try {
            const popularData = await this.getMoviesByPath(this.PathsConfig.POPULAR_PATH);
            await AsyncStorageCache.setCachedPopularMovies(popularData.results);
            return popularData.results;
        } catch (err) {
            throw err
        }
    }

    static async getMovieById(id: number): Promise<MovieDetailed> {
        try {
            const MovieData = await networkInstance.get(`/movie/${id}`);
            return MovieData.data;
        } catch (err) {
            throw new Error(`could not get movie ${id} , ${err}`);
        }
    }
}
export default MovieNetwork;