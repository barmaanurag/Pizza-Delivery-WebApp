import express from "express";
import  {addPizza, listPizza,removePizza}  from "../controllers/pizzaController.js";
import multer from "multer";



const pizzaRouter = express.Router();

//image storage
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage:storage})
pizzaRouter.post("/add",upload.single("image"),addPizza)
pizzaRouter.get("/list",listPizza)
pizzaRouter.post("/remove",removePizza)

export default pizzaRouter;