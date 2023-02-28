import { Movie } from "../types/movie";

class Utils {
    static filterMovies(movies: Movie[], genreId: number | null) {
        if (!genreId) return movies;
        return movies.filter((movie) => movie.genre_ids.includes(genreId));
    }

    // get if movie is added to favourites

    static isAddedToWatchList(movies_ids: number[], id: number) {
        return movies_ids.includes(id);
    }
}
export default Utils;