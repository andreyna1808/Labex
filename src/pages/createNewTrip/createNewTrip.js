import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { urlViagem } from '../../components/url/urls';
import { Button, Form, Input, Tittle } from '../subscribeUser/subsStyled';
import { ButtonCreate, Fundo } from './newTripStyled';

const verCalendario = () => {
	const data = new Date();
	const mes = ('0' + (data.getMonth() + 1)).slice(-2);
	const ano = data.getFullYear();
	let dia = Number(data.getDay()) + 2;
	dia = ('0' + dia.toString()).slice(-2);
	return `${dia}/${mes}/${ano}`;
};

export default function CreateNewTrip() {
	//STATES
	const [ nome, setNome ] = useState('');
	const [ planeta, setPlaneta ] = useState('');
	const [ data, setData ] = useState(verCalendario());
	const [ descricao, setDescricao ] = useState('');
	const [ duracao, setDuracao ] = useState('');

	const [ criacaoViagem, setCriacaoViagem ] = useState([]);

	//TARGETS
	const onNome = (e) => {
		setNome(e.target.value);
	};
	const onPlaneta = (e) => {
		setPlaneta(e.target.value);
	};
	const onData = (e) => {
		setData(e.target.value);
	};
	const onDescricao = (e) => {
		setDescricao(e.target.value);
	};
	const onDuracao = (e) => {
		setDuracao(e.target.value);
	};

	const criarViagem = () => {
		const body = {
			name: nome,
			planet: planeta,
			date: data,
			description: descricao,
			durationInDays: duracao
		};
		axios
			.post(urlViagem, body, {
				headers: {
					auth: localStorage.getItem('token')
				}
			})
			.then((res) => {
				setCriacaoViagem(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	return (
		<Fundo>
			<Tittle>Criar viagem</Tittle>
			<Form>
				<Input placeholder="Nome" value={nome} onChange={onNome} required />
				<Input placeholder="Planeta" value={planeta} onChange={onPlaneta} required />
				<Input type="date" variant="outlined"
				InputLabelProps={{
						shrink: true
					}}
					value={data}
					onChange={onData}
				/>

				<Input placeholder="Descrição" value={descricao} onChange={onDescricao} required />
				<Input placeholder="Duração em dias" value={duracao} onChange={onDuracao} required />
				<ButtonCreate onClick={criarViagem}>Criar viagem</ButtonCreate>
			</Form>
			<Link to="/dashboard">
				<Button>voltar</Button>
			</Link>
		</Fundo>
	);
}
