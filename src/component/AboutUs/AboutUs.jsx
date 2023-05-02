import Apple1 from '../../asserts/images/apple.JPG'


const AboutUs = () => {
  return (
    <>
     {/* ----------About us  ----------*/}
     <main style={{background: '#F8F8F8'}}>
     <div className="container py-5">
       <div className="row align-items-center">
         <section className="col-md-6 mb-lg-0 my-5 px-5">
           <div style={{maxHeight: '80%', height: '350px', maxWidth: '100%', width: '400px', margin: 'auto'}}>
             <img src={Apple1} style={{height: '100%', width: '100%', borderTopRightRadius: '50%', borderBottomLeftRadius: '50%',}} />
           </div>
         </section>
         <section className="col-md-6 text-center text-lg-start">
           <h1 className='fw-bolder display-5'>About us</h1>
           <p className='text-muted fw-light'>
             A major portion of our product is dedicated to stablize foods that comes from water. The scale and outreach of agricultural products is to feeding 9.6 billion people sustanability bg 2050. However, the lack of protien qauntity in agricultural product be addressed first. <br /> <br />
             We harness the power of fermentation o enrich agricultural products with complete protien and make them nutritionally balanced. Our mission is deliver the best testing nutritious products.
           </p>
         </section>
       </div>
     </div>
   </main>
    </>
  )
}

export default AboutUs