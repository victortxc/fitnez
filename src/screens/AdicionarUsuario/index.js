

import React from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Formik, Form } from 'formik';
import { getCep } from "../../actions/cep.js"


export function AdicionarUsuario() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function preencherCep() {
    const cep = this.cep.replace(/\D/g, "");
    if (cep.length === 8) {
      getCep(cep).then(response => {
        this.rua = response.data.logradouro;
        this.bairro = response.data.bairro;
        this.estado = response.data.uf;
        this.cidade = response.data.localidade;
      });
    }

  return (
      <>
      <Header />
      <Formik
        onSubmit={() => {
              preencherCep();
            }}
        validateOnMount
        initialValues={{
          nome: '',
          idade: '', 
          cep: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          formacao: '', 
          experiencia: '', 
          hobbies: ''
        }}
        >
        {({
              values,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
            <Form onSubmit={{onSubmit}}>
                <Input
                  label="Nome:"
                  type="text"
                  name="nome"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nome}
                />
                <Input
                  label="Idade:"
                  type="text"
                  name="idade"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.idade}
                />
                <Input
                  label="CEP:"
                  type="text"
                  name="cep"
                  onChange={handleChange}
                  value={values.cep}
                  onBlur={handleBlur}
                />
                <button type="submit" onClick={preencherCep}>Buscar</button>
                <Input
                  label="Bairro:"
                  type="text"
                  name="bairro"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bairro}
                />
                <Input
                  label="Logradouro: "
                  type="text"
                  name="logradouro"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.logradouro}
                />
                <Input
                  label="Nº"
                  type="text"
                  name="numero"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.numero}
                />
                <Input
                  label="Cidade:"
                  type="text"
                  name="cidade"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cidade}
                />
                <Input
                  label="Formações:"
                  type="text"
                  name="formacao"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.formacao}
                />
                <Input
                  label="Experiências:"
                  type="text"
                  name="experiencia"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.experiencia}
                />
                <Input
                  label="Hobbies:"
                  type="text"
                  name="hobbies"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.hobbies}
                />
            <button type="submit">Enviar</button>
          </Form>
          )}
          </Formik>
    </>)}}