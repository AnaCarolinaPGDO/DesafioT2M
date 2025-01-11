import React, { useState, useEffect } from 'react';

const FormConsulta = () => {
    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        // Simulação de uma chamada de API para buscar consultas
        const fetchConsultas = async () => {
            try {
                const response = await fetch('/api/consultas');
                const data = await response.json();
                setConsultas(data);
            } catch (error) {
                console.error('Erro ao buscar consultas:', error);
                setConsultas([]); // Defina como um array vazio em caso de erro
            }
        };

        fetchConsultas();
    }, []);

    return (
        <div>
            <h1>Formulário de Consulta</h1>
            {Array.isArray(consultas) && consultas.length > 0 ? (
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