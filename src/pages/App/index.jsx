import { Route, Routes } from "react-router-dom";
import { Header } from "../../components/header";
import { Categories } from "../../components/categories";
import { Project } from "../../components/projetcs";
import { Sobre } from "../Sobre"

export function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/:category" element={<Categories />} />
        <Route path="/:category/:slug" element={<Project />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </>
  );
}