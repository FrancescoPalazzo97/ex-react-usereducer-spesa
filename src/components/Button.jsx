import React from 'react'

const Button = ({ addToCart, product }) => {
    return (
        <div className='d-flex align-items-center'>
            <button onClick={() => addToCart(product)}>
                <i className="fa-solid fa-cart-arrow-down"></i>
            </button>
        </div>
    )
}

export default Button