import express from 'express';
import cors from 'cors';
// import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import pizzaRouter from './routes/pizzaRoute.js';
import userRouter from './routes/userRoute.js'; 

import 'dotenv/config';
import cartRouter from './routes/cartRoute.js';

//app configuration
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());


//db connection
connectDB();


//api endpoints
app.use("/api/pizza",pizzaRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)




app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})
//mongodb+srv://barmaanurag1509:15092003@cluster0.w4hsp.mongodb.net/?