import { useGlobalContext } from '../contexts/GlobalContext';

import products from '../assets/productsArray';
import Button from './Button';

const ProductsList = () => {

    const { setCart } = useGlobalContext();

    function addToCart(product) {
        const newProduct = {
            ...product,
            quantity: 1
        }
        setCart(curr => curr.some(p => p.name === newProduct.name) ? curr : [...curr, newProduct]);
    }

    return (
        <ul>
            {products.map((p, i) => (
                <li key={i} className='d-flex'>
                    <div className='me-1'>
                        <h3>{p.name}</h3>
                        <p>Prezzo: {p.price}&euro;</p>
                    </div>
                    <Button addToCart={addToCart} product={p} />
                </li>
            ))}
        </ul>
    )
}

export default ProductsList