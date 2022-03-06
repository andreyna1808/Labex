import styled from "styled-components";

export const ButtonSub = styled.button`
	background: linear-gradient(90deg, rgba(146, 49, 170, 1) 2%, rgba(61, 153, 205, 1) 100%);
	color: white;
	cursor: pointer;
	font-size: 20px;
	font-weight: bolder;
	width: 150px;
	margin: 7px;
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
		width: 120px;
		height: 30px;
		font-size: 22px;
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