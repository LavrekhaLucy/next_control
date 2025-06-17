import {GenreComponent} from "@/components/genres/GenreComponent";
import Header from "@/components/header/Header";
import SideBar from "@/components/side-bar/SideBar";
import React, {Suspense} from "react";
import PaginationComponent from "@/components/pagination/PaginationComponent";


type GenrePageProps = {
    searchParams:
        Promise<{
        genre?: string;
        page?: string;
        sort?: string;
    }>;
}

const GenreMovieListPage = async ({ searchParams }: GenrePageProps) => {

    const awaitedSearchParams = await searchParams;

    const initialGenreId = awaitedSearchParams.genre ? Number(awaitedSearchParams.genre) : undefined;
    const initialPage = Number(awaitedSearchParams.page || '1');
    const initialSort = awaitedSearchParams.sort || 'popularity.desc';

    return (
        <div className="min-h-screen bg-gray-50">
            <Header/>
            <SideBar/>

            <div className="pl-64 pt-20 p-6">

                <Suspense fallback={<div>Loading content...</div>}>
                    <GenreComponent/>
                </Suspense>

                <Suspense fallback={<div>Loading pagination...</div>}>
                    <PaginationComponent
                        initialPage={initialPage}
                        initialGenreId={initialGenreId}
                        initialSort={initialSort}
                    />
                </Suspense>
            </div>
        </div>
    );
};

export default GenreMovieListPage;