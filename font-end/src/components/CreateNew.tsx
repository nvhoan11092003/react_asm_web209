const CreateNew = () => {
  return (
    <li className="nav-item dropdown d-none d-lg-block">
    <a className="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" href="#">+ Create New Project</a>
    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="createbuttonDropdown">
      <h6 className="p-3 mb-0">Projects</h6>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item preview-item">
        <div className="preview-thumbnail">
          <div className="preview-icon bg-dark rounded-circle">
            <i className="mdi mdi-file-outline text-primary"></i>
          </div>
        </div>
        <div className="preview-item-content">
          <p className="preview-subject ellipsis mb-1">Software Development</p>
        </div>
      </a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item preview-item">
        <div className="preview-thumbnail">
          <div className="preview-icon bg-dark rounded-circle">
            <i className="mdi mdi-web text-info"></i>
          </div>
        </div>
        <div className="preview-item-content">
          <p className="preview-subject ellipsis mb-1">UI Development</p>
        </div>
      </a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item preview-item">
        <div className="preview-thumbnail">
          <div className="preview-icon bg-dark rounded-circle">
            <i className="mdi mdi-layers text-danger"></i>
          </div>
        </div>
        <div className="preview-item-content">
          <p className="preview-subject ellipsis mb-1">Software Testing</p>
        </div>
      </a>
      <div className="dropdown-divider"></div>
      <p className="p-3 mb-0 text-center">See all projects</p>
    </div>
  </li>
  )
}

export default CreateNew