const ProfileActions = () => {
  return (
    <li className="nav-item dropdown">
    <a className="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
      <div className="navbar-profile">
        <img className="img-xs rounded-circle" src="../../public/assets/images/faces/face15.jpg" alt="" />
        <p className="mb-0 d-none d-sm-block navbar-profile-name">Henry Klein</p>
        <i className="mdi mdi-menu-down d-none d-sm-block"></i>
      </div>
    </a>
    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
      <h6 className="p-3 mb-0">Profile</h6>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item preview-item">
        <div className="preview-thumbnail">
          <div className="preview-icon bg-dark rounded-circle">
            <i className="mdi mdi-settings text-success"></i>
          </div>
        </div>
        <div className="preview-item-content">
          <p className="preview-subject mb-1">Settings</p>
        </div>
      </a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item preview-item">
        <div className="preview-thumbnail">
          <div className="preview-icon bg-dark rounded-circle">
            <i className="mdi mdi-logout text-danger"></i>
          </div>
        </div>
        <div className="preview-item-content">
          <p className="preview-subject mb-1">Log out</p>
        </div>
      </a>
      <div className="dropdown-divider"></div>
      <p className="p-3 mb-0 text-center">Advanced settings</p>
    </div>
  </li>
  )
}

export default ProfileActions