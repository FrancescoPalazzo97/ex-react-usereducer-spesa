import products from '../assets/productsArray';

const ProductsList = () => {
    return (
        <ul>
            {products.map((p, i) => (
                <li key={i}>
                    <h3>{p.name}</h3>
                    <p>Prezzo: {p.price}&euro;</p>
                </li>
            ))}
        </ul>
    )
}

export default ProductsList