import styled from "styled-components";
import Fundo5 from '../../components/img/fundo5.jpeg'

export const Fundo = styled.div`
  background: url(${Fundo5}) center;
  width: 100%;
	height: 100vh;
	background-size: cover;
	text-align: center;
	padding: 5% 0;
  overflow-x: hidden;
	@media (max-width: 700px) {
		background-size: auto;
	}
`
export const ButtonCreate = styled.button`
	background: linear-gradient(90deg, rgba(146, 49, 170, 1) 2%, rgba(61, 153, 205, 1) 100%);
	color: white;
	cursor: pointer;
	font-size: 20px;
	font-weight: bolder;
	margin: 10px;
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