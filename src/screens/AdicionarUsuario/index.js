import { useFormik } from "formik";
import React from "react";
import { Input } from "../../components/Input";

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
      <Header />
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="nome">Nome: </label>
          <Input
            id="nome"
            name="nome"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nome}
          />
          <label htmlFor="idade">Idade: </label>
          <Input
            id="idade"
            name="idade"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.idade}
          />
          <label htmlFor="cep">CEP</label>
          <Input
            id="cep"
            name="cep"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.cep}
          />
          <button type="submit">Buscar CEP</button>
          <label htmlFor="logradouro">Logradouro</label>
          <Input
            id="logradouro"
            name="logradouro"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.logradouro}
          />
          <label htmlFor="bairro">Bairro</label>
          <Input
            id="bairro"
            name="bairro"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.bairro}
          />
          <label htmlFor="numero">Numero</label>
          <Input
            id="numero"
            name="numero"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.numero}
          />
          <label htmlFor="cidade">Cidade</label>
          <Input
            id="cidade"
            name="cidade"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.cidade}
          />
          <label htmlFor="formacoes">Formações</label>
          <Input
            id="formacoes"
            name="formacoes"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.formacoes}
          />
          <label htmlFor="experiencias">Experiências</label>
          <Input
            id="experiencias"
            name="experiencias"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.experiencias}
          />
          <label htmlFor="hobbies">Hobbies</label>
          <Input
            id="hobbies"
            name="hobbies"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.hobbies}
          />
        </form>
      </Container>
    </>
  );
}
