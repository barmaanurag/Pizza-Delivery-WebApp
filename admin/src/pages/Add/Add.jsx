import React, { useEffect, useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
const Add = ({url}) => {
    
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        category: "Veg Pizza",
        prize: "",
        rating: "" // Added rating state
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('image', image);
        formData.append('category', data.category);
        formData.append('prize', Number(data.prize));
        formData.append('description', data.description);
        formData.append('rating', Number(data.rating)); // Append rating

        const response = await axios.post(`${url}/api/pizza/add`, formData);
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                category: "Veg Pizza",
                prize: "",
                rating: "" // Reset rating
            });
            setImage(false);
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                {/* Image Upload */}
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>

                {/* Pizza Name */}
                <div className="add-pizza-name flex-col">
                    <p>Pizza</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Enter Pizza Name' required />
                </div>

                {/* Description */}
                <div className="description flex-col">
                    <p>Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="4" placeholder='Write Description' required></textarea>
                </div>

                {/* Category & Price */}
                <div className="add-category-price flex-col">
                    <div className="add-category">
                        <p>Category</p>
                        <select onChange={onChangeHandler} name="category" value={data.category}>
                            <option value="Veg Pizza">Veg Pizza</option>
                            <option value="Special Pizza">Special Pizza</option>
                            <option value="Pizza Mania">Pizza Mania</option>
                            <option value="Non-Veg Pizza">Non-Veg Pizza</option>
                            <option value="Cheese Burst Pizza">Cheese Burst Pizza</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Price</p>
                        <input onChange={onChangeHandler} value={data.prize} type="number" name='prize' placeholder='Enter Price' required />
                    </div>
                </div>

                {/* Rating */}
                <div className="add-rating flex-col">
                    <p>Rating (1-5)</p>
                    <input 
                        onChange={onChangeHandler} 
                        value={data.rating} 
                        type="number" 
                        name="rating" 
                        min="1" 
                        max="5" 
                        placeholder="Enter Rating" 
                        required 
                    />
                </div>

                {/* Submit Button */}
                <button type='submit' className='add-btn'>ADD PIZZA</button>
            </form>
        </div>
    );
}

export default Add;
