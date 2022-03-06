import { Link } from 'react-router-dom';
import {
	ButtonDois,
	ButtonUm,
	ContainerAll,
	ContainerButtons,
	ContainerColumn,
	Div,
	ImgText,
	Paragrafo,
	ParagrafoCotainer
} from './homeSyled';

import Text1 from '../../components/img/parte1.png';
import Text2 from '../../components/img/parte2.png';

export default function Home() {
	//Vou ser uma função de home
	return (
		<ContainerAll>
			<ContainerColumn>
				<ImgText src={Text1} />
				<ImgText src={Text2} />
			</ContainerColumn>
			<ContainerButtons>
				<ParagrafoCotainer>
					<Paragrafo>SE INSCREVA PARA VIAGENS ESPACIAIS, ALÉM DA NOSSA REALIDADE</Paragrafo>
					<Paragrafo>E CHEGUE ONDE NINGUÉM JAMAIS IMAGINOU CHEGAR!</Paragrafo>
				</ParagrafoCotainer>
				<ContainerColumn>
					<Div>
						<Link to="/all-trip">
							<ButtonUm>Ver viagens disponíveis</ButtonUm>
						</Link>
					</Div>
					<div>
						<Link to="/login">
							<ButtonDois>Área do Admin</ButtonDois>
						</Link>
					</div>
				</ContainerColumn>
			</ContainerButtons>
		</ContainerAll>
	);
}
