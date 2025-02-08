import React from 'react';
import './Menu.css';
import { menu_list } from '../../assets/assets';

const Menu = ({ category, setCategory }) => {

  const handleCategoryClick = (menuName) => {
    // Toggle between "All" and selected category
    setCategory(prev => prev === menuName ? "All" : menuName);

    // Scroll to the pizza-display section
    setTimeout(() => {
      const pizzaSection = document.getElementById('pizza-display');
      if (pizzaSection) {
        pizzaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200); // Small delay for a better user experience
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Crust & Cravings 🍕🤤</h1>
      <p className='explore-menu-text'>
        Indulge your pizza cravings with our delicious selection of handcrafted pizzas, fresh toppings, and irresistible flavors. 
        Whether you're in the mood for a classic Margherita, a cheesy delight, or a bold, spicy creation, we have something for every taste. 
        Explore our menu and satisfy your hunger with the perfect slice—hot, fresh, and made just for you! 🍕🔥
      </p>

      {/* Menu List */}
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div 
              onClick={() => handleCategoryClick(item.menu_name)} 
              key={index} 
              className="explore-menu-list-item"
            >
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
}

export default Menu;
