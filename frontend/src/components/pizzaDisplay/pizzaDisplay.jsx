import React, { useContext } from 'react';
import './pizzaDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import PizzaItem from '../pizzaItem/pizzaItem';

const PizzaDisplay = ({ category }) => {
  const { pizza_list } = useContext(StoreContext);

  // If "All" is selected, show only pizzas with a rating above 4.5
  const filteredPizzas = category === "All" 
    ? pizza_list.filter(item => item.rating > 4.7) 
    : pizza_list.filter(item => item.category === category);

  return (
    <div className='pizza-display' id='pizza-display'>
      {/* Change heading based on selection */}
      <h2>{category === "All" ? "Our Best Selling Pizzas" : category}</h2>
      
      <div className="pizza-display-list">
        {filteredPizzas.map((item, index) => {
          return (
            <PizzaItem 
              key={index} 
              id={item._id} 
              name={item.name} 
              prize={item.prize} 
              image={item.image} 
              description={item.description} 
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PizzaDisplay;
