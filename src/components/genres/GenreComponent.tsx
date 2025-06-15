import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import GenreBadge from "./GenreBadge";
import {genreActions} from "../../slices/genreSlice.ts";
import {movieActions} from "../../slices/movieSlice.ts";
import {MovieDetailCard} from "../movies-detail-card/MovieDetailCard.tsx";
import * as React from "react";


export const GenreComponent = () => {
    const dispatch = useAppDispatch();
    const genres = useAppSelector((state) => state.genreStoreSlice.genres);
    const moviesByGenre = useAppSelector((state) => state.movieStoreSlice.moviesByGenre);

    const [searchParams, setSearchParams] = useSearchParams();
    const genreId = Number(searchParams.get("genreId"));
    const page = Number(searchParams.get("page") || "1");
    const sort = searchParams.get("sort") || "popularity.desc";

    useEffect(() => {
        dispatch(genreActions.loadGenres());
    }, [dispatch]);

    useEffect(() => {
        if (genreId) {
            dispatch(movieActions.loadMoviesByGenre({ genreId, page, sort }));
        }
    }, [dispatch, genreId, page, sort]);

    const handleGenreClick = (genreId: number) => {
        setSearchParams({ genreId: genreId.toString(), page: "1", sort });
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = e.target.value;
        setSearchParams({ genreId: genreId.toString(), page: "1", sort: newSort });
    };

    if (!genres || genres.length === 0) {
        return <p className="text-center text-gray-500">Loading genres...</p>;
    }

    return (
        <div className="p-4">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {genres.map((genre) => (
                    <GenreBadge
                        key={genre.id}
                        id={genre.id}
                        name={genre.name}
                        onClick={() => handleGenreClick(genre.id)}
                    />
                ))}
            </div>

            <div className="flex justify-end mb-4">
                <label className="mr-2 text-gray-700">Sort by:</label>
                <select
                    value={sort}
                    onChange={handleSortChange}
                    className="border rounded px-2 py-1"
                >
                    <option value="popularity.desc"> Popularity ↑ </option>
                    <option value="popularity.asc"> Popularity ↓ </option>
                    <option value="vote_average.desc"> Rating ↑ </option>
                    <option value="vote_average.asc"> Rating ↓ </option>
                    <option value="release_date.desc"> Newest </option>
                    <option value="release_date.asc"> Oldest </option>
                </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {moviesByGenre.map((movie) => (
                    <MovieDetailCard key={movie.id} movie={movie} />
                ))}
            </div>

        </div>
    );
};
