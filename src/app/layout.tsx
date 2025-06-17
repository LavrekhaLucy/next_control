import type {Metadata} from 'next';
import './globals.css';
import React from "react";
import Providers from "@/providers/Providers";


export const metadata: Metadata = {
    title: 'Movies App',
    description: 'Discover amazing movies',
};

export default function RootLayout({children,}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body >
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
