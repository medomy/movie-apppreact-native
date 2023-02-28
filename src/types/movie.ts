/*
"adult": false,
            "backdrop_path": "/irwQcdjwtjLnaA0iErabab9PrmG.jpg",
            "genre_ids": [
                28,
                12,
                53
            ],
            "id": 646389,
            "original_language": "en",
            "original_title": "Plane",
            "overview": "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
            "popularity": 3057.298,
            "poster_path": "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
            "release_date": "2023-01-12",
            "title": "Plane",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 626
        }
*/
export interface Movie {
    adult: boolean,
    backdrop_path: string | null,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string | null,
    release_date: string,
    title: string,
    vote_average: number,
    vote_count: number,
    video: boolean
}