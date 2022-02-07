import useAxios from "../CustomeHooks/apiHooks";
import { GET, DELETE, PUT, POST, DELETES } from "./Helper";

function GetProduct(product) {
  const { response, error, loading } = useAxios(GET(product));
  return { response, error, loading };
}

function DeleteProduct(path) {
  const { response, error, loading } = useAxios(DELETE(path));
  return { response, error, loading };
}

export { GetProduct, DeleteProduct };
