import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Categories } from "../pages/Categories";
import { HomeDesktop } from "../pages/HomeDesktop";
import { HomeMobile } from "../pages/HomeMobile";
import { NotFound } from "../pages/NotFound";
import { Project } from "../pages/Project";
import { Sobre } from "../pages/Sobre";

import { AnimatePresence } from "framer-motion";
import { useHeaderLogic } from "../hooks/useHeaderLogic";

export function AnimatedRoutes() {
	const location = useLocation();
	const { isMobile } = useHeaderLogic();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route
					path="/"
					element={isMobile ? <HomeMobile /> : <HomeDesktop />}
				/>
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/:category" element={<Categories />} />
				<Route path="/:category/:slug" element={<Project />} />
				<Route path="/404" element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	);
}
