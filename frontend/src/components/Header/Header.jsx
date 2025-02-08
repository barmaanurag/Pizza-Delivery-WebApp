import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';  // Import assets

const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${assets.header_image})` }} >
      <div className="header-contents">
        <h2>Order Your Favorite Pizza</h2>
        <p>Enjoy hot, fresh, and delicious pizza delivered straight to your doorstep! Our pizza delivery service offers a wide range of mouthwatering flavors, from classic Margherita to loaded meat feasts and veggie delights. With fast and reliable delivery, we ensure your pizza arrives piping hot and ready to eat.</p>

        <p>✅ Wide variety of flavors  
           ✅ Fast & reliable delivery  
           ✅ Fresh ingredients & quality toppings  
           ✅ Easy online ordering & tracking</p>

        <p>Order now and satisfy your pizza cravings in just a few clicks! 🍕🚀</p>
        
        <button>Order Now</button>
      </div>
    </div>
  );
}

export default Header;
