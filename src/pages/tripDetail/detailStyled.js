import styled from "styled-components";

import FundoS2 from '../../components/img/fundoS2.jpg'

export const Container = styled.div`
  background: url(${FundoS2}) no-repeat center;
  width: 100%;
	height: 100vh;
	background-size: cover;
	text-align: center;
	padding: 5% 0;
  overflow-x: hidden;
  margin: auto;
`

export const ContainerCard = styled.div`
	background: rgba(0,0,0, 0.97);
  width: 50%;
  margin: 2% auto;
	padding: 10px 30px;
  @media (max-width: 700px) {
		width: 80%;
	}
`
export const Linha = styled.li`
  text-align: left;
`

export const ButtonCreate = styled.button`
	background: linear-gradient(90deg, rgba(146, 49, 170, 1) 2%, rgba(61, 153, 205, 1) 100%);
	color: white;
	cursor: pointer;
	font-size: 20px;
	font-weight: bolder;
	margin: 10px;
  width: 350px;
	border-radius: 350px;
	height: 50px;
	&:hover {
		background: linear-gradient(90deg, #471254 40%, #71c5f5 100%);
		border: solid 2px black;
	}
	@media (min-width: 1600px) {
		margin: 5%;
		height: 70px;
		font-size: 32px;
	}
	@media (max-width: 700px) {
		margin: 10px auto;
		height: 50px;
		font-size: 22px;
		align-items: center;
		display: flex;
		justify-content: center;
	}
`;
export const Buttons = styled.button`
	background: linear-gradient(90deg, rgba(146, 49, 170, 1) 2%, rgba(61, 153, 205, 1) 100%);
	color: white;
	cursor: pointer;
	font-size: 20px;
	font-weight: bolder;
	width: 200px;
	margin: 7px;
	border-radius: 350px;
	height: 35px;
	text-align: center;
	&:hover {
		background: linear-gradient(90deg, #471254 40%, #71c5f5 100%);
		border: solid 2px black;
	}
	@media (min-width: 1600px) {
		width: 300px;
		height: 50px;
		font-size: 32px;
	}
	@media (max-width: 700px) {
		width: 180px;
		height: 30px;
		font-size: 22px;
	}
`;

export const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 7%;
  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    display: block;
	}
`