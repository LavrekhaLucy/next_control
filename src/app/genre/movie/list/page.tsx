import {GenreComponent} from "@/components/genres/GenreComponent";
import Header from "@/components/header/Header";
import SideBar from "@/components/side-bar/SideBar";
import React from "react";
import PaginationComponent from "@/components/pagination/PaginationComponent";


const GenreMovieListPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header/>
            <SideBar/>

            <div className="pl-64 pt-20 p-6">
                <GenreComponent/>
                <PaginationComponent/>
            </div>

        </div>
    );
};

export default GenreMovieListPage;