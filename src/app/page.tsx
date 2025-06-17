import PaginationComponent from '@/components/pagination/PaginationComponent';
import {Suspense} from 'react';
import Header from "@/components/header/Header";
import SideBar from "@/components/side-bar/SideBar";
import {MainComponent} from "@/components/main/MainComponent";


type MainPageProps = {
    searchParams:
        Promise< {
        page: string;
        genre: string;
          }>;
}
const AppMainPage = async ({ searchParams }: MainPageProps) => {

    const awaitedSearchParams = await searchParams ;

    const initialPage = Number(awaitedSearchParams.page || '1');
    const initialGenreId = awaitedSearchParams.genre ? Number(awaitedSearchParams.genre) : undefined;

    return (
        <div className=" bg-gray-50">
            <Header/>
            <SideBar/>
            <main className="pl-64 pt-20 p-6">
              <MainComponent/>
                <Suspense fallback={<div>Loading pagination...</div>}>
                    <PaginationComponent
                        initialPage={initialPage}
                        initialGenreId={initialGenreId}
                        />
                </Suspense>
            </main>
        </div>
    );
};

export default AppMainPage;
