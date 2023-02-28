import { Genre } from "./Genre";
import { Movie } from "./movie";

/*
{
    "adult": false,
    "backdrop_path": "/jqFjgNnxpXIXWuPsyfqmcLXRo9p.jpg",
    "belongs_to_collection": null,
    "budget": 1200000,
    "genres": [
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 53,
            "name": "Thriller"
        }
    ],
    "homepage": "",
    "id": 500,
    "imdb_id": "tt0105236",
    "original_language": "en",
    "original_title": "Reservoir Dogs",
    "overview": "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
    "popularity": 40.464,
    "poster_path": "/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
    "production_companies": [
        {
            "id": 285,
            "logo_path": null,
            "name": "Live Entertainment",
            "origin_country": ""
        },
        {
            "id": 26198,
            "logo_path": null,
            "name": "Dog Eat Dog Productions",
            "origin_country": ""
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "1992-09-02",
    "revenue": 2859750,
    "runtime": 99,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "Every dog has his day.",
    "title": "Reservoir Dogs",
    "video": false,
    "vote_average": 8.14,
    "vote_count": 12715
}
*/
export interface MovieDetailed extends Movie {
    genres : Genre[],
}