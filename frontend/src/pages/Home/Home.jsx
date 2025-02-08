import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PizzaDisplay from '../../components/pizzaDisplay/pizzaDisplay';
const Home = () => {
  const [category,setCategory]=React.useState("All");
  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <PizzaDisplay category={category}/>
    </div>
  );
}

export default Home;
