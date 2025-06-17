'use client'
import React from "react";
import Menu from "@/components/menu/Menu";

const SideBar = () => {

    return (
        <aside className="fixed left-0 top-18 w-64 h-screen bg-gradient-to-b from-purple-900 to-blue-900 text-white p-4 z-50 overflow-y-auto"
               style={{ height: 'calc(100vh - 5rem)' }}>
            <Menu/>
        </aside>
    );
};

export default SideBar;