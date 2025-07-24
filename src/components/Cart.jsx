import { useGlobalContext } from "../contexts/GlobalContext";
import { useState } from "react";

const Cart = () => {
    const { cart } = useGlobalContext()

    if (cart.length === 0) return <></>

    return (
        <div className="cart-container">
            <h2>Carrello della spesa</h2>
            <ul>
                {cart.map((p, i) => (
                    <li key={i} className='d-flex'>
                        <div className='me-1'>
                            <h3>{p.name}</h3>
                            <p>Prezzo: {p.price}&euro;</p>
                            <p>Quantit&agrave;:{p.quantity}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cart