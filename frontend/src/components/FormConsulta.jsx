import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FormConsulta = () => {
    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        // Fetch the consultations from an API or database
        axios.get('/api/consultas')
            .then(response => {
                setConsultas(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the consultations!', error);
            });
    }, []);

    return (
        <div>
            <h1>Consultas Marcadas</h1>
            <ul>
                {consultas.map(consulta => (
                    <li key={consulta.id}>
                        <p>Data: {consulta.data}</p>
                        <p>Hora: {consulta.hora}</p>
                        <p>Paciente: {consulta.paciente}</p>
                        <p>Médico: {consulta.medico}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FormConsulta;