import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const APIFetchPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar usuários');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <h1>🌐 Explorador de Usuários</h1>
      
      <div>
        {users.map(user => (
          <div key={user.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Empresa: {user.company.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default APIFetchPage;