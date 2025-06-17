import {getMovie} from "@/services/api.service";
import {MovieInfo} from "@/components/movie-info/MovieInfo";

interface PageProps {
    params: { id: string }
}

export default async function MovieDetailsPage({params}: PageProps) {

    const movie = await getMovie(Number(params.id));

    if (!movie) {
        return <div>Movie not found</div>;
    }
    return <MovieInfo movie={movie} />;
}

