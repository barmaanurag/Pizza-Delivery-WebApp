import React, { useContext } from 'react';
import './pizzaItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../context/StoreContext';

const PizzaItem = ({ id, name, prize, image, description, rating }) => {
  const { cart, addToCart, removeFromCart, url } = useContext(StoreContext);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-icon" />);
    }
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} className="star-icon" />);
    }

    return stars;
  };

  return (
    <div className='pizza-item'>
      <div className="pizza-item-img-container">
        <img src={url+"/images/"+image} alt="" className="pizza-item-image" />
      </div>
      <div className="pizza-item-info">
        <div className="pizza-item-name-rating">
          <p>{name}</p>
          <p className="pizza-item-rating">{renderStars(rating)}</p>
        </div>
        <p className='pizza-item-desc'>{description}</p>
        <p className="pizza-item-price">₹{prize}</p>

        <div className="pizza-item-actions">
          {cart[id] ? (
            <div className="cart-controls">
              <button className="cart-btn" onClick={() => removeFromCart(id)}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span>{cart[id]}</span>
              <button className="cart-btn" onClick={() => addToCart(id)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          ) : (
            <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
              Get This Pizza 🍕✅
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PizzaItem;
