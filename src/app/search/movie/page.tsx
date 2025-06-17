import {SearchComponent} from "@/components/search/SearchComponent";
import Header from "@/components/header/Header";
import SideBar from "@/components/side-bar/SideBar";
import React from "react";
import PaginationComponent from "@/components/pagination/PaginationComponent";


const SearchMoviePage = () => {
    return (
        <div>
            <Header/>
            <SideBar/>
            <div className="pl-64 pt-20 p-6">
                <SearchComponent />
                <PaginationComponent/>
            </div>

        </div>
    );
};

export default SearchMoviePage;