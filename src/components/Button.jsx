import { useGlobalContext } from "../contexts/GlobalContext"

const Button = ({ product, type }) => {
    const { addToCart, updateProductQuantity, removeFromCart, isInCart } = useGlobalContext()

    function handleClick() {
        if (isInCart(product)) {
            updateProductQuantity(product);
        } else {
            addToCart(product);
        }
    }

    if (type === `add`) {
        return (
            <div className='d-flex align-items-center'>
                <button onClick={handleClick}>
                    <i className="fa-solid fa-cart-arrow-down"></i>
                </button>
            </div>
        )
    }

    if (type === `remove`) {
        return (
            <div className='d-flex align-items-center'>
                <button onClick={() => removeFromCart(product)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        )
    }
}

export default Button