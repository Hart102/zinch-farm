import Apple1 from '../../asserts/images/apple.JPG'

const Trust = () => {
  return (
    <>
    {/*--------- Trust ---------*/}
    <section style={{background: '#F8F8F8'}}>
        <div className="container d-flex justify-content-center py-5">
            <div className='d-flex flex-wrap flex-lg-row flex-column-reverse align-items-center justify-content-center px-lg-5'>
            <div className="col-md-6 mx-auto text-center text-lg-start p-2">
                <h3 className='fw-bolder'>Thousands of people trust our agricultural products</h3>
                <p className='fw-light text-muted'>Join the amazing farming that we provide for you and just you.</p>
                <div className="text-white1 text-start d-flex align-items-center justify-content-between shadow p-3" style={{background: '#fff', borderRadius: '20px'}}>
                <div>
                    <b className='my-0'>20,000 +</b>
                    <p className='my-0 fw-light'>People join with us</p>
                </div>
                <div>
                    <b className='my-0'>20 +</b>
                    <p className='my-0 fw-light'>Countries cooperate with us</p>
                </div>
                <i className="fa fa-arrow-right text-dark p-3" style={{background: '#76EE8B', borderRadius: '10px'}}></i>
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-end mx-auto">
                <div className='px-lg-0 px-3' style={{ height: '350px',  width: '350px', maxHeight: '80%',  maxWidth: '100%' }}>
                <img src={Apple1} width="100%" height="100%" style={{height: '100%', width: '100%', borderTopRightRadius: '50%', borderBottomLeftRadius: '50%',}}/>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Trust