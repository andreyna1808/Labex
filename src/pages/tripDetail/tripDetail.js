import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { urlTripDetail } from '../../components/url/urls';
import { Paragrafo } from '../allTrip/AllTripStyled';
import { Tittle } from '../subscribeUser/subsStyled';
import { Container, ButtonCreate, ContainerCard, Botoes, Buttons, Linha } from './detailStyled';

export default function TripDetail() {
	//Vou ser uma função de de apertar e ver os detalhes
	const [ id, setId ] = useState(localStorage.getItem('id'));
	const [ viagemDetalhada, setViagemDetalhada ] = useState({});

  const [pendentes, setPendentes] = useState([])
  const [aprovados, setAprovados] = useState([])


	const todosOsDetalhes = () => {
		const url = urlTripDetail + id;
		axios
			.get(`${url}`, {
				headers: {
					auth: localStorage.getItem('token')
				}
			})
			.then((res) => {
				setViagemDetalhada(res.data.trip);
        setPendentes(res.data.trip.candidates);
				setAprovados(res.data.trip.approved);
			})
			.catch((err) => {
				console.log(err.data);
			});
	};

	const aprovarCandidato = (candidateId) => {
		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/dricaMoreira/trips/${id}/candidates/${candidateId}/decide`
		const body = {
			approve: true,
		}
		axios.put(url, body, {
			headers: {
				auth: localStorage.getItem('token')
			}
		})
		.then((res) => {
			todosOsDetalhes()
		})
		.catch((err) => {
			alert('Não foi possível aprovar o(a) candidato(a)')
			console.log(err.response);
		})
	}

	const reprovarCandidato = (reproveId) => {
		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/dricaMoreira/trips/${id}/candidates/${reproveId}/decide`
		const body = {
			approve: false
		}
		axios.put(url, body, {
			headers: {
				auth: localStorage.getItem('token')
			}
		})
		.then(() => {
			todosOsDetalhes()
		})
		.catch((err) => {
			alert('Não foi possível aprovar o(a) candidato(a)')
		})

	}

	useEffect(() => {
		todosOsDetalhes();
	}, []);

	return (
		<Container>
			<Tittle>Detalhes de Viagens</Tittle>
			<Link to="/dashboard">
				<ButtonCreate>Voltar ao painel administrativo</ButtonCreate>
			</Link>
			<ContainerCard>
				<h1>{viagemDetalhada.name}</h1>
				<Paragrafo>{viagemDetalhada.description}</Paragrafo>
				<Paragrafo>{viagemDetalhada.planet}</Paragrafo>
				<Paragrafo>{viagemDetalhada.durationInDays}</Paragrafo>
				<Paragrafo>{viagemDetalhada.date}</Paragrafo>
			</ContainerCard>

			<h1>Candidatos aprovados</h1>
			<ContainerCard>
			{aprovados && aprovados.length > 0 ? aprovados.map((dados) => {
				return <Linha key={dados.id}>{dados.name}</Linha>
				}) : <p>Nenhum candidato foi aprovado ainda</p>}
			</ContainerCard>	
			<h1>Candidatos pendentes</h1>
			{pendentes && pendentes.length > 0 ? pendentes.map((dados) => {
				return <ContainerCard key={dados.id}>
					<h1>{dados.name}</h1>
					<Botoes>
						<Buttons onClick={() => aprovarCandidato(dados.id)}>Aprovar</Buttons>
						<Buttons onClick={() => reprovarCandidato(dados.id)}>Reprovar</Buttons>
					</Botoes>
				</ContainerCard>
			}) : <p>Essa viagem não possui nenhum candidato pendente</p>}
		</Container>
	);
}
