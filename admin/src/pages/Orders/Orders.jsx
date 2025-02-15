import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import './Orders.css';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error('Failed to fetch orders');
      }
    } catch (error) {
      toast.error('Error fetching orders');
      console.error(error);
    }
  };

  const statusHandler = async (event,orderId)=>{
    const response = await axios.post(`${url}/api/order/status`,{orderId,status:event.target.value});
    if(response.data.success){
      await fetchAllOrders();
    }
    
  }

  useEffect(() => {
    fetchAllOrders();
  }, [url]);

  return (
    <div className="order-page">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="Parcel Icon" />
              <div>
                <p className="order-item-pizza">
                  {order.items
                    .map((item) => `${item.name} x${item.quantity}`)
                    .join(', ')}
                </p>
                <p className="order-item-name">
                  {order.address.firstName} {order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street},</p>
                  <p>
                    {order.address.city}, {order.address.state},{' '}
                    {order.address.country}, {order.address.pincode}
                  </p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
              <p>Items: {order.items.length}</p>
              <p>Amount: ₹{order.amount}</p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                <option value="Ready to bake">Pizza is Ready to bake</option>
                <option value="On the way">Your Pizza is on the way</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
