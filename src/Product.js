import React from 'react'
import './Product.css'

function Product({ title, rating, price, image, id }) {
    return (
        <div className='product'>
            <div className="product__info">
                <p>{ title }</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p className='star'>🌟</p>
                    ))}
                </div>
            </div>

            <img src={image}
                 alt="product-img"/>

         <button>Add to Basket</button>
        </div>
    )
}

export default Product
