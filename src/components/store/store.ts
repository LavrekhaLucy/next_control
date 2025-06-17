import {configureStore} from "@reduxjs/toolkit";
import movieSlice from "@/slices/movieSlice";
import movieInfoSlice from "@/slices/movieInfoSlice";
import {genreSlice} from "@/slices/genreSlice";


export const store = configureStore({
    reducer: {
        movieStoreSlice:movieSlice.reducer,
        movieInfoStoreSlice:movieInfoSlice.reducer,
        genreStoreSlice:genreSlice.reducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


