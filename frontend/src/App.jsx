import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FormConsulta from './pages/FormConsulta';
import PaginaInicial from './pages/Home/PaginaInicial';
import MarcarConsulta from './pages/MarcarConsulta';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/PaginaInicial" />} />
                <Route path="/form-consulta" element={<FormConsulta />} />
                <Route path="/marcar-consulta" element={<MarcarConsulta />} />
                <Route path="/pagina-inicial" element={<PaginaInicial />} />
            </Routes>
        </Router>
    );
};

export default App;