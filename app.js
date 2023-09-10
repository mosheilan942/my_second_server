import * as all_express from "express";
import morgan from "morgan";
import { router as indexRoute } from "./routes/index_routes.js";
import axios from "axios";
import * as DAL from "./DAL/dal.js";
import cors from "cors"

const app = all_express.default();
app.use(all_express.json());
const port = 3000;
app.use(morgan("dev"));
app.use(cors({
  origin: '*'
}));

const getUsers = async () => {
  axios.get('https://fakestoreapi.com/products')
  .then(async response => {
   const products = response.data;
   let arr = products.map((e) => e.quantity = Math.floor(Math.random() * 100))
   const new_products = await DAL.write("./newproducts.json", products);
   
 })
  .catch(error => console.error(error));
 };
 

async function main() {

  // DB of products
  await app.use("/api", indexRoute);

  // DB of users
  await app.use("/users", indexRoute);

  app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
    //  getUsers();
     return true
  });
 
}

main();

