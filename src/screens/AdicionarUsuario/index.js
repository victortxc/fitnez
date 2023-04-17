
import React from "react";
import { Header } from "../../components/Header";
import { Formik, Field, Form } from 'formik';
import './App.css';

function Adicionar() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }

  return (
      <>
      <Header />
      <Container> 
      <Title>Adicionar</Title>
      <Formik
        onSubmit={onSubmit}
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
        render={({ isValid, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
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
                  onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                />
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
            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      />
      </Container> 
    </>)}