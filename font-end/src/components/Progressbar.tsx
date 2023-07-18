const Progressbar = () => {
    return (
        <div className="row">


            <div className="col-lg-6 mb-4">


                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                    </div>
                    <div className="card-body">
                        <h4 className="small font-weight-bold">Server Migration <span
                            className="float-right">20%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }}
                                aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                        <h4 className="small font-weight-bold">Sales Tracking <span
                            className="float-right">40%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "40%" }}
                                aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                        <h4 className="small font-weight-bold">Customer Database <span
                            className="float-right">60%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={{ width: "60%" }}
                                aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                        <h4 className="small font-weight-bold">Payout Details <span
                            className="float-right">80%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }}
                                aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                        <h4 className="small font-weight-bold">Account Setup <span
                            className="float-right">Complete!</span></h4>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }}
                                aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                </div>



            </div>

            <div className="col-lg-6 mb-4">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card card shadow mb-4">
                        <div className="card-body card-header py-3">
                            <h4 className="card-title" style={{ marginBottom: "20px" }}>Product List</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th> # </th>
                                            <th> First name </th>
                                            <th> Amount </th>
                                            <th> Deadline </th>
                                            <th style={{ width: "20%" }}> Actions </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td> Herman Beck </td>

                                            <td> $ 77.99 </td>
                                            <td> May 15, 2015 </td>
                                            <td>
                                                <button type="button" className="btn btn-outline-info">
                                                    <i className="mdi mdi-alert "></i> ViewDetail </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td> Messsy Adam </td>

                                            <td> $245.30 </td>
                                            <td> July 1, 2015 </td>
                                            <td>
                                                <button type="button" className="btn btn-outline-info">
                                                    <i className="mdi mdi-alert "></i> ViewDetail </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 3 </td>
                                            <td> John Richards </td>

                                            <td> $138.00 </td>
                                            <td> Apr 12, 2015 </td>
                                            <td>
                                                <button type="button" className="btn btn-outline-info">
                                                    <i className="mdi mdi-alert "></i> ViewDetail </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 4 </td>
                                            <td> Peter Meggik </td>

                                            <td> $ 77.99 </td>
                                            <td> May 15, 2015 </td>
                                            <td>
                                                <button type="button" className="btn btn-outline-info">
                                                    <i className="mdi mdi-alert "></i> ViewDetail </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 5 </td>
                                            <td> Edward </td>

                                            <td> $ 160.25 </td>
                                            <td> May 03, 2015 </td>
                                            <td>
                                                <button type="button" className="btn btn-outline-info">
                                                    <i className="mdi mdi-alert "></i> ViewDetail </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 6 </td>
                                            <td> John Doe </td>

                                            <td> $ 123.21 </td>
                                            <td> April 05, 2015 </td>
                                            <td>
                                                <button type="button" className="btn btn-outline-info">
                                                    <i className="mdi mdi-alert "></i> ViewDetail </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 7 </td>
                                            <td> Henry Tom </td>

                                            <td> $ 150.00 </td>
                                            <td> June 16, 2015 </td>
                                            <td>
                                                <button type="button" className="btn btn-outline-info">
                                                    <i className="mdi mdi-alert "></i> ViewDetail </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progressbar