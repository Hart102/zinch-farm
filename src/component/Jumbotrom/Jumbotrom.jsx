import Apple1 from '../../asserts/images/apple.JPG'

const Jumbotrom = () => {
  return (
    <main>
      <div className="container py-5 bg-danger1">
        <div className="row align-items-center flex-row-reverse">
          <section className="col-md-6 mb-lg-0 my-5 px-5 px-lg-0 d-lg-flex justify-content-end">
            <div style={{maxHeight: '80%', height: '350px', maxWidth: '100%', width: '400px', margin: 'auto1'}}>
              <img src={Apple1} style={{height: '100%', width: '100%', borderTopRightRadius: '50%', borderBottomLeftRadius: '50%',}} />
            </div>
          </section>

          <section className="col-md-6 text-center text-lg-start">
            <h1 className='fw-bolder display-5'>We Are Called Zinch Agriculture</h1>
            <p className='text-muted fw-light'>We believe Future of Food is here</p>
            <form className='d-flex align-items-center rounded-pill shadow px-'>
              <input type="search" className="form-control rounded-pill border-0 py-2" placeholder="What are you looking for..." />
              <i className="fa fa-search text-white p-3 rounded-pill" style={{background: '#55AE5E'}}></i>
            </form>
          </section>
        </div>
      </div>
  </main>

  )
}

export default Jumbotrom