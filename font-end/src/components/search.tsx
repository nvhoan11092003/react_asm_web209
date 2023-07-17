const Search = () => {
  return (
    <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                <input type="text" className="form-control" placeholder="Search products"/>
              </form>
            </li>
          </ul>
  )
}

export default Search