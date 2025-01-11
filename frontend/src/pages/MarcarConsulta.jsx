import React, { useState } from 'react';

const MarcarConsulta = () => {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [especialidade, setEspecialidade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Consulta marcada:', { nome, data, hora, especialidade });
    };

    return (
        <div>
            <h1>Marcar Consulta</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Data:</label>
                    <input 
                        type="date" 
                        value={data} 
                        onChange={(e) => setData(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Hora:</label>
                    <input 
                        type="time" 
                        value={hora} 
                        onChange={(e) => setHora(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Especialidade:</label>
                    <input 
                        type="text" 
                        value={especialidade} 
                        onChange={(e) => setEspecialidade(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Marcar Consulta</button>
            </form>
        </div>
    );
};

export default MarcarConsulta;