import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { urlViagem } from '../../components/url/urls';
import { Tittle } from '../subscribeUser/subsStyled';
import { Button, ButtonSub, Container, ContainerCard, Fundo, H1, Paragrafo } from './AllTripStyled';

export default function AllTrip() {
	//Vou ser uma função de ver todas as viagens
	const [ viagens, setViagens ] = useState([]);

	const recebeId = (id) => {	
		localStorage.setItem('inscrever',id)
	}

	const getViagens = () => {
		axios
			.get(urlViagem)
			.then((res) => {
				setViagens(res.data.trips);
			})
			.catch((err) => {
				alert(err);
			});
	};
	useEffect(() => {
		getViagens();
	}, []);

	return (
		<Fundo>
				<Link to="/"><Button>Voltar ao home</Button></Link>
			<Tittle>Lista de viagens</Tittle>
			<Container>
				{viagens.map((dados) => {
					return (
						<ContainerCard key={dados.id}>
							<h1>Nome: {dados.name}</h1>
							<Paragrafo>Descrição: {dados.description}</Paragrafo>
							<Paragrafo>Planeta ou Universo: {dados.planet}</Paragrafo>
							<Paragrafo>Duração: {dados.durationInDays}</Paragrafo>
							<Paragrafo>Data da viagem: {dados.date}</Paragrafo>
							<div>
								<Link to="/subscribe">
									<ButtonSub onClick={() => recebeId(dados.id)}>Inscrever-se</ButtonSub>
								</Link>
							</div>
						</ContainerCard>
					);
				})}
			</Container>
		</Fundo>
	);
}
