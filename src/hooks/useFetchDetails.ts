import { useEffect, useState } from "react";
import { MovieDetailed } from "../types/mevieDetailed";
import MovieNetwork from "../services/movies";

export function useFetchDetails(id: number) {
    const [movie, setMovie] = useState<MovieDetailed | null>(null);
    async function fetchMovie(id: number) {
        try {
            const _movie = await MovieNetwork.getMovieById(id);
            setMovie(_movie);
        } catch (err) {
            console.warn(err);
        }
    }
    useEffect(() => {
        fetchMovie(id);
    }, [])
    return movie;
}