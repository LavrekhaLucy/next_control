import React from "react";
import Header from "@/components/header/Header";
import SideBar from "@/components/side-bar/SideBar";
import {MainComponent} from "@/components/main/MainComponent";


const AppMainPage = () => {

    return (
        <div className=" bg-gray-50">

            <Header/>
            <SideBar/>
            <MainComponent/>


        </div>
    );
};

export default AppMainPage;
