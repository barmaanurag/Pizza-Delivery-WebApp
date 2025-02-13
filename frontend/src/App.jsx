import React,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'; 
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlacedOrder from './pages/PlacedOrder/PlacedOrder';
import Login from './components/Login/Login';
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlacedOrder />} />
      </Routes>
      
    </div>
    <Footer /> 
    </>
  );
};

export default App;
