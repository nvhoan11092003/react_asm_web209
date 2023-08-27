import { Link } from "react-router-dom"
import NavbarDrop from "./NavbarDrop"
import SearchAdmin from "./SearchAdmin"


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            <SearchAdmin />
            <Link className="ml-24 p-2 bg-blue-500 text-white rounded-xl " to="/">go client Page</Link>
            <NavbarDrop />
        </nav>
    )
}

export default NavBar