import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import {toast} from 'react-toastify';
const List = ({url}) => {
 
  const [list,setList] = useState([]);
  const fetchList = async () => {
    
        const response = await axios.get(`${url}/api/pizza/list`);

        

        if ( response.data.success ) {
            setList(response.data.data);
        } else {
            toast.error("Error");
            
        }
    
};

const removePizza = async (pizzaId) => {
  const response = await axios.post(`${url}/api/pizza/remove`, { id: pizzaId });
  await fetchList();
  if(response.data.success){
    toast.success(response.data.message);
  }else{
    toast.error("Error");
  }
  
}

  useEffect(() => {
    fetchList();
  }, []); 

  return (
    <div className='list add flex-col'>
      <p>All Pizzas</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Name</b>
          <b>Image</b>
          <b>Category</b>
          <b>Price</b>
          <b>Description</b>
          <b>Rating</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className="list-table-format">
              
              <p>{item.name}</p>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.category}</p>
              <p>{item.prize}</p>
              <p>{item.description}</p>
              <p>{item.rating}</p>
              <p onClick={() => removePizza(item._id)} className='remove'>❌</p>


            </div>
          )
        })}
      </div>
      
    </div>
  );
}

export default List;