import React, { useContext} from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const { getTotalCartAmount,token,setToken } = useContext(StoreContext);

  // Function to handle smooth scrolling to sections
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");

  }
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo'/>
      
      {/* Navbar Menu with onClick for scrolling */}
      <ul className="navbar-menu">
        <Link to='/'><li onClick={() => handleScroll('home')}>Home</li></Link>
        <li onClick={() => handleScroll('explore-menu')}>Menu</li>
        <li onClick={() => handleScroll('app-download')}>Mobile App</li>
        <li onClick={() => handleScroll('footer')}>Contact Us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img  src={assets.basket_icon} alt="Cart" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token?<button onClick={()=> setShowLogin(true)}>Sign In</button>
        :<div className='nav-profile'>
        <img src={assets.profile_icon} alt="" /> 
        <ul className="nav-profile-dropdown">
          <li onClick={() => navigate("/myorders")}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
          <hr />
          <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>LogOut</p></li>
          </ul> </div>}
        
      </div>
    </div>
  );
}

export default Navbar;
