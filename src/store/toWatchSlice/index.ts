import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import AsyncStorageCache from '../../services/asyncstorageCache'

interface ToWatchSlice {
    toWatchIds: number[]
}

const initialState: ToWatchSlice = {
    toWatchIds: []
}

export const toWatchSlice = createSlice({
    name: 'toWatch',
    initialState,
    reducers: {
        addToList: (state, payload: PayloadAction<number>) => {
            state.toWatchIds = [...state.toWatchIds, payload.payload];
            AsyncStorageCache.setToWatchMoviesAsyncStorage(state.toWatchIds);
        },
        removeFromList: (state, payload: PayloadAction<number>) => {
            state.toWatchIds = state.toWatchIds.filter((id) => id !== payload.payload);
            AsyncStorageCache.setToWatchMoviesAsyncStorage(state.toWatchIds);
        },
        setList: (state, payload: PayloadAction<number[]>) => {
            state.toWatchIds = payload.payload;
        }
    }
})

export const { addToList, removeFromList, setList } = toWatchSlice.actions;

export default toWatchSlice.reducer;