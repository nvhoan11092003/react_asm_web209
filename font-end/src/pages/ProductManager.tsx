

const ProductManager = () => {

  return (
    <div className="col-lg-12 grid-margin stretch-card" style={{marginTop: "80px"}}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title" style={{marginBottom: "20px"}}>Product List</h4>
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th> # </th>
                            <th> First name </th>
                            <th> Progress </th>
                            <th> Amount </th>
                            <th> Deadline </th>
                            <th style={{width: "20%"}}> Actions </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td> 1 </td>
                            <td> Herman Beck </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td> $ 77.99 </td>
                            <td> May 15, 2015 </td>
                            <td>
                            <button type="button" className="btn btn-outline-danger btn-icon-text">
                            <i className="mdi mdi-alert btn-icon-prepend"></i> Delete </button>
                            <button type="button" className="btn btn-outline-secondary btn-icon-text ml-2"> Edit <i className="mdi mdi-file-check btn-icon-append"></i>
                            </button>
                            </td>
                          </tr>
                          <tr>
                            <td> 2 </td>
                            <td> Messsy Adam </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "75%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td> $245.30 </td>
                            <td> July 1, 2015 </td>
                            <td>
                            <button type="button" className="btn btn-outline-danger btn-icon-text">
                            <i className="mdi mdi-alert btn-icon-prepend"></i> Delete </button>
                            <button type="button" className="btn btn-outline-secondary btn-icon-text ml-2"> Edit <i className="mdi mdi-file-check btn-icon-append"></i>
                            </button>
                            </td>
                          </tr>
                          <tr>
                            <td> 3 </td>
                            <td> John Richards </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "90%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td> $138.00 </td>
                            <td> Apr 12, 2015 </td>
                            <td>
                            <button type="button" className="btn btn-outline-danger btn-icon-text">
                            <i className="mdi mdi-alert btn-icon-prepend"></i> Delete </button>
                            <button type="button" className="btn btn-outline-secondary btn-icon-text ml-2"> Edit <i className="mdi mdi-file-check btn-icon-append"></i>
                            </button>
                            </td>
                          </tr>
                          <tr>
                            <td> 4 </td>
                            <td> Peter Meggik </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" style={{width: "50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td> $ 77.99 </td>
                            <td> May 15, 2015 </td>
                            <td>
                            <button type="button" className="btn btn-outline-danger btn-icon-text">
                            <i className="mdi mdi-alert btn-icon-prepend"></i> Delete </button>
                            <button type="button" className="btn btn-outline-secondary btn-icon-text ml-2"> Edit <i className="mdi mdi-file-check btn-icon-append"></i>
                            </button>
                            </td>
                          </tr>
                          <tr>
                            <td> 5 </td>
                            <td> Edward </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "35%"}} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td> $ 160.25 </td>
                            <td> May 03, 2015 </td>
                            <td>
                            <button type="button" className="btn btn-outline-danger btn-icon-text">
                            <i className="mdi mdi-alert btn-icon-prepend"></i> Delete </button>
                            <button type="button" className="btn btn-outline-secondary btn-icon-text ml-2"> Edit <i className="mdi mdi-file-check btn-icon-append"></i>
                            </button>
                            </td>
                          </tr>
                          <tr>
                            <td> 6 </td>
                            <td> John Doe </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" style={{width: "65%"}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td> $ 123.21 </td>
                            <td> April 05, 2015 </td>
                            <td>
                            <button type="button" className="btn btn-outline-danger btn-icon-text">
                            <i className="mdi mdi-alert btn-icon-prepend"></i> Delete </button>
                            <button type="button" className="btn btn-outline-secondary btn-icon-text ml-2"> Edit <i className="mdi mdi-file-check btn-icon-append"></i>
                            </button>
                            </td>
                          </tr>
                          <tr>
                            <td> 7 </td>
                            <td> Henry Tom </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "20%"}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td> $ 150.00 </td>
                            <td> June 16, 2015 </td>
                            <td>
                            <button type="button" className="btn btn-outline-danger btn-icon-text">
                            <i className="mdi mdi-alert btn-icon-prepend"></i> Delete </button>
                            <button type="button" className="btn btn-outline-secondary btn-icon-text ml-2"> Edit <i className="mdi mdi-file-check btn-icon-append"></i>
                            </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default ProductManager