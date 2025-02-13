import mongoose from "mongoose";


const pizzaSchema = new mongoose.Schema({
    name: {type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
    prize:{type:Number,required:true},
    description:{type:String,required:true},
    rating:{type:Number,required:true}
})

const pizzaModel = mongoose.models.pizza || mongoose.model("pizza",pizzaSchema);
export default pizzaModel;