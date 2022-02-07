import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import axios from "axios";
import Home from "../Home";
import "./register.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAxios from "../../customHook/hooks";
import { Navigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Forms = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.div`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  background-color: teal;
  height: 60px;
  color: white;
  cursor: pointer;
  margin-left: 20px;
`;

function Register() {
  const [registerFlag,setRegisterFlag]= useState(false);
  const { REGISTER } = useAxios();
  const clickHandler = async (fields) => {
    try {
      const res = await REGISTER("user/register", fields);
      console.log(res.data);
      if(res.data.token){
        setRegisterFlag(true);
        localStorage.setItem("user",JSON.stringify(res.data));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {registerFlag&&<Navigate to="/"/>}
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().required("First Name is required").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
              lastName: Yup.string().required("Last Name is required").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required"),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required").matches(
                  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                  "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                ),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
            })}
            onSubmit={(fields) => {
              clickHandler(fields);
              alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
            }}
            render={({ errors, status, touched }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    name="firstName"
                    type="text"
                    className={
                      "form-control" +
                      (errors.firstName && touched.firstName
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    name="lastName"
                    type="text"
                    className={
                      "form-control" +
                      (errors.lastName && touched.lastName ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userName">User Name</label>
                  <Field
                    name="userName"
                    type="text"
                    className={
                      "form-control" +
                      (errors.userName && touched.userName ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="userName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    type="text"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className={
                      "form-control" +
                      (errors.confirmPassword && touched.confirmPassword
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary mr-2">
                    Register
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Reset
                  </button>
                </div>
              </Form>
            )}
          />
        </Wrapper>
      </Container>
    </div>
  );
}
export default Register;
