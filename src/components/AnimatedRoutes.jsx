import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/Home"
import { Categories } from "../pages/Categories";
import { Project } from "../pages/Project";
import { Sobre } from "../pages/Sobre"
import { NotFound } from "../pages/NotFound";

import { AnimatePresence } from 'framer-motion';

export function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/NRVR" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/:category" element={<Categories />} />
                <Route path="/:category/:slug" element={<Project />} />
                <Route path="/404" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    )
}