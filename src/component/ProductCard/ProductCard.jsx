const ProductCard = ({
    ProductImage, ProductName, ProductDescription
}) => {
  return (
    <article className='bg-white rounded p-4 mx-2 shadow' style={{height: '310', width: '300px'}}>
        <div className='d-flex flex-column align-items-center'>
        <div className="overflow-hidden" style={{height: '50px', width: '50px', borderRadius: '10px'}}>
            <img src={ProductImage} style={{height: '100%', width: '100%'}}/>
        </div>
        <b className='my-4'>{ProductName}</b>
        </div>
        <p className='fw-light text-muted'>{ProductDescription}</p>
    </article>
  )
}

export default ProductCard