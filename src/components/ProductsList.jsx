import products from '../assets/productsArray';
import Button from './Button';

const ProductsList = () => {

    return (
        <ul>
            {products.map((p, i) => (
                <li key={i} className='d-flex'>
                    <div className='me-1'>
                        <h3>{p.name}</h3>
                        <p>Prezzo: {p.price.toFixed(2)}&euro;</p>
                    </div>
                    <Button product={p} type={`add`} />
                </li>
            ))}
        </ul>
    )
}

export default ProductsList