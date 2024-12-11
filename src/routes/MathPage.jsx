import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultBox = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MathPage = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [results, setResults] = useState({
    sqrt: 0,
    pow: 0,
    abs: 0,
    round: 0,
    random: 0
  });

  const calculateMath = () => {
    if (num2 === 0) {
      alert('Número 2 não pode ser zero para divisões!');
      return;
    }
    setResults({
      sqrt: Math.sqrt(num1),
      pow: Math.pow(num1, num2),
      abs: Math.abs(num1 - num2),
      round: Math.round(num1 / num2),
      random: Math.floor(Math.random() * (num1 > 0 ? num1 : 10))  // Garantir que num1 seja maior que 0
    });
  };

  return (
    <Container>
      <h1>🧮 Laboratório de Funções Matemáticas</h1>
      <InputGroup>
        <input 
          type="number" 
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
        <input 
          type="number" 
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
        <button onClick={calculateMath}>Calcular</button>
      </InputGroup>

      <ResultBox>
        <h3>Resultados:</h3>
        <p>📍 Raiz Quadrada: {results.sqrt.toFixed(2)}</p>
        <p>🔢 Potência: {results.pow.toFixed(2)}</p>
        <p>➕ Valor Absoluto: {results.abs.toFixed(2)}</p>
        <p>🎲 Número Aleatório: {results.random}</p>
        <p>🔄 Arredondamento: {results.round}</p>
      </ResultBox>

      <p>Explore diferentes combinações de números para ver resultados matemáticos incríveis!</p>
    </Container>
  );
};

export default MathPage;
