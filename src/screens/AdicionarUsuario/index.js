import React from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {
  Container,
  Title,
  Form,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useForm } from 'react-hook-form';


const {register, setValue, setFocus} = useForm();

export function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/home");
  }



  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      // register({ name: 'address', value: data.logradouro });
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setFocus('addressNumber');
    });
  }
  
  return (
    <>
      <Header />
      <Container>
          <Title>Adicionar</Title>
          <Formik
            initialValues={{ 
                nome: "",
                idade: "", 
                cep: "", 
                bairro: "", 
                logradouro: "", 
                numero: "", 
                cidade: "", 
                formacao: "", 
                experiencia: "", 
                hobbies: "" 
            }}
            validationSchema={SignupSchema}
            onSubmit={() => {
              handleLogin();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
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
                  onBlur={checkCEP}
                  value={values.cep}
                  {...register("cep")}
                />
                <Input
                  label="Bairro:"
                  type="text"
                  name="bairro"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bairro}
                  {...register("neighborhood" )}
                />
                <Input
                  label="Logradouro: "
                  type="text"
                  name="logradouro"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.logradouro}
                  {...register("address" )}
                />
                <Input
                  label="Nº"
                  type="text"
                  name="numero"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.numero}
                  {...register("addressNumber" )}
                />
                <Input
                  label="Cidade:"
                  type="text"
                  name="cidade"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cidade}
                  {...register("city" )}
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
                
                <Button type="reset">Limpar</Button>
                <Button type="submit">Enviar</Button>

              </Form>
            )}
          </Formik>
      </Container>
    </>
  );
}
