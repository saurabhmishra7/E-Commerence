import axios from "axios";

function fetchData() {
  return axios.get("http://localhost:5000/product");
}

function isAuthenticate() {
  const token = JSON.parse(localStorage.getItem("admin"))?.token;

  if (token) {
    return true;
  } else {
    return false;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchData,
  isAuthenticate,
};
