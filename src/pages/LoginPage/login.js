import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { urlLogin } from "../../components/url/urls";
import { Form, Input } from "../subscribeUser/subsStyled";
import { Buttons } from "../tripDetail/detailStyled";
import VerificaLogin from "../verificaLogin";
import { Container, Fundo } from "./loginStyled";


export default function Login() {
  //Vou ser uma função de login para entrar no painel do adm
  VerificaLogin();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const onEmail = (e) => {
    setEmail(e.target.value)
  }
  const onSenha = (e) => {
    setSenha(e.target.value)
  }
  const logar = () => {
    const body = {
      email: email,
      password: senha,
    }
    axios.post(urlLogin, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      history.push('/dashboard')
      console.log('Sucesso', res.data.token);
    })
    .catch((err) => {
      alert('Desculpa, mas esse login não consta no nosso banco de dados')
      console.log('erro na pagina de Login linha 30', err);
    })
  }

  return (
    <Fundo>
      <Container>
        <Form>
          <Input type="email" required placeholder="Seu email" value={email} onChange={onEmail}></Input>
          <Input type="password" required placeholder="Sua senha" value={senha} onChange={onSenha}></Input>
        </Form>
        <div>
          <Buttons onClick={logar}>Fazer login</Buttons>
          <Link to="/"><Buttons>Voltar</Buttons></Link>
        </div>
      </Container>
    </Fundo>
  );
}