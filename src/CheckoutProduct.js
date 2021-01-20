import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({id, image, title, price, rating}) {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt="product img"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>


                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill()
                        .map( (_, i) => (
                            <p key={i} className='star'>🌟</p>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
