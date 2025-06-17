import { getMovie } from "@/services/api.service";
import { MovieInfo } from "@/components/movie-info/MovieInfo";

type PageParams = {
    params: Promise<{ id: string }>;
};

export default async function MovieDetailsPage({ params }: PageParams) {
    const { id } = await params;
    const movie = await getMovie(Number(id));

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return <MovieInfo movie={movie} />;
}

