import React from 'react';

const MarcarConsulta = () => {
    return (
        <div>
            <h1>Marcar Consulta</h1>
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="date">Data:</label>
                    <input type="date" id="date" name="date" required />
                </div>
                <div>
                    <label htmlFor="time">Hora:</label>
                    <input type="time" id="time" name="time" required />
                </div>
                <button type="submit">Marcar</button>
            </form>
        </div>
    );
};

export default MarcarConsulta;