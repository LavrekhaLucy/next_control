'use client'
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/components/hooks/useRedux";
import { movieActions } from "@/slices/movieSlice";
import { useSearchParams, useRouter } from "next/navigation";

interface PaginationComponentProps {
    initialPage: number;
    initialGenreId?: number;
    initialSort?: string;
}


const PaginationComponent = ({ initialPage, initialGenreId, initialSort }: PaginationComponentProps) => {
    const dispatch = useAppDispatch();
    const searchParams = useSearchParams();
    const router = useRouter();

    const [currentPage, setCurrentPage] = useState(initialPage);
    const [hydrated, setHydrated] = useState(false);

    const moviesPage = useAppSelector(state => state.movieStoreSlice.moviesPage);
    const searchQuery = useAppSelector(state => state.movieStoreSlice.searchQuery);
    const totalSearchPages = useAppSelector(state => state.movieStoreSlice.totalSearchPages);

    useEffect(() => {
        setHydrated(true);
    }, []);

    useEffect(() => {
        if (!hydrated) return;
        const pageFromUrl = Number(searchParams.get("page") || "1");
        if (pageFromUrl !== currentPage) {
            setCurrentPage(pageFromUrl);
        }
    }, [searchParams, hydrated, currentPage]);

    if (!hydrated) return null;


    const currentGenreId = searchParams.get("genre") ? Number(searchParams.get("genre")) : initialGenreId;

    const totalPages = searchQuery
        ? totalSearchPages || 1
        : moviesPage?.total_pages || 1;

    const goToPage = (page: number) => {
        setCurrentPage(page);

        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        router.push(`?${params.toString()}`);

        if (searchQuery) {
            dispatch(movieActions.loadMoviesBySearch({
                query: searchQuery,
                page
            }));
        } else if (currentGenreId !== undefined && !isNaN(currentGenreId)) {

            dispatch(movieActions.loadMoviesByGenre({
                genreId: currentGenreId, // Тепер це буде 'number'
                page,
                sort: initialSort || "popularity.desc"
            }));
        } else {

            dispatch(movieActions.loadMovies(page.toString()));
        }
    };

    const createPageNumbers = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 10) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);

            if (currentPage > 4) pages.push("...");

            const start = Math.max(2, currentPage - 2);
            for (let i = start; i <= Math.min(totalPages - 1, currentPage + 2); i++) pages.push(i);

            if (currentPage < totalPages - 3) pages.push("...");

            pages.push(totalPages);
        }

        return pages;
    };

    const visiblePages = createPageNumbers();

    return (
        <div className="flex justify-center items-center gap-2 mt-14 mb-18 flex-wrap">
            <button
                className="px-3 py-1 border rounded hover:bg-purple-100 disabled:opacity-50"
                disabled={currentPage <= 1}
                onClick={() => goToPage(currentPage - 1)}>
                Previous
            </button>

            {visiblePages.map((page, index) =>
                typeof page === "number" ? (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`px-3 py-1 rounded border ${
                            page === currentPage
                                ? "bg-purple-600 text-white"
                                : "bg-white text-purple-600 hover:bg-purple-100"}`}>
                        {page}
                    </button>
                ) : (
                    <span key={`ellipsis-${index}`} className="px-2 text-gray-400 select-none">...</span>
                )
            )}

            <button
                className="px-3 py-1 border rounded hover:bg-purple-100 disabled:opacity-50"
                disabled={currentPage >= totalPages}
                onClick={() => goToPage(currentPage + 1)}>
                Next
            </button>
        </div>
    );
};

export default PaginationComponent;