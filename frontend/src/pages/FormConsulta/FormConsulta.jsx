import React, { useState, useEffect } from 'react';

const FormConsulta = () => {
    const [consultas, setConsultas] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConsultas = async () => {
            try {
                const response = await fetch('/api/consultas');
                if (!response.ok) {
                    throw new Error(`Erro ao buscar consultas: ${response.statusText}`);
                }
                const data = await response.json();
                setConsultas(data);
            } catch (error) {
                console.error('Erro ao buscar consultas:', error);
                setError(error.message);
                setConsultas([]);
            }
        };

        fetchConsultas();
    }, []);

    return (
        <div>
            <h1>Formulário de Consulta</h1>
            {error ? (
                <p>{error}</p>
            ) : Array.isArray(consultas) && consultas.length > 0 ? (
                consultas.map((consulta, index) => (
                    <div key={index}>
                        <p>{consulta.nome}</p>
                        <p>{consulta.data}</p>
                    </div>
                ))
            ) : (
                <p>Nenhuma consulta encontrada.</p>
            )}
        </div>
    );
};

export default FormConsulta;