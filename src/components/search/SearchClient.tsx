// components/search/SearchClient.tsx
'use client';

import { useAppSelector } from "@/components/hook/useRedux";
import { MovieDetailCard } from "@/components/movies-detail-card/MovieDetailCard";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import React from "react";

export const SearchClient = () => {
    const searchResults = useAppSelector(state => state.movieStoreSlice.searchResults);
    const hasSearch = searchResults.length > 0;



    return (
        <div>

            {hasSearch && (
                <section>
                    <h2 className="text-2xl font-semibold text-center text-gray-800">Search results:</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        {searchResults.map(movie => (
                            <MovieDetailCard key={movie.id} movie={movie} />
                        ))}
                    </div>

                </section>
            )}
            <PaginationComponent/>
        </div>
    );
}