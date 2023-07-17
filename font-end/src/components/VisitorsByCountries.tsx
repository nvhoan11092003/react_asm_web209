const VisitorsByCountries = () => {
  return (
    <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Visitors by Countries</h4>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <i className="flag-icon flag-icon-us"></i>
                              </td>
                              <td>USA</td>
                              <td className="text-right"> 1500 </td>
                              <td className="text-right font-weight-medium"> 56.35% </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="flag-icon flag-icon-de"></i>
                              </td>
                              <td>Germany</td>
                              <td className="text-right"> 800 </td>
                              <td className="text-right font-weight-medium"> 33.25% </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="flag-icon flag-icon-au"></i>
                              </td>
                              <td>Australia</td>
                              <td className="text-right"> 760 </td>
                              <td className="text-right font-weight-medium"> 15.45% </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="flag-icon flag-icon-gb"></i>
                              </td>
                              <td>United Kingdom</td>
                              <td className="text-right"> 450 </td>
                              <td className="text-right font-weight-medium"> 25.00% </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="flag-icon flag-icon-ro"></i>
                              </td>
                              <td>Romania</td>
                              <td className="text-right"> 620 </td>
                              <td className="text-right font-weight-medium"> 10.25% </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="flag-icon flag-icon-br"></i>
                              </td>
                              <td>Brasil</td>
                              <td className="text-right"> 230 </td>
                              <td className="text-right font-weight-medium"> 75.00% </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div id="audience-map" className="vector-map"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default VisitorsByCountries