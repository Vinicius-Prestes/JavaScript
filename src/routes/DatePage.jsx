import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const DateDisplay = styled.div`
  background-color: #e0e0e0;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
`;

const DatePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [customDate, setCustomDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const addDays = (days) => {
    const result = new Date(customDate);
    result.setDate(result.getDate() + days);
    setCustomDate(result);
  };

  const getDayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <Container>
      <h1>🕰️ Laboratório de Datas</h1>
      
      <DateDisplay>
        <h2>Hora Atual</h2>
        <p>{currentDate.toLocaleTimeString()}</p>
        <p>{formatDate(currentDate)}</p>
      </DateDisplay>

      <div>
        <h3>Manipulação de Data</h3>
        <p>Data Selecionada: {formatDate(customDate)}</p>
        <button onClick={() => addDays(1)} aria-label="Adicionar 1 dia">+ 1 Dia</button>
        <button onClick={() => addDays(7)} aria-label="Adicionar 1 semana">+ 1 Semana</button>
        <button onClick={() => addDays(30)} aria-label="Adicionar 1 mês">+ 1 Mês</button>
      </div>

      <div>
        <h3>Informações Extras</h3>
        <p>🕰️ Timestamp: {currentDate.toLocaleString()}</p>
        <p>📅 Dia do Ano: {getDayOfYear(currentDate)}</p>
      </div>
    </Container>
  );
};

export default DatePage;