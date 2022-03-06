import styled from "styled-components";
import Fundo2 from '../../components/img/fundo2.jpeg'

export const Fundo = styled.div`
  background: url(${Fundo2}) no-repeat center;
  width: 100%;
	height: 100vh;
	background-size: cover;
	text-align: center;
	padding: 5% 0;
  overflow-x: hidden;
`
export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	margin: 10px;
	@media (min-width: 1600px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;

	}
	@media (max-width: 700px) {
		grid-template-columns: 1fr;

	}
`

export const Button = styled.button`
	background: linear-gradient(90deg, rgba(146, 49, 170, 1) 2%, rgba(61, 153, 205, 1) 100%);
	color: white;
	cursor: pointer;
	font-size: 20px;
	font-weight: bolder;
	width: 280px;
	margin: 10px;
	border-radius: 350px;
	height: 50px;
	&:hover {
		background: linear-gradient(90deg, #471254 40%, #71c5f5 100%);
		border: solid 2px black;
	}
	@media (min-width: 1600px) {
		margin: 5%;
		width: 500px;
		height: 70px;
		font-size: 32px;
	}
	@media (max-width: 700px) {
		margin: 10px auto;
		width: 300px;
		height: 50px;
		font-size: 22px;
		align-items: center;
		display: flex;
		justify-content: center;
	}
`;
export const ButtonSub = styled.button`
	background: linear-gradient(90deg, rgba(146, 49, 170, 1) 2%, rgba(61, 153, 205, 1) 100%);
	color: white;
	cursor: pointer;
	font-size: 20px;
	font-weight: bolder;
	width: 200px;
	margin: 10px;
	border-radius: 350px;
	height: 35px;
	text-align: center;
	&:hover {
		background: linear-gradient(90deg, #471254 40%, #71c5f5 100%);
		border: solid 2px black;
	}
	@media (min-width: 1600px) {
		width: 250px;
		height: 50px;
		font-size: 32px;
	}
	@media (max-width: 700px) {
		width: 150px;
		height: 30px;
		font-size: 22px;
	}
`;

export const ContainerCard = styled.div`
	background: rgba(0,0,0, 0.5);
	text-align: center;
	padding: 5px 30px;
`
export const Paragrafo = styled.p`
	text-align: left;
	font-size: 16px;
`