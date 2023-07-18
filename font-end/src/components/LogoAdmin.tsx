import { NavLink } from "react-router-dom"

const LogoAdmin = () => {
    return (
        <><NavLink to="/admin" className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </NavLink></>
    )
}

export default LogoAdmin