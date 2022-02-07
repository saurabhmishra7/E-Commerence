import "./login.scss";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAxios from "../../CustomeHooks/apiHooks";
import productServices from "../../services/productServices";

export default function Login() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [tokenFlag, setTokenFlag] = useState(false);
  const { adminLogin } = useAxios();

  const userNameHandler = (event) => {
    setuserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    const adminObject = {
      userName: userName,
      password: password,
    };
    try {
      const response = await adminLogin("login", adminObject);
      console.log(response.data);
      localStorage.setItem("admin", JSON.stringify(response.data));
      setTokenFlag(true)
    } catch (err) {
      console.log(err);
    }
    
  };

  useEffect(()=>{
    if(productServices.isAuthenticate()){
      setTokenFlag(true);
    }
  },[])
  
  return (
    <div>
      {tokenFlag?<Navigate to="/dashboard"/>:
      <div className="container loginPage">
        <div className="card card-login mx-auto text-center bg-dark">
          <div className="card-header mx-auto bg-dark">
            <br />
            <span className="logo_title mt-5"> Login Dashboard </span>
          </div>
          <div className="card-body">
            <form action="" method="post">
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Username"
                  onChange={userNameHandler}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={passwordHandler}
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  name="btn"
                  value="Login"
                  className="btn btn-outline-danger float-right login_btn"
                  onClick={clickHandler}
                />
              </div>
            </form>
          </div>
        </div>
      </div>}
    </div>
  );
}
