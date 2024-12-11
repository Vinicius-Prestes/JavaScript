import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
  font-size: 2.5rem;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  color: #666;
  font-size: 1.1rem;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Title>JavaScript Concepts Explorer</Title>
      <Description>
        Bem-vindo a uma jornada através dos principais conceitos de JavaScript e React! 
        Esta aplicação demonstra diversos recursos da linguagem, desde manipulação matemática 
        até consumo de APIs, passando por gerenciamento de estado e armazenamento local.
      </Description>
    </HomeContainer>
  );
};

export default HomePage;