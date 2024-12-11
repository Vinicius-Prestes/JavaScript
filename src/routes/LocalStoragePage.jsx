import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  input {
    margin: 0.5rem;
    padding: 0.5rem;
    width: 80%;
    max-width: 300px;
  }
  button {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
  }
  ul {
    padding: 0;
    list-style: none;
  }
  @media (max-width: 768px) {
    input, button {
      width: 100%;
      margin: 0.2rem 0;
    }
  }
`;

const LocalStoragePage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(savedTasks);
  }, []);

  const addTask = () => {
    if (newTask.trim() === '') {
      alert('Por favor, digite uma tarefa válida.');
      return;
    }
    if (tasks.some(task => task.text === newTask.trim())) {
      alert('Essa tarefa já existe.');
      return;
    }
    const updatedTasks = [
      ...tasks, 
      { id: Date.now(), text: newTask.trim(), completed: false }
    ];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setNewTask('');
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const clearTasks = () => {
    if (window.confirm('Tem certeza que deseja apagar todas as tarefas?')) {
      setTasks([]);
      localStorage.removeItem('tasks');
    }
  };

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <Container>
      <h1>🗃️ Gerenciador de Tarefas com LocalStorage</h1>
      
      <div>
        <input 
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <button onClick={addTask} disabled={!newTask.trim()}>Adicionar Tarefa</button>
        <button onClick={clearTasks}>Limpar Tarefas</button>
      </div>

      <h2>Tarefas Pendentes</h2>
      <ul>
        {pendingTasks.map(task => (
          <li 
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{ 
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>

      <h2>Tarefas Concluídas</h2>
      <ul>
        {completedTasks.map(task => (
          <li 
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{ 
              textDecoration: 'line-through',
              cursor: 'pointer'
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>

      <p>Total de Tarefas: {tasks.length}</p>
      <p>Tarefas Concluídas: {completedTasks.length}</p>
    </Container>
  );
};

export default LocalStoragePage;