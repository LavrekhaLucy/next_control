import {Link} from "react-router-dom";

const Menu = () => {
    return (


            <div>
                <h2 className="text-xl font-bold mb-4 space-y-6">Menu</h2>
                <nav className="space-y-6">

                    <Link to="/" className="block hover:text-yellow-300">Main</Link>
                    <Link to="/genre/movie/list" className="block hover:text-yellow-300">Genres</Link>
                    <Link to="/movie" className="block hover:text-yellow-300">Movies</Link>

                </nav>
            </div>



    );

};

export default Menu;