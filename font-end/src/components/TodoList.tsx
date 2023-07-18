const TodoList = () => {
  return (
    <div className="col-md-12 col-xl-4 grid-margin stretch-card">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">To do list</h4>
        <div className="add-items d-flex">
          <input type="text" className="form-control todo-list-input" placeholder="enter task.."/>
          <button className="add btn btn-primary todo-list-add-btn">Add</button>
        </div>
        <div className="list-wrapper">
          <ul className="d-flex flex-column-reverse text-white todo-list todo-list-custom">
            <li>
              <div className="form-check form-check-primary">
                <label className="form-check-label">
                  <input className="checkbox" type="checkbox"/> Create invoice </label>
              </div>
              <i className="remove mdi mdi-close-box"></i>
            </li>
            <li>
              <div className="form-check form-check-primary">
                <label className="form-check-label">
                  <input className="checkbox" type="checkbox"/> Meeting with Alita </label>
              </div>
              <i className="remove mdi mdi-close-box"></i>
            </li>
            <li className="completed">
              <div className="form-check form-check-primary">
                <label className="form-check-label">
                  <input className="checkbox" type="checkbox" /> Prepare for presentation </label>
              </div>
              <i className="remove mdi mdi-close-box"></i>
            </li>
            <li>
              <div className="form-check form-check-primary">
                <label className="form-check-label">
                  <input className="checkbox" type="checkbox"/> Plan weekend outing </label>
              </div>
              <i className="remove mdi mdi-close-box"></i>
            </li>
            <li>
              <div className="form-check form-check-primary">
                <label className="form-check-label">
                  <input className="checkbox" type="checkbox"/> Pick up kids from school </label>
              </div>
              <i className="remove mdi mdi-close-box"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TodoList