import { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    // const [cart, setCart] = useState([]);

    const initialState = [];

    function cartReducer(cart, action) {
        switch (action.type) {
            case `ADD_TO_CART`: {
                const product = action.payload;
                if (cart.some(p => p.name === product.name)) {
                    return cart;
                }
                const newProduct = { ...product, quantity: 1 };
                return [...cart, newProduct];
            }

            case `REMOVE_FROM_CART`: {
                const product = action.payload;
                return cart.filter(p => p.name !== product.name);
            }

            case `UPDATE_QUANTITY`: {
                const { product, value, isAbsolute } = action.payload;
                return cart.map(p => {
                    if (p.name === product.name) {
                        let newQuantity;
                        if (isAbsolute) {
                            newQuantity = parseInt(value);
                            if (isNaN(newQuantity)) newQuantity = p.quantity;
                            if (newQuantity < 1) newQuantity = 1;
                        } else {
                            newQuantity = p.quantity + value;
                        }
                        return { ...p, quantity: newQuantity };
                    }
                    return p;
                })
            }

            default:
                throw new Error(`Azione non riconosciuta: ${action.type}`);
        }

    }

    const [cart, dispatch] = useReducer(cartReducer, initialState);

    function addToCart(product) {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    }

    function updateProductQuantity(product, value = 1, isAbsolute = false) {
        dispatch({
            type: `UPDATE_QUANTITY`,
            payload: { product, value, isAbsolute }
        })
    }

    function removeFromCart(product) {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    }

    function isInCart(product) {
        return cart.some(p => p.name === product.name)
    }

    const value = {
        cart,
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