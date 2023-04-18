import { useFormik } from "formik";
import React from "react";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Container, Form, Button } from "../../assets/styles.js";

export function AdicionarUsuario() {
  const formik = useFormik({
    initialValues: {
      nome: "",
      idade: "",
      cep: "",
      Logradouro: "",
      numero: "",
      cidade: "",
      formacoes: "",
      experiencias: "",
      hobbies: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Header/>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            id="nome"
            placeholder={"Nome"}
            name="nome"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nome}
          />
          <Input
            id="idade"
            placeholder={"Idade"}
            name="idade"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.idade}
          />
          <Input
            id="cep"
            placeholder={"CEP"}
            name="cep"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.cep}
          />
          <Button type="submit">Buscar CEP</Button>
          <Input
            id="logradouro"
            placeholder={"Logradouro"}
            name="logradouro"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.logradouro}
          />
          <Input
            id="bairro"
            placeholder={"Bairro"}
            name="bairro"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.bairro}
          />
          <Input
            id="numero"
            placeholder={"Numero"}
            name="numero"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.numero}
          />
          <Input
            id="cidade"
            placeholder={"Cidade"}
            name="cidade"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.cidade}
          />
          <Input
            id="formacoes"
            placeholder={"Formações"}
            name="formacoes"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.formacoes}
          />
          <Input
            id="experiencias"
            placeholder={"Experiências"}
            name="experiencias"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.experiencias}
          />
          <Input
            id="hobbies"
            placeholder={"Hobbies"}
            name="hobbies"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.hobbies}
          />
          <Button type="submit">Adicionar</Button>
        </Form>
      </Container>
    </>
  );
}
