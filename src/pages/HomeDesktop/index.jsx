import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pages } from "../../modules/pagesPath";

import { AnimatePresence, motion } from "framer-motion";
import { Container } from "./styles";

export function HomeDesktop() {
	const [currentCategoryIndex, setCurrentCategoryIndex] = useState(1);
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const categories = Object.keys(pages);
	const projects = Object.values(pages);

	useEffect(() => {
		const timer = setInterval(() => {
			if (currentProjectIndex + 1 < getCurrentCategory().length) {
				setCurrentProjectIndex(currentProjectIndex + 1);
			} else {
				setCurrentCategoryIndex(
					(prevIndex) => (prevIndex + 1) % categories.length,
				);
				setCurrentProjectIndex(0);
			}
		}, 4000);

		return () => clearInterval(timer);
	}, [currentProjectIndex, categories.length]);

	const getCurrentCategory = () => {
		return Object.values(projects[currentCategoryIndex]);
	};

	const getCurrentProject = () => {
		return getCurrentCategory()[currentProjectIndex];
	};

	return (
		<Container>
			<AnimatePresence>
				<motion.div
					key={getCurrentProject().slug}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 3 }}
					className="overlay-container"
				>
					<Link
						to={`/${categories[currentCategoryIndex]}/${
							getCurrentProject().slug
						}`}
					>
						<img
							src={getCurrentProject().cover}
							alt={getCurrentProject().title}
						/>
						<div className="overlay">{getCurrentProject().title}</div>
					</Link>
				</motion.div>
			</AnimatePresence>
		</Container>
	);
}
