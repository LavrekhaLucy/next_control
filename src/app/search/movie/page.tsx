import {SearchComponent} from "@/components/search/SearchComponent";
import Header from "@/components/header/Header";
import SideBar from "@/components/side-bar/SideBar";
import React, {Suspense} from "react";
import PaginationComponent from "@/components/pagination/PaginationComponent";

type SearchPageProps = {
    searchParams:Promise< {
        page: string;
        genre: string;
         }>;
}
const SearchMoviePage = async ({ searchParams }: SearchPageProps) => {
    const awaitedSearchParams = await searchParams;

    const initialPage = Number(awaitedSearchParams.page || '1');
    const initialGenreId = awaitedSearchParams.genre ? Number(awaitedSearchParams.genre) : undefined;

    return (
        <div>
            <Header/>
            <SideBar/>
            <div className="pl-64 pt-20 p-6">
                <SearchComponent />

                <Suspense fallback={<div>Loading pagination...</div>}>
                    <PaginationComponent
                        initialPage={initialPage}
                        initialGenreId={initialGenreId}
                    />
                </Suspense>

            </div>

        </div>
    );
};

export default SearchMoviePage;