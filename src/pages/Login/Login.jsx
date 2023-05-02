import Footer from "../../component/Footer/Footer"
import Navbar from "../../component/Navbar/Navbar"


const Login = () => {
  return (
    <>

    <Navbar />
    <section className="d-flex align-items-center" style={{height: '80Vh'}}>
         
        <div className="container p-3">
            <form className="col-md-4 shadow p-5 mx-auto">
                <article className="text-center fw-bold fs-6" style={{color: '#326543'}}>LOGIN</article>
                <div>
                    <input type="text" className="form-control py-2 my-2" placeholder="UserName"/>
                    <input type="text" className="form-control py-2 my-2" placeholder="Password"/>
                </div>
                <section className="d-flex align-items-center">
                    <b>Category:</b>
                    <div className="ms-3">
                        <input type="radio" id="farmer"/>
                        <label htmlFor="farmer" className="ms-2 text-muted fw-light">Farmer</label>
                    </div>
                    <div className="ms-3">
                        <input type="radio" id="buyer"/>
                        <label htmlFor="buyer" className="ms-2 text-muted fw-light">Buyer</label>
                    </div>
                </section>
                <button className="btn w-100 my-3 py-2 fw-bold text-white" style={{background: '#56AE5E'}}>LOG IN</button>
            </form>
        </div>
    </section>
    <div>
        <Footer />
    </div>





    </>
  )
}

export default Login