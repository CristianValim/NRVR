import { AnimatePresence, motion } from "framer-motion";
import { Container } from "./styles";

import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.svg";
import sobre from "../../assets/sobre.png";

export function Sobre() {
	return (
		<AnimatePresence>
			<Container
				as={motion.div}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<div className="sobre">
					<img className="col3" src={sobre} alt="Foto dos fundadores NRVR" />
					<h1 className="row1">o escritório</h1>
					<p className="row1">
						nrvr arquitetos, prática de arquitetura e urbanismo, do objeto ao
						lugar. por nilton ribeiro e vitor reisdörfer.
						<br />
						<br />O lugar é um fundamento cíclico, um encontro de fluxos e de
						acontecimentos, um local de transformação das possibilidades
						humanas. É onde produzimos coletivamente as nossas ideias, onde
						produzimos coletivamente a nós mesmos.
					</p>

					<h1 className="col1">contato</h1>
					<Link
						className="instagram-logo"
						to="https://www.instagram.com/nrvrarquitetos/"
						target="blank"
					>
						<img src={instagram} alt="Link para o nosso Instagram" />
					</Link>

					<div className="contact col2">
						<p>
							<span>contato@nrvrarquitetos.com</span>
						</p>
						<h3>
							<span>vitor reisdörfer</span>
						</h3>
						<Link
							to="https://wa.me/5542998003356"
							target="blank"
							className="social"
						>
							<span>42 9 9800 3356</span>
						</Link>
						<h3>
							<span>nilton ribeiro</span>
						</h3>
						<Link
							to="https://wa.me/5544998663642"
							target="blank"
							className="social"
						>
							<span>44 9 9866 3642</span>
						</Link>
					</div>
				</div>
			</Container>
		</AnimatePresence>
	);
}
