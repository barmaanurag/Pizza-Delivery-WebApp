import { createContext, useEffect, useState } from "react";

import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cart, setCart] = useState({}); // Cart state to track items
    const url="http://localhost:4000";
    const [token,setToken]=useState("");
    const [pizza_list,setPizza_list] = useState([]);
    // Function to add pizza to cart
    const addToCart = async (itemId) => {
        if(!cart[itemId]){
            setCart((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCart((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    };

    // Function to remove pizza from cart
    const removeFromCart = async (itemId) => {
        setCart((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    };
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cart) {
            if (cart[item] > 0) {
                const itemInfo = pizza_list.find((pizza) => pizza._id === item);
                totalAmount += itemInfo.prize * cart[item];
            }
        }
        return totalAmount;
    }


const fetchPizzaList = async () => {
    const response = await axios.get(url+"/api/pizza/list")
    setPizza_list(response.data.data)
}

const loadCartData =  async (token) => {
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCart(response.data.cartData);
}


    useEffect(()=>{
        
        async function loadData(){
            await fetchPizzaList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])
    // Function to clear the cart
    const clearCart = () => {
        setCart({});
    };
    useEffect(() => {console.log(cart)}, [cart]);
    const contextValue = {
        pizza_list,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
