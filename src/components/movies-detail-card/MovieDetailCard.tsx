'use client'
import type { FC } from "react";
import StarRatings from "react-star-ratings";
import {useGenreNames} from "@/components/hook/useGenreNames";
import {IMAGE_BASE_URL} from "@/components/user-info/UserInfo";
import {IMovie} from "@/models/IMovies/IMovie";
import Link from "next/link";
import Image from "next/image";


type MoviePropsType = {
    movie: IMovie;
};

export const MovieDetailCard: FC<MoviePropsType> = ({ movie }) => {
    const genreNames = useGenreNames(movie.genre_ids ?? []);

    return (
        <Link href={`/movie/${movie.id}`}>
            <div
                className="w-48 h-[400px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer
             transform transition-transform duration-[2000ms] hover:scale-110 hover:shadow-2xl"
            >

                {movie.poster_path ? (
                    <Image
                        src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={400}
                        height={600}
                        style={{ borderRadius: '1rem' }}
                    />
                ) : (
                    <div style={{ width: '400px', height: '600px', background: '#eee', borderRadius: '1rem' }}>
                        No Image
                    </div>
                )}


                <div className="p-3 text-center">
                    <h3 className="text-base font-semibold text-gray-800 truncate">
                        {movie.title}
                    </h3>
                    <p className="text-base font-semibold text-gray-800 truncate">
                        {movie.release_date}
                    </p>
                    <p className="text-sm text-gray-600 truncate">
                        {genreNames.join(", ")}
                    </p>

                    <StarRatings
                        rating={movie.vote_average / 2}
                        starRatedColor="#facc15"
                        starEmptyColor="#e5e7eb"
                        starDimension="20px"
                        starSpacing="2px"
                        numberOfStars={5}
                        name={`rating-${movie.id}`}
                    />
                </div>
            </div>
        </Link>
    );
};
