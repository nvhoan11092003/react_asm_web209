const Banner = () => {
  return (
    <div className="card-body py-0 px-0 px-sm-3">
    <div className="row align-items-center">
      <div className="col-4 col-sm-3 col-xl-2">
        <img src="../../public/assets/images/dashboard/Group126%402x.png" className="gradient-corona-img img-fluid" alt="" />
      </div>
      <div className="col-5 col-sm-7 col-xl-8 p-0">
        <h4 className="mb-1 mb-sm-0">Want even more features?</h4>
        <p className="mb-0 font-weight-normal d-none d-sm-block">Check out our Pro version with 5 unique layouts!</p>
      </div>
      <div className="col-3 col-sm-2 col-xl-2 pl-0 text-center">
        <span>
          <a href="" target="_blank" className="btn btn-outline-light btn-rounded get-started-btn">Upgrade to PRO</a>
        </span>
      </div>
    </div>
  </div>
  )
}

export default Banner