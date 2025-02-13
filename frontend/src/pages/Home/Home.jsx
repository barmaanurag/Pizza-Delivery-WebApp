import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PizzaDisplay from '../../components/pizzaDisplay/pizzaDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
const Home = () => {
  const [category,setCategory]=React.useState("All");
  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <PizzaDisplay category={category}/>
      <AppDownload/>
    </div>
  );
}

export default Home;
