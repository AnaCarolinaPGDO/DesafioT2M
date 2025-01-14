import React from 'react';
import { Container, Title, Subtitle, Button, ErrorMessage } from './styled.jsx';

const PaginaInicial = () => {
    return (
        <Container>
            <Title>Bem-vindo à Página Inicial</Title>
            <Subtitle>Esta é a página inicial do nosso site</Subtitle>
            <Button onClick={() => alert('Botão clicado!')}>Clique aqui</Button>
            <ErrorMessage>Ocorreu um erro. Tente novamente.</ErrorMessage>
        </Container>
    );
};

export default PaginaInicial;