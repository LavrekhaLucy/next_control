import MoviesList from "@/components/movies-list/MoviesList";
import SideBar from "@/components/side-bar/SideBar";
import Header from "@/components/header/Header";
import PaginationComponent from "@/components/pagination/PaginationComponent";


const MoviesMainPage = () => {
    return (
        <div>
            <Header/>
            <SideBar/>
            <div className="pl-64 pt-20 p-6">
                <MoviesList/>
                <PaginationComponent/>
            </div>

        </div>
    );
};

export default MoviesMainPage;