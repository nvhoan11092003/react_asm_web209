const Notification = () => {
  return (
    <li className="nav-item dropdown border-left">
    <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
      <i className="mdi mdi-bell"></i>
      <span className="count bg-danger"></span>
    </a>
    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
      <h6 className="p-3 mb-0">Notifications</h6>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item preview-item">
        <div className="preview-thumbnail">
          <div className="preview-icon bg-dark rounded-circle">
            <i className="mdi mdi-calendar text-success"></i>
          </div>
        </div>
        <div className="preview-item-content">
          <p className="preview-subject mb-1">Event today</p>
          <p className="text-muted ellipsis mb-0"> Just a reminder that you have an event today </p>
        </div>
      </a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item preview-item">
        <div className="preview-thumbnail">
          <div className="preview-icon bg-dark rounded-circle">
            <i className="mdi mdi-settings text-danger"></i>
          </div>
        </div>
        <div className="preview-item-content">
          <p className="preview-subject mb-1">Settings</p>
          <p className="text-muted ellipsis mb-0"> Update dashboard </p>
        </div>
      </a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item preview-item">
        <div className="preview-thumbnail">
          <div className="preview-icon bg-dark rounded-circle">
            <i className="mdi mdi-link-variant text-warning"></i>
          </div>
        </div>
        <div className="preview-item-content">
          <p className="preview-subject mb-1">Launch Admin</p>
          <p className="text-muted ellipsis mb-0"> New admin wow! </p>
        </div>
      </a>
      <div className="dropdown-divider"></div>
      <p className="p-3 mb-0 text-center">See all notifications</p>
    </div>
  </li>
  )
}

export default Notification