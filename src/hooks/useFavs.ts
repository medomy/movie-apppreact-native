// a hook to connect async storage with redux favourites

import { useDispatch } from "react-redux";
import AsyncStorageCache from "../services/asyncstorageCache";
import { setList } from "../store/toWatchSlice";
import { useEffect } from "react";

export function useFavs() {
    const dispatch = useDispatch();

    async function workWithData() {
        try {
            const favs_ids = await AsyncStorageCache.getToWatchMoviesAsyncStorage();
            if (favs_ids) dispatch(setList(favs_ids));
        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        workWithData();
    }, [])
}