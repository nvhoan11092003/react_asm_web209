
import Logo from "./Logo"
import Menu from "./Menu"
import ProfileDesc from "./ProfileDesc"

const SideBar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
     <Logo/>
      <ul className="nav">
      <ProfileDesc/>
      <Menu/>  
      </ul>
    </nav>
  )
}

export default SideBar