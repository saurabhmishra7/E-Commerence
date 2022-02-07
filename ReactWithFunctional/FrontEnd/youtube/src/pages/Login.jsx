import { Component } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import services from "../services/services";
import Home from "./Home";
import { debounce } from "lodash";
import axios from "axios";
import helper from "../Helper/helper";
import { Navigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      tokenFlag: false,
    };
  }

  changeHandler1 = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  changeHandler2 = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  clickHandler = (event) => {
    event.preventDefault();
    const userObject = {
      userName: this.state.userName,
      password: this.state.password,
    };
    axios
      .post("http://localhost:5000/user/login", userObject)
      .then((res) => {
        console.log(res.data.token);
        if (res.data.token) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        this.setState({
          tokenFlag: true,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    if (this.state.tokenFlag) {
      return <Navigate to="/"></Navigate>;
    } else
      return (
        <Container>
          <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
              <Input placeholder="username" onChange={this.changeHandler1} />
              <Input
                placeholder="password"
                type="password"
                onChange={this.changeHandler2}
              />
              <Button onClick={this.clickHandler}>LOGIN</Button>
              <Link to="/">DO NOT YOU REMEMBER THE PASSWORD?</Link>
              <Link to="/register">CREATE A NEW ACCOUNT</Link>
            </Form>
          </Wrapper>
        </Container>
      );
  }
}

export default Login;
