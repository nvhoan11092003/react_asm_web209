
import Logo from "./Logo"
import MenuAdmin from "./MenuAdmin"
import ProfileDesc from "./ProfileDesc"

const SideBar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
     <Logo/>
      <ul className="nav">
      <ProfileDesc/>
      <MenuAdmin/>  
      </ul>
    </nav>
  )
}

export default SideBar