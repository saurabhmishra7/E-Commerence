import axios from "axios";

const useAxios = () => {

  const product = axios.create({
    baseURL: "http://localhost:5000/",
   
  });
  
  const cart = axios.create({
    baseURL: "http://localhost:5000/cart/",
  });
  
  const user = axios.create({
    baseURL: "http://localhost:5000/",
   
  });

  const GETPRODUCT = (path)=>{
    return product.get(path);
  }

  const REGISTER=(path,userObject)=>{
    console.log(userObject);
    return user.post("http://localhost:5000/"+path,userObject)
  }

  const GETCARTITEM = (path)=>{
    return cart.get(path);
  }
  const GETPRODUCTBYID = (productId)=>{
    console.log("productId=",productId);
    return product.get("product/"+productId);
  }

  return { GETPRODUCT,REGISTER ,GETCARTITEM,GETPRODUCTBYID}
};

export default useAxios;