const Navbar = () => {
  return (
     <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light main-nav">
          <a className="navbar-brand logo" href="#">
            <img src="images/mplogo.png" alt="" className="img-fluid"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto countries">
              <li className="nav-item">
                <a className="nav-link flag" href="#"><img src="images/ghflag.jpg" alt="" className="img-fluid"/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link flag" href="#"><img src="images/ngflag.jpg" className="img-fluid"/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link flag" href="#"><img src="images/kenflag.jpg" className="img-fluid"/></a>
      
              </li>
      
            </ul>
            <div className="nav-item">
              <a className="nav-link about" href="#">
                <h3>ABOUT US</h3>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  
  )
}
export default Navbar