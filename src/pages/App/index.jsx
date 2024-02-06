import { Route, Routes } from "react-router-dom";
import { Header } from "../../components/Header";
import { Home } from "../Home"
import { Categories } from "../../components/Categories";
import { Project } from "../../components/Project";
import { Sobre } from "../Sobre"
import { NotFound } from "../../components/NotFound";

export function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/NRVR" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/:category" element={<Categories />} />
        <Route path="/:category/:slug" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}