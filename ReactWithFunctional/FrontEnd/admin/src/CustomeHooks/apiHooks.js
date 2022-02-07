import axios from "axios";
import Constant from "../Constant/Constant";

const useAxios = () => {
  const getProduct = (path) => {
    return axios.get(Constant.CONSTANTS.baseURl + path);
  };

  const deleteProduct = (path) => {
    return axios.delete(Constant.CONSTANTS.baseURl + path);
  };

  const updateProduct = (path, productObject) => {
    return axios.put(Constant.CONSTANTS.baseURl + path, productObject);
  };

  const addProduct = (path, productObject) => {
    return axios.post(Constant.CONSTANTS.baseURl + path, productObject);
  };

  const deleteProducts = (path, deleteProductIDs) => {
    return axios.delete(Constant.CONSTANTS.baseURl + "product/" + path, {
      data: { deleteObject: deleteProductIDs },
    });
  };

  const adminLogin = (path, adminObject) => {
    console.log(Constant.CONSTANTS.baseURl + "admin/" + path);
    return axios.post(
      Constant.CONSTANTS.baseURl + "admin/" + path,
      adminObject
    );
  };

  return {
    getProduct,
    deleteProduct,
    updateProduct,
    addProduct,
    deleteProducts,
    adminLogin,
  };
};
export default useAxios;
