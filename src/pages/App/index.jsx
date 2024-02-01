import { Route, Routes } from "react-router-dom";
import { Header } from "../../components/header";
import { Home } from "../Home"
import { Categories } from "../../components/categories";
import { Project } from "../../components/projetcs";
import { Sobre } from "../Sobre"

export function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projetos/:category" element={<Categories />} />
        <Route path="/projetos/:category/:slug" element={<Project />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </>
  );
}