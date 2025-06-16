import {GenreComponent} from "@/components/genres/GenreComponent";
import Header from "@/components/header/Header";
import SideBar from "@/components/side-bar/SideBar";
import React from "react";


const GenreMovieListPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header/>
            <GenreComponent/>
            <SideBar/>






        </div>
    );
};

export default GenreMovieListPage;