import { useGlobalContext } from "../contexts/GlobalContext";
import { useState } from "react";
import Button from "./Button";

const Cart = () => {
    const { cart, updateProductQuantity } = useGlobalContext()

    if (cart.length === 0) return <></>

    function getTotal() {
        return cart.reduce((tot, p) => {
            tot += p.price * p.quantity;
            return tot
        }, 0)
    }

    function handleQuantityChange(product, newValue) {
        updateProductQuantity(product, newValue, true);
    }

    return (
        <div className="cart-container">
            <h2>Carrello della spesa</h2>
            <ul>
                {cart.map((p, i) => (
                    <li key={i} className='d-flex'>
                        <div className='me-1'>
                            <h3>{p.name}</h3>
                            <p>Prezzo: {p.price.toFixed(2)}&euro;</p>
                            <input
                                type="number"
                                min={1}
                                step={1}
                                value={p.quantity}
                                onChange={e => handleQuantityChange(p, e.target.value)}
                            />
                            <p>Quantit&agrave;:{p.quantity}</p>
                        </div>
                        <Button product={p} type={`remove`} />
                    </li>
                ))}
            </ul>
            <div>
                <h4>Totale da pagare</h4>
                <span>{getTotal().toFixed(2)}&euro;</span>
            </div>
        </div>
    )
}

export default Cart