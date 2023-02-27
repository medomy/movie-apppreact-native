import { Movie } from "../types/movie";

class Utils {
    static filterMovies(movies: Movie[], genreId: number | null) {
        if (!genreId) return movies;
        return movies.filter((movie) => movie.genre_ids.includes(genreId));
    }
}
export default Utils;