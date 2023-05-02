import './index.css'
import { Link } from 'react-router-dom'
import design from '../asserts/images/design.webp'
import Apple from '../asserts/images/Apple3.jpg'
import Apple1 from '../asserts/images/apple.JPG'
import Jumbotrom from '../component/Jumbotrom/Jumbotrom'
import Navbar from '../component/Navbar/Navbar'
import AboutUs from '../component/AboutUs/AboutUs'
import ProductSlide from '../component/ProductsSlide/ProductSlide'
import Trust from '../component/Trust/Trust'
import Footer from '../component/Footer/Footer'


const Index = () => {
  return (
    <>
    {/* <img src={design} alt="" /> */}
    <Navbar />
    <Jumbotrom />
    <AboutUs />
    <ProductSlide />
    <Trust />
    <Footer />
    </>
  )
}

export default Index


// borderTopRightRadius: '50%',
// borderTopRighttRadius: '50%',
// borderTopLeftRadius: '60%',
// borderTopLefttRadius: '10%',

// borderBottomLeftRadius: '30%',
// borderTopLefttRadius: '50%',