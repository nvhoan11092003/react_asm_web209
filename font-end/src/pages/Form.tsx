

const Form = () => {
  return (
    <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title"> Form elements </h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Forms</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Form elements</li>
                </ol>
              </nav>
            </div>
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Default form</h4>
                    <p className="card-description"> Basic form layout </p>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Username</label>
                        <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Username"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password"/>
                      </div>
                      <div className="form-check form-check-flat form-check-primary">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input"/> Remember me </label>
                      </div>
                      <button type="submit" className="btn btn-primary mr-2">Submit</button>
                      <button className="btn btn-dark">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Horizontal Form</h4>
                    <p className="card-description"> Horizontal form layout </p>
                    <form className="forms-sample">
                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="exampleInputUsername2" placeholder="Username"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                          <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">Mobile</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="exampleInputMobile" placeholder="Mobile number"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="exampleInputPassword2" className="col-sm-3 col-form-label">Password</label>
                        <div className="col-sm-9">
                          <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">Re Password</label>
                        <div className="col-sm-9">
                          <input type="password" className="form-control" id="exampleInputConfirmPassword2" placeholder="Password"/>
                        </div>
                      </div>
                      <div className="form-check form-check-flat form-check-primary">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input"/> Remember me </label>
                      </div>
                      <button type="submit" className="btn btn-primary mr-2">Submit</button>
                      <button className="btn btn-dark">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Basic form elements</h4>
                    <p className="card-description"> Basic form elements </p>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Name"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail3">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword4">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleSelectGender">Gender</label>
                        <select className="form-control" id="exampleSelectGender">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>File upload</label>
                        <input type="file" name="img[]" className="file-upload-default"/>
                        <div className="input-group col-xs-12">
                          <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image"/>
                          <span className="input-group-append">
                            <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputCity1">City</label>
                        <input type="text" className="form-control" id="exampleInputCity1" placeholder="Location"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleTextarea1">Textarea</label>
                        <textarea className="form-control" id="exampleTextarea1" rows={4}></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary mr-2">Submit</button>
                      <button className="btn btn-dark">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Input size</h4>
                    <p className="card-description"> Add classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>. </p>
                    <div className="form-group">
                      <label>Large input</label>
                      <input type="text" className="form-control form-control-lg" placeholder="Username" aria-label="Username"/>
                    </div>
                    <div className="form-group">
                      <label>Default input</label>
                      <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
                    </div>
                    <div className="form-group">
                      <label>Small input</label>
                      <input type="text" className="form-control form-control-sm" placeholder="Username" aria-label="Username"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Select size</h4>
                    <p className="card-description"> Add classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>. </p>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Large select</label>
                      <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect2">Default select</label>
                      <select className="form-control" id="exampleFormControlSelect2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect3">Small select</label>
                      <select className="form-control form-control-sm" id="exampleFormControlSelect3">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Form