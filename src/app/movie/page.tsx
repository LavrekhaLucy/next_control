import MoviesList from "@/components/movies-list/MoviesList";
import SideBar from "@/components/side-bar/SideBar";
import Header from "@/components/header/Header";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import React, {Suspense} from "react";

type SearchPageProps = {
    searchParams:Promise< {
        page: string;
        genre: string;
    }>;
}
const MoviesMainPage =async ({ searchParams }: SearchPageProps) => {

    const awaitedSearchParams = await searchParams;

    const initialPage = Number(awaitedSearchParams.page || '1');
    const initialGenreId = awaitedSearchParams.genre ? Number(awaitedSearchParams.genre) : undefined;

    return (
        <div>
            <Header/>
            <SideBar/>
            <div className="pl-64 pt-20 p-6">

                <Suspense fallback={<div>Loading pagination...</div>}>
                    <MoviesList/>
                    <PaginationComponent
                        initialPage={initialPage}
                        initialGenreId={initialGenreId}
                    />
                </Suspense>
            </div>

        </div>
    );
};

export default MoviesMainPage;