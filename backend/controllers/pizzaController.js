import pizzaModel from "../models/pizzaModel.js";
import fs from 'fs';

// Adding pizza
const addPizza = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const pizza = new pizzaModel({
        name: req.body.name,
        image: image_filename,
        category: req.body.category,
        prize: req.body.prize,
        description: req.body.description,
        rating: req.body.rating
    });

    try {
        await pizza.save();
        res.json({ success: true, message: "Pizza Added Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Could Not Add Pizza" });
    }
};

// List all pizzas
const listPizza = async (req, res) => {
    try {
        const pizzas = await pizzaModel.find({});
        
        // Debugging logs
        console.log("Fetched pizzas:", pizzas);

        if (!pizzas || pizzas.length === 0) {
            return res.status(404).json({ success: false, message: "No pizzas found" });
        }

        res.json({ success: true, data: pizzas });
    } catch (error) {
        console.log("Error fetching pizzas:", error);
        res.json({ success: false, message: "Could Not Show Pizzas" });
    }
};

// Remove pizza
const removePizza = async (req, res) => {
    try {
        const pizza = await pizzaModel.findById(req.body.id);
        if (pizza) {
            fs.unlink(`uploads/${pizza.image}`, () => {});
            await pizzaModel.findByIdAndDelete(req.body.id);
            res.json({ success: true, message: "Pizza Removed Successfully" });
        } else {
            res.json({ success: false, message: "Pizza Not Found" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Could Not Remove Pizza" });
    }
};

export { addPizza, listPizza, removePizza };
