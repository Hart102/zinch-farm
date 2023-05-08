import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className='bg-light fixed-top'>
      <nav className='navbar-expand-md container d-lg-flex justify-content-between align-items-center border-bottom py-2'>
        <div className="col-md-3 d-flex align-items-center justify-content-between">
          <Link to='/' class="navbar-brand text-dark fw-bolder">Zinch</Link>
          <i className="fa fa-bars navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"></i>
        </div>

        <main className='collapse navbar-collapse col-md-6' id='navbarCollapse'>
          <div className='navbar-nav d-lg-flex mx-auto'>
            <Link to='/' class="nav-link active text-dark fw-bold" aria-current="page">Home</Link>
            <Link to='#' class="nav-link text-dark fw-bold">About us</Link>
            <Link to='#' class="nav-link text-dark fw-bold">Digital market</Link>
          </div>
          <div className="d-lg-none d-block px-0">
            <Link to='#' class="nav-link text-dark fw-bold px-0">Sign Up</Link>
            <Link to='/zinch/Login' class="nav-link text-dark fw-bold px-0">Log In</Link>
          </div>
        </main>

        <div className="d-lg-flex d-none">
          <Link to='#' class="nav-link text-dark fw-bold text-dark border-bottom rounded-pill py-2">Sign Up</Link>
          <Link to='/zinch/Login' class="nav-link text-dark text-dark fw-bold border-bottom rounded-pill py-2 ms-3">Log In</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

