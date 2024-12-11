import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ObjectPage = () => {
  const [person, setPerson] = useState({
    name: 'João Silva',
    age: 30,
    profession: 'Desenvolvedor',
    skills: ['JavaScript', 'React', 'Node.js']
  });

  const addSkill = () => {
    const newSkill = prompt('Digite uma nova habilidade:');
    if (newSkill && newSkill.trim() !== '') {
      setPerson(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill]
      }));
    } else {
      alert('Habilidade inválida! Tente novamente.');
    }
  };

  const updateAge = () => {
    setPerson(prev => ({
      ...prev,
      age: prev.age + 1
    }));
  };

  return (
    <Container>
      <h1>🧩 Laboratório de Objetos</h1>
      
      <div>
        <h2>Perfil</h2>
        <p>Nome: {person.name}</p>
        <p>Idade: {person.age} anos</p>
        <p>Profissão: {person.profession}</p>
        
        <h3>Habilidades</h3>
        <ul>
          {person.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <button onClick={addSkill}>Adicionar Habilidade</button>
        <button onClick={updateAge}>Incrementar Idade</button>
      </div>
    </Container>
  );
};

export default ObjectPage;