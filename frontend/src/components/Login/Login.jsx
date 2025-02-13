import React, { useContext, useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const Login = ({ setShowLogin }) => {
  const { url,setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Sign Up" && data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if(currState === "Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl,data);
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }

    
  };

  return (
    <div className='login'>
      <form className="login-container" onSubmit={onSubmitHandler}>
        <div className="login-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-input">
          {currState === "Sign Up" && (
            <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter Your Name' required />
          )}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Enter Your Email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Enter Your Password' required />
          
          {currState === "Sign Up" && (
            <input name="confirmPassword" onChange={onChangeHandler} value={data.confirmPassword} type="password" placeholder='Confirm Your Password' required />
          )}
        </div>

        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className="login-condition">
          <input type="checkbox" required />
          <p>I accept all terms & conditions</p>
        </div>

        {currState === "Login" ? (
          <p>Don't have an account? <span onClick={() => setCurrState("Sign Up")}>Sign Up</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login</span></p>
        )}
      </form>
    </div>
  );
}

export default Login;
