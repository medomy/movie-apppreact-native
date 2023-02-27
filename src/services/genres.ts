import networkInstance from "../network";
import { Genre } from "../types/Genre";
import AsyncStorageCache from "./asyncstorageCache";

class GenresNetwork {
    static async getGenres(): Promise<Genre[]> {
        try {
            const generesData = await networkInstance.get("/genre/movie/list", {
                params: {
                    language: "en-US"
                }
            })
            await AsyncStorageCache.cacheGenres(generesData.data.genres);
            return generesData.data.genres;
        } catch (err) {
            throw new Error(`Could not retrieve generes from db , ${err}`)
        }
    }
}
export default GenresNetwork;