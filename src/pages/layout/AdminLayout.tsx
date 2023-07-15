import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar"
import SideBar from "../../components/SideBar"
import FooterAdmin from "../../components/FooterAdmin"
import LinkAdmin from "../../components/LinkAdmin"


const AdminLayout = () => {
  return (
   <>
     <LinkAdmin/>
    <div>
        <div className="container-scroller">
            <SideBar/>
            <div className="container-fluid page-body-wrapper">
            <NavBar/>
            <Outlet /> 
            
            </div>
            
        </div>
       <FooterAdmin/>
    </div>
   </>
  )
}

export default AdminLayout