import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { urlViagem } from "../../components/url/urls";
import { Container, ContainerCard } from "../allTrip/AllTripStyled";
import { Tittle } from "../subscribeUser/subsStyled";
import VerificaLogin from "../verificaLogin";
import { Botoes, Buttons, ButtonSub } from "./dashboardStyled";

export default function Dashboard(props){
  const history = useHistory();
  const [ viagens, setViagens ] = useState([]);

  VerificaLogin();

  //Fazer uma função que ao clicar vai receber o id
  //e vamos guardar no local stody
  const recebeId = (id) => {
    console.log('guardei o id',id);
    localStorage.setItem('id', id)
  }

  //DESLOGAR O USUÁRIO
  const deslogar = () => {
    localStorage.clear()
    history.push('/login')
  }

  //MOSTRAR AS VIAGENS EXISTENTES
	const getViagens = () => {
		axios
			.get(urlViagem)
			.then((res) => {
				setViagens(res.data.trips);
			})
			.catch((err) => {
				console.log('Eu sou o erro');
			});
	};
  const deleteViagens = (id) => {
    axios.delete(`${urlViagem}/${id}`,{
      headers: {
        auth: localStorage.getItem('token')
      }
    })
			.then((res) => {
        console.log(res.data);
			})
			.catch((err) => {
				console.log('Não funcionei dashboard delete', err.response);
			});
	};

	useEffect(() => {
		getViagens();

	}, [getViagens()]);

  return (
    <div>
      <Botoes>
      <Link to="/"><Buttons>Voltar ao home</Buttons></Link>
        <Link to="/create-trip"><Buttons>Criar viagem</Buttons></Link>
        <Buttons onClick={deslogar}>Fazer logout</Buttons>
      </Botoes>
      <Tittle>Lista de viagens</Tittle>
			<Container>
				{viagens.map((dados) => {
					return (
						<ContainerCard key={dados.id}>
							<h1>Nome: {dados.name}</h1>
              <Link to="/detail-trip"><ButtonSub onClick={() => recebeId(dados.id)}>INFO</ButtonSub></Link>
              <ButtonSub onClick={() => deleteViagens(dados.id)}>REMOVER</ButtonSub>
						</ContainerCard>
					);
				})}
			</Container>
    </div>
  );
}