'use client'
import {useEffect} from "react";
import {genreActions} from "@/slices/genreSlice";
import {IMAGE_BASE_URL} from "@/components/user-info/UserInfo";
import {useAppDispatch, useAppSelector} from "@/components/hook/useRedux";
import Image from "next/image";
import {IMovie} from "@/models/IMovies/IMovie";


interface MovieInfoPageProps {
    movie: IMovie;
}

export const MovieInfo = ({movie}:MovieInfoPageProps) => {

    const dispatch=useAppDispatch();


    // const{id} = useParams();
    // const movie = useAppSelector(state => state.movieInfoStoreSlice.movie);

    const genres = useAppSelector(state => state.genreStoreSlice.genres);


    // useEffect(() => {
    //     if (id) dispatch(movieInfoActions.loadMovie(Number(id)));
    // }, [dispatch, id]);

    useEffect(() => {
        if (!genres || genres.length === 0) {
            dispatch(genreActions.loadGenres());
        }
    }, [dispatch, genres]);

    if (!movie) return <p>Loading...</p>;



    // interface MovieInfoPageProps {
    //     movie: IMovie;
    // }
    //
    // export const MovieInfo = ({ movie }: MovieInfoPageProps) => {
    //     const dispatch = useAppDispatch();
    //     const genres = useAppSelector(state => state.genreStoreSlice.genres);
    //
    //     useEffect(() => {
    //         if (!genres || genres.length === 0) {
    //             dispatch(genreActions.loadGenres());
    //         }
    //     }, [dispatch, genres]);


    return (
        <div>
            <div style={{
                display: 'flex',
                gap: '2rem',
                padding: '2rem',
                border: '2px solid #003399',
                borderRadius: '1.5rem',
                background: '#f2e7f6',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
                <Image
                    src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
                    alt={movie.title}
                    style={{ borderRadius: '1rem' }}
                    width={400}
                    height={750}
                />

                <div>
                    <h1 style={{ fontSize: '2rem', color: '#003399' }}> {movie.title} </h1>
                    <p><strong>Overview:</strong> {movie.overview} </p>
                    <p><strong>Popularity:</strong> {movie.popularity} </p>
                    <p><strong>Rating:</strong> {movie.vote_average} </p>
                    <p><strong>Original Language:</strong> {movie.original_language} </p>
                    <p><strong>Original title:</strong> {movie.original_title} </p>
                    <p><strong>Release date:</strong> {movie.release_date} </p>
                    <p><strong>Genres:</strong> {movie.genres?.map((g) => g.name).join(", ")}</p>


                </div>




            </div>

        </div>

    );
};

