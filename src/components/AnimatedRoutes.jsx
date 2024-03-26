import { Route, Routes, useLocation } from 'react-router-dom';
import { HomeDesktop } from '../pages/HomeDesktop';
import { HomeMobile } from '../pages/HomeMobile';
import { Categories } from '../pages/Categories';
import { Project } from '../pages/Project';
import { Sobre } from '../pages/Sobre';
import { NotFound } from '../pages/NotFound';

import { AnimatePresence } from 'framer-motion';
import { useHeaderLogic } from '../hooks/useHeaderLogic';

export function AnimatedRoutes() {
  const location = useLocation();
  const { isMobile } = useHeaderLogic();

  return (
    <AnimatePresence>
      <Routes
        location={location}
        key={location.pathname}>
        <Route
          path="/NRVR"
          element={isMobile ? <HomeMobile /> : <HomeDesktop />}
        />
        <Route
          path="/sobre"
          element={<Sobre />}
        />
        <Route
          path="/:category"
          element={<Categories />}
        />
        <Route
          path="/:category/:slug"
          element={<Project />}
        />
        <Route
          path="/404"
          element={<NotFound />}
        />
      </Routes>
    </AnimatePresence>
  );
}
