import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar"
import SideBar from "../../components/SideBar"
import Footer from "../../components/Footer"

const AdminLayout = () => {
  return (
    <div>
        <div className="container-scroller">
            <SideBar/>
            <div className="container-fluid page-body-wrapper">
            <NavBar/>
            <Outlet /> 
            
            </div>
            
        </div>
       <Footer/>
    </div>
  )
}

export default AdminLayout