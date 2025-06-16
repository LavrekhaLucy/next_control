'use client'

import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/components/hook/useRedux";
import {movieActions} from "@/slices/movieSlice";
import {MovieDetailCard} from "@/components/movies-detail-card/MovieDetailCard";
import PaginationComponent from "@/components/pagination/PaginationComponent";


export const MainComponent = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector((state) => state.movieStoreSlice.movies);

       useEffect(() => {
        dispatch(movieActions.loadMovies('1'));
    }, [dispatch]);


    return (


        <main className="p-6">
                    <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
                Welcome to The Movies App
            </h1>

            <section className="mb-10">
                <h2 className="text-xl font-bold mb-4 text-gray-700">Popular Movies</h2>

                {movies && movies.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {movies.slice(0, 8).map((movie) => (
                            <MovieDetailCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">Loading movies...</p>
                )}
            </section>
             <PaginationComponent/>

        </main>

    );
};
























