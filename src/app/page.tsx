import React from "react";
import Header from "@/components/header/Header";
import SideBar from "@/components/side-bar/SideBar";
import {MainComponent} from "@/components/main/MainComponent";
import PaginationComponent from "@/components/pagination/PaginationComponent";


const AppMainPage = () => {

    return (
        <div className=" bg-gray-50">
            <Header/>
            <SideBar/>

            <main className="pl-64 pt-20 p-6">
                <MainComponent/>
                <PaginationComponent/>
            </main>
        </div>
    );
};

export default AppMainPage;
