const MessNotification = () => {
  return (
    <li className="nav-item dropdown border-left">
              <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <i className="mdi mdi-email"></i>
                <span className="count bg-success"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                <h6 className="p-3 mb-0">Messages</h6>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="../../public/assets/images/faces/face4.jpg" alt="image" className="rounded-circle profile-pic"/>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">Mark send you a message</p>
                    <p className="text-muted mb-0"> 1 Minutes ago </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="../../public/assets/images/faces/face2.jpg" alt="image" className="rounded-circle profile-pic" />
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">Cregh send you a message</p>
                    <p className="text-muted mb-0"> 15 Minutes ago </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="../../public/assets/images/faces/face3.jpg" alt="image" className="rounded-circle profile-pic"/>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">Profile picture updated</p>
                    <p className="text-muted mb-0"> 18 Minutes ago </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <p className="p-3 mb-0 text-center">4 new messages</p>
              </div>
            </li>
  )
}

export default MessNotification