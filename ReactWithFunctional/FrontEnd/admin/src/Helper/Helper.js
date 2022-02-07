import Constant from "../Constant/Constant";

const GET = (path) => {
  return {
    method: "get",
    url: Constant.CONSTANTS.baseURl + path,
    headers: JSON.stringify({ accept: "*/*" }),
  };
};

const POST = (path, product) => {
  return {
    method: "get",
    url: Constant.CONSTANTS.baseURl + path,
    headers: JSON.stringify({ accept: "*/*" }),
    body: JSON.stringify({
      productName: product.productName,
      productPrice: product.productPrice,
      productCategory: product.productCategory,
    }),
  };
};

const PUT = (path, product) => {
  return {
    method: "get",
    url: Constant.CONSTANTS.baseURl + path,
    headers: JSON.stringify({ accept: "*/*" }),
    body: JSON.stringify({
      productName: product.productName,
      productPrice: product.productPrice,
      productCategory: product.productCategory,
    }),
  };
};

const DELETE = (path) => {
  return {
    method: "delete",
    url: Constant.CONSTANTS.baseURl + path,
    headers: JSON.stringify({ accept: "*/*" }),
  };
};

const DELETES = (path, ids) => {
  return {
    method: "delete",
    url: Constant.CONSTANTS.baseURl + { path },
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export { GET, PUT, DELETE, DELETES, POST };
