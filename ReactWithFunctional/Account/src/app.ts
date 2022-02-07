import express, { Application, Request , Response } from "express";
import {UserInstance as userDb } from "./model/userModel";
import {ProductInstance as productDb } from "./model/productModel";
import {AdminInstance as adminDb} from './model/adminModel'
import { CartInstance as cartTable } from "./model/cartModel";
import { CartProductInstance as cartProductTable } from "./model/cartProductModel";
import { router as user } from "./routers/userRoutes";
import { router as product } from "./routers/productRoutes";
import ejs from "ejs";
import { router as admin } from "./routers/adminRoutes"
import {default as config} from './config/default'
import { router as cart  } from "./routers/cartRoutes";
import { router as cartProduct } from "./routers/cartProductRoutes";
const app: Application = express();
const Port = config.PORT||3000;
import cors from "cors";
import { CartProductInstance } from "./model/cartProductModel";


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

 /* userDb.sync({
  force: true,
});
 */
 /* productDb.sync({    
  force: true,
}); 
 */
/* adminDb.sync({
  alter: true,
}) */

app.use(cors());
app.use("/user", user);
app.use("/product",product);
app.use("/admin",admin);
app.use("/cart",cart)
app.use("/cartProduct",cartProduct);
app.listen(Port, () => {
  console.log(`The server is running at http://localhost:${Port}/`);
});

export default app;   