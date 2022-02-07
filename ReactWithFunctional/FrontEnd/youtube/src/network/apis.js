import axios from "axios";

const cartInstance = axios.create({
  baseURL: "http://localhost:5000/cart",
});

const cartProductInstance = axios.create({
  baseURL: "http://localhost:5000/cartProduct",
});

export default {
  cartInstance,
  cartProductInstance,
};
