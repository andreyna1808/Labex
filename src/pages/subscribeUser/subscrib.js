import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { urlViagem } from '../../components/url/urls';
import { Button, Form, Fundo, Input, Options, Selects, Tittle } from './subsStyled';
import { Paises } from '../../components/paises/paises';

export default function Subscribe() {
	//FUNÇÕES
	const [ nome, setNome ] = useState('');
	const [ idade, setIdade ] = useState('');
	const [ textoCandidatura, setTextoCandidatura ] = useState('');
	const [ profissao, setProfissao ] = useState('');
	const [ origem, setOrigem ] = useState('');
	const [ viagemEscolha, setViagemEscolha ] = useState(localStorage.getItem('inscrever'));

	//TARGETS
	const onNome = (e) => {
		setNome(e.target.value);
	};
	const onIdade = (e) => {
		setIdade(e.target.value);
	};
	const onTextoCandidatura = (e) => {
		setTextoCandidatura(e.target.value);
	};
	const onProfissao = (e) => {
		setProfissao(e.target.value);
	};
	const onOrigem = (e) => {
		setOrigem(e.target.value);
	};

	const postFormulario = (e) => {
		const body = {
			name: nome,
			age: idade,
			applicationText: textoCandidatura,
			profession: profissao,
			country: origem,
		};
		axios
			.post(`${urlViagem}/${viagemEscolha}/apply`, body)
			.then((res) => {
				alert('Sua inscrição foi enviada com sucesso');
			})
			.catch((err) => {
				alert('Infelizmente não foi possível fazer sua inscrição devido ao:', err.response);
				console.log(err.response);
			});
	};

	return (
		<Fundo>
			<Tittle>Se inscreva para viagens incríveis pelo universo!</Tittle>
			<Form>
				<Input required type="text" pattern={"(.*[a-z]){3}"} placeholder="Qual o seu nome?"  value={nome} onChange={onNome}/>
				<Input required type="number" min="18" placeholder="Qual a sua idade?" value={idade} onChange={onIdade}/>
				<Input required type="text" pattern={"(.*[a-z]){5}"} placeholder="Qual sua profissão?" value={profissao} onChange={onProfissao}/>
				<Input required type="text" pattern={"(.*[a-z]){25}"} placeholder="Texto de candidatura" value={textoCandidatura} onChange={onTextoCandidatura}/>
				
        <Selects required type="text" value={origem} onChange={onOrigem}>
          <Options>Escolha um País</Options>
					{Paises.map((pais) => {
						return <Options key={pais}>{pais}</Options>
					})}
        </Selects>
      </Form>

      <div>
        <Link to="/all-trip"><Button>Voltar para as viagens</Button></Link>
        <Button onClick={postFormulario}>Enviar inscrição!</Button>
      </div>
      
		</Fundo>
	);
}