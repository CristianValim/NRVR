import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Casas } from '../pages/Casas';
import { Comercial } from '../pages/Comercial';
import { Interiores } from '../pages/Interiores';
import { Edificios } from '../pages/Edificios';
import { Objetos } from '../pages/Objetos';
import { Sobre } from '../pages/Sobre';


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/casas" element={<Casas />} />
            <Route path="/comercial" element={<Comercial />} />
            <Route path="/interiores" element={<Interiores />} />
            <Route path="/edificios" element={<Edificios />} />
            <Route path="/objetos" element={<Objetos />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    )
}