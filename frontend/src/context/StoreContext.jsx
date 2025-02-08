import { createContext, useState } from "react";
import { pizza_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cart, setCart] = useState({}); // Cart state to track items

    // Function to add pizza to cart
    const addToCart = (id) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: prevCart[id] ? prevCart[id] + 1 : 1, // Increment count
        }));
    };

    // Function to remove pizza from cart
    const removeFromCart = (id) => {
        setCart((prevCart) => {
            if (!prevCart[id]) return prevCart; // If item doesn't exist, do nothing

            const updatedCart = { ...prevCart };
            if (updatedCart[id] === 1) {
                delete updatedCart[id]; // Remove item if quantity is 1
            } else {
                updatedCart[id] -= 1; // Decrease quantity
            }
            return updatedCart;
        });
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart({});
    };

    const contextValue = {
        pizza_list,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
