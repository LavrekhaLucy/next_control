'use client'
import {useEffect} from 'react';
import {movieActions} from "@/slices/movieSlice";
import {MovieDetailCard} from "@/components/movies-detail-card/MovieDetailCard";
import {useAppDispatch, useAppSelector} from "@/components/hooks/useRedux";
import {useSearchParams} from "next/navigation";


const MoviesList = () => {

    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movieStoreSlice.movies);
    const searchParams = useSearchParams();

    useEffect(()=>{

        if (!searchParams) return;
        const currentPage = searchParams.get("page") || '1';
        dispatch(movieActions.loadMovies(currentPage));

    },[dispatch,searchParams]);



    return (
        <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center', flexDirection: 'row',flexWrap: 'wrap',gap:'30px',margin:'20px'}}>

                {movies &&
                movies.map((movie) => <MovieDetailCard key={movie.id} movie={movie}/>)
            }

        </div>

    );
};

export default MoviesList;

