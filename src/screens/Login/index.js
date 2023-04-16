import React from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ErrorSpan } from "../../components/ErrorSpan";
import {
  Container,
  ContainerLogin,
  Title,
  ForgotPassword,
  Form,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

export function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/home");
  }

  function validate(values) {
    console.log(values);
    const errors = {};
    if (!values.email) {
      errors.email = "Este campo é obrigatório";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "O e-mail informado é inválido";
    }
    if (!values.email) {
      errors.password = "Este campo é obrigatório";
    }
    return errors;
  }

  return (
    <>
      <Header />
      <Container>
        <ContainerLogin>
          <Title>Acesse sua conta FIT.NEZ</Title>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={validate}
            onSubmit={() => {
              handleLogin();
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Input
                  label="E-mail"
                  placeholder="Preencha o e-mail cadastrado"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && (<ErrorSpan>{errors.email}</ErrorSpan>)}
                <Input
                  label="Senha"
                  placeholder="Preencha a senha cadastrada"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && (<ErrorSpan>{errors.password}</ErrorSpan>)}
                <ForgotPassword href="/">Esqueci minha senha</ForgotPassword>
                <Button type="submit">Submit</Button>
              </Form>
            )}
          </Formik>
        </ContainerLogin>
      </Container>
    </>
  );
}
