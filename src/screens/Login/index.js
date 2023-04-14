import React from "react";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {Container, ContainerLogin, Title, ForgotPassword} from './styles';

export function Login() {
    return (
        <>
            <Header />
            <Container>
                <ContainerLogin>
                    <Title>Acesse sua conta FIT.NEZ</Title>
                    <Input label="E-mail" type="text" placeholder="Preencha o e-mail cadastrado" />
                    <Input label="Senha" type="password" placeholder="Preencha a senha cadastrada" />
                    <ForgotPassword href="/">Esqueci minha senha</ForgotPassword>
                    <Button>Acessar minha conta</Button>
                </ContainerLogin>
            </Container>
        </>
    );
}
