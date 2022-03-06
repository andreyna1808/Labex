import styled from 'styled-components';
import Fundo from '../../components/img/fundo4.jpeg';

export const ContainerAll = styled.div`
	background: url(${Fundo});
	width: 100%;
	height: 100vh;
	background-size: cover;
	text-align: center;
	padding: 5% 0;
	overflow-x: hidden;
	@media (min-width: 1600px) {
		padding: 12% 0;
	}
	@media (max-width: 700px) {
		padding: 5% 3%;
	}
`;

export const ContainerColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ImgText = styled.img`
	text-align: left;
	padding: 2px 5%;
	width: 50%;
	@media (min-width: 1600px) {
		width: 60%;
	}
	@media (max-width: 700px) {
		width: 100%;
	}
`;
export const ParagrafoCotainer = styled.div`
	margin: 4% 0%;
	width: 60%;
	@media (max-width: 700px) {
		width: 100%;
	}
`;
export const Paragrafo = styled.p`
	color: white;
	font-size: 28px;
	font-weight: bolder;
	width: 80%;
	text-align: left;
	padding: 0 5px;
	margin: 2%;
	font-family: 'Helvetica', 'Sans-Bold';
	@media (min-width: 1600px) {
		margin: 2%;
		font-size: 32px;
	}
	@media (max-width: 700px) {
		width: 97%;
		margin: 10% 0;
	}
`;
export const ContainerButtons = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
export const ButtonUm = styled.button`
	background: linear-gradient(90deg, rgba(146, 49, 170, 1) 2%, rgba(61, 153, 205, 1) 100%);
	color: white;
	cursor: pointer;
	font-size: 20px;
	font-weight: bolder;
	width: 380px;
	border-radius: 350px;
	height: 50px;
	&:hover {
		background: linear-gradient(90deg, #471254 40%, #71c5f5 100%);
		border: solid 2px black;
	}
	@media (min-width: 1600px) {
		margin: 10% 42%;
		width: 500px;
		height: 70px;
		font-size: 32px;
	}
	@media (max-width: 700px) {
		margin: 5px 0;
		width: 350px;
		height: 50px;
		font-size: 22px;
		align-items: center;
		display: flex;
		justify-content: center;
	}
`;
export const ButtonDois = styled.button`
	background: linear-gradient(90deg, rgba(146, 49, 170, 1) 2%, rgba(61, 153, 205, 1) 100%);
	color: white;
	cursor: pointer;
	font-size: 20px;
	font-weight: bolder;
	width: 380px;
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
		margin: 10px 0;
		width: 350px;
		height: 50px;
		font-size: 22px;
		align-items: center;
		display: flex;
		justify-content: center;
	}
`;
export const Div = styled.div`
	margin: 17%;
	@media (max-width: 700px) {
		margin: 5px 0;
	}
`;
