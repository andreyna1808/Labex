import styled from "styled-components";
import Fundo7 from '../../components/img/fundo7.jpg'

export const Fundo = styled.div`
  background: url(${Fundo7}) center;
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
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 50%;
	margin: 3% auto;
	@media (max-width: 700px) {
		margin: 2% 10%;
		width: 300px;
	}
	@media (min-width: 1600px) {
		width: 80%;
		margin: 8% auto;
	}
`
export const Tittle = styled.h1`
	background: rgba(0, 0, 0, 0.7);
	width: 60%;
	font-size: 32px;
	font-weight: bold;
	margin: 2% auto;
	text-align: center;
	font-family: 'Helvetica', 'Sans-Bold';
	@media (max-width: 700px) {
		width: 90%;
		margin: 10% 0;
	}
	@media (min-width: 1600px) {
		margin: auto;
	}
`;

export const Input = styled.input`
	background: rgba(0, 0, 0, 0.7);
	height: 40px;
	margin: 1%;
	padding: 10px;
	font-weight: bolder;
	::placeholder {
       color: white;
   }
	::-webkit-calendar-picker-indicator{
		filter: invert(0.8) brightness(300%) sepia(300%) saturate(300%) hue-rotate(20deg);
		cursor: pointer;
		width: 100px;
	}
	 @media (min-width: 1600px) {
		height: 60px;
	}
`
export const Selects = styled.select`
	background: rgba(0, 0, 0, 0.7);
	height: 40px;
	margin: 1%;
	padding: 10px;
	font-weight: bolder;
	::placeholder {
    color: white;
  }
	@media (min-width: 1600px) {
		height: 60px;
	}
	`
	
export const Options = styled.option`
	font-weight: bolder;
	color: white;
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
