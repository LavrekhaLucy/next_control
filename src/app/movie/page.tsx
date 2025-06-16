import MoviesList from "@/components/movies-list/MoviesList";
import SideBar from "@/components/side-bar/SideBar";
import Header from "@/components/header/Header";


const MoviesMainPage = () => {
    return (
        <div>
            <Header/>
            <SideBar/>
            <MoviesList/>


        </div>
    );
};

export default MoviesMainPage;