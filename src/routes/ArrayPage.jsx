import React, { useState } from 'react';
import styled from 'styled-components';

// Estilos para o container da página com responsividade
const Container = styled.div`
  padding: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ArrayPage = () => {
  // Estado inicial para o array de números e lista de estudantes
  const [numbers, setNumbers] = useState([10, 20, 30, 40, 50]);
  const [students, setStudents] = useState([
    { name: 'João', grade: 8.5 },
    { name: 'Maria', grade: 9.2 },
    { name: 'Pedro', grade: 7.6 },
    { name: 'Ana', grade: 9.7 },
  ]);

  // Estado para armazenar todos os estudantes, usado para resetar a lista
  const [allStudents] = useState([
    { name: 'João', grade: 8.5 },
    { name: 'Maria', grade: 9.2 },
    { name: 'Pedro', grade: 7.6 },
    { name: 'Ana', grade: 9.7 },
  ]);

  // Função para dobrar os valores do array de números
  const transformArray = () => {
    const transformed = numbers.map((num) => num * 2);
    setNumbers(transformed);
  };

  // Função para filtrar os estudantes com nota maior ou igual a 9
  const filterHighGrades = () => {
    const approved = students.filter((student) => student.grade >= 9);
    setStudents(approved);
  };

  // Função para ordenar os estudantes por nota em ordem decrescente
  const sortStudents = () => {
    const sorted = [students].sort((a, b) => b.grade - a.grade);
    setStudents(sorted);
  };

  // Função para resetar a lista de estudantes para o estado inicial
  const resetStudents = () => setStudents(allStudents);

  return (
    <Container>
      <h1>🔢 Laboratório de Arrays</h1>

      {/* Seção para trabalhar com o array de números */}
      <section>
        <h2>Números</h2>
        <p>Array Atual: {numbers.join(', ')}</p>
        <button onClick={transformArray} aria-label="Dobrar valores do array">Dobrar Valores</button>
      </section>

      {/* Seção para trabalhar com o array de estudantes */}
      <section>
        <h2>Estudantes</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name}: {student.grade.toFixed(1)}
            </li>
          ))}
        </ul>
        <button onClick={filterHighGrades} aria-label="Filtrar estudantes aprovados">Filtrar Aprovados</button>
        <button onClick={sortStudents} aria-label="Ordenar estudantes por nota">Ordenar por Nota</button>
        <button onClick={resetStudents} aria-label="Redefinir lista de estudantes">Redefinir Lista</button>
      </section>
    </Container>
  );
};

export default ArrayPage;
