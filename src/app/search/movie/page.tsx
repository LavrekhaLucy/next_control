import {SearchClient} from "@/components/search/SearchClient";
import Header from "@/components/header/Header";
import SideBar from "@/components/side-bar/SideBar";
import React from "react";


const SearchMoviePage = () => {
    return (
        <div>

            <Header/>
            <SideBar/>
            <SearchClient />


        </div>
    );
};

export default SearchMoviePage;