import {useAppSelector} from "@/components/hooks/useRedux";


export const useGenreNames = (genreIds: number[]): string[] => {
    const genres = useAppSelector((state) => state.genreStoreSlice.genres);

    return genreIds
        .map((id) => genres.find((genre) => genre.id === id)?.name)
        .filter(Boolean) as string[];
};