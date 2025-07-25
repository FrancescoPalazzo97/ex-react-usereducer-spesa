import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        const newProduct = {
            ...product,
            quantity: 1
        }
        setCart(curr => curr.some(p => p.name === newProduct.name) ? curr : [...curr, newProduct]);
    }

    function updateProductQuantity(product, value = 1, isAbsolute = false) {
        setCart(curr => curr.map(p => {
            if (p.name === product.name) {
                let newQuantity;

                if (isAbsolute) {
                    newQuantity = parseInt(value);

                    if (isNaN(newQuantity)) {
                        newQuantity = p.quantity;
                    }

                    if (newQuantity < 1) {
                        newQuantity = 1;
                    }
                } else {
                    newQuantity = p.quantity + value;
                }

                return { ...p, quantity: newQuantity };
            }
            return p;
        }));
    }

    function removeFromCart(product) {
        setCart(curr => curr.filter(p => p.name !== product.name))
    }

    function isInCart(product) {
        return cart.some(p => p.name === product.name)
    }

    const value = {
        cart,
        setCart,
        addToCart,
        updateProductQuantity,
        removeFromCart,
        isInCart
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext };