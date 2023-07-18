import NavbarDrop from "./NavbarDrop"
import SearchAdmin from "./SearchAdmin"


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            <SearchAdmin />
            <NavbarDrop />
        </nav>
    )
}

export default NavBar