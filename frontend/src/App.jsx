import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FormConsulta from './FormConsulta';
import MarcarConsulta from './MarcarConsulta';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/form-consulta" />} />
                <Route path="/form-consulta" element={<FormConsulta />} />
                <Route path="/marcar-consulta" element={<MarcarConsulta />} />
            </Routes>
        </Router>
    );
};

export default App;