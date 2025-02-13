import React from 'react';
import './Menu.css';
import { menu_list } from '../../assets/assets';

const Menu = ({ category, setCategory }) => {

  const handleCategoryClick = (menuName) => {
    setCategory(prev => prev === menuName ? "All" : menuName);
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Crust & Cravings 🍕🤤</h1>
      <p className='explore-menu-text'>
        Indulge in our delicious selection of handcrafted pizzas! 🍕🔥
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
