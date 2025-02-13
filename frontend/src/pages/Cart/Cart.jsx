import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cart, pizza_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {pizza_list.map((item, index) => {
          if (cart[item._id] > 0) {  
            return (
              <div>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt={item.name} className="cart-item-image" />
                  <p>{item.name}</p>
                  <p>₹{item.prize}</p>
                  <p>{cart[item._id]}</p>
                  <p>₹{item.prize * cart[item._id]}</p>
                  <button onClick={() => removeFromCart(item._id)}>❌</button>
                </div>
                <hr />
              </div>
            );
          }
          return null; 
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Your Order</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?0:10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total: </b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+10}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Have Promo Code ? Enter it here</p>
            <div className="card-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
