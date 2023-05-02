import Apple1 from '../../asserts/images/apple.JPG'
import Apple from '../../asserts/images/Apple3.jpg'
import ProductCard from '../ProductCard/ProductCard'

const ProductSlide = () => {
  return (
    <>
    {/*--------- fetures ---------*/}
    <section>
        <div className="container text-center py-5">
            <div className="col-md-6 mx-auto">
            <h3 className='fw-bolder'>Our fetured products</h3>
            <p className='fw-light text-muted'>We have a wide range of agricultural products that we have exported all over the world to thousands of our parents.</p>
            </div>

            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center my-5">
                <ProductCard ProductImage={Apple} ProductName={"Wheet"} ProductDescription={"Our wheat is of high qauntity, by planting categorically without chemical fertiliazers. Our wheat fiber is highly in fiber and carbonhydrate."}/>

                <ProductCard ProductImage={Apple1} ProductName={"Rice"} ProductDescription={"Our wheat is of high qauntity, by planting categorically without chemical fertiliazers. Our wheat fiber is highly in fiber and carbonhydrate."}/>

                <ProductCard ProductImage={Apple} ProductName={"Vegetable"} ProductDescription={"Our wheat is of high qauntity, by planting categorically without chemical fertiliazers. Our wheat fiber is highly in fiber and carbonhydrate."}/>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductSlide