import CreateNew from "./CreateNew"
import MenuToggler from "./MenuToggler"
import MessNotification from "./MessNotification"
import NavbarToggle from "./NavbarToggle"
import Notification from "./Notification"
import ProfileActions from "./ProfileActions"
import Search from "./Search"

const NavBar = () => {
  return (
    <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <a className="navbar-brand brand-logo-mini"><img src="../../public/assets/images/logo-mini.svg" alt="logo" /></a>
        </div>
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <NavbarToggle/>
          <Search/>
          <ul className="navbar-nav navbar-nav-right">
            <CreateNew/>
            <MessNotification/>
           <Notification/>
            <ProfileActions/>
          </ul>
          <MenuToggler/>
        </div>
      </nav>
  )
}

export default NavBar