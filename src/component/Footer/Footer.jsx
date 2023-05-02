
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container d-lg-flex justify-content-between align-items-end text-white px-5 py-4">
      <article>
        <h3 className='fw-bolder'>Get information about us</h3>
        <p className='fw-light'>What are you looking for ?</p>
        <form className='d-flex align-items-center rounded-pill bg-white shadow px-'>
          <input type="email" className="form-control rounded-pill border-0 py-2" placeholder="Email" />
          <i className="fa fa-search text-white p-3 rounded-pill" style={{background: '#55AE5E'}}></i>
        </form>
      </article>
      <div className='py-2 my-4 my-lg-0 mx-lg-0 mx-xl-0 mx-auto text-center'>
        <i className="fa fa-facebook px-2 bg-light text-dark p-1 rounded-circle"></i>
        <i className="fa fa-instagram ms-4 bg-light text-dark p-1 rounded-circle"></i>
        <i className="fa fa-twitter ms-4 bg-light text-dark p-1 rounded-circle"></i>
      </div>
      </div>
    </footer>
  )
}

export default Footer