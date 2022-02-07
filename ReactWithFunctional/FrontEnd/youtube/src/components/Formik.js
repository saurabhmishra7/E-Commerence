import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { mobile } from "../responsive";

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

export default function FormikComponent(props) {
  const { intialValues, validationSchema, title,formValues } = props;
  console.log(formValues);

  return (
    <div>
      <Container>
        <Wrapper>
          <Title>{title}</Title>
          <Formik
            initialValues={intialValues}
            validationSchema={validationSchema}
            onSubmit={(fields) => {
              alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
            }}
            render={({ errors, status, touched }) => (
              <Form>
                {formValues.map((element) => {
                  console.log((element));
                  return (
                    <div className="form-group">
                      <label htmlFor={element}>{element}</label>
                      <Field
                        name={element}
                        type="text"
                        className={
                          "form-control" +
                          (errors[element] && touched[element]
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name={element}
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  );
                })}

                <div className="form-group">
                  <button type="submit" className="btn btn-primary mr-2">
                    Submit
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
