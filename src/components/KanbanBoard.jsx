import React, { useState, useContext } from 'react';
import TaskCard from './TaskCard';
import { TaskContext } from './TaskContext'; // Importa o contexto
import './KanbanBoard.css';

const KanbanBoard = () => {
  const { tasks, setTasks } = useContext(TaskContext); // Usa o contexto para acessar as tarefas
  const [taskName, setTaskName] = useState('');

  const columnNames = {
    Backlog: 'Backlog',
    AFazer: 'A Fazer',
    EmAndamento: 'Em Andamento',
    Realizadas: 'Realizadas',
  };

  const handleAddTask = () => {
    if (taskName.trim()) {
      setTasks((prevState) => ({
        ...prevState,
        Backlog: [...prevState.Backlog, { id: Date.now(), name: taskName }],
      }));
      setTaskName('');
    } else {
      alert('Por favor, insira um nome para a tarefa.');
    }
  };

  const handleMoveTask = (taskId, source, destination) => {
    if (!tasks[destination]) {
      console.error(`Destino inválido: ${destination}`);
      return;
    }

    const taskToMove = tasks[source].find((task) => task.id === taskId);
    
    if (!taskToMove) {
      console.error(`Tarefa não encontrada: ${taskId} na coluna ${source}`);
      return;
    }

    setTasks((prevState) => {
      const updatedSource = prevState[source].filter((task) => task.id !== taskId);
      const updatedDestination = prevState[destination] ? [...prevState[destination], taskToMove] : [taskToMove];

      return {
        ...prevState,
        [source]: updatedSource,
        [destination]: updatedDestination,
      };
    });
  };

  const handleDeleteTask = (taskId, column) => {
    setTasks((prevState) => ({
      ...prevState,
      [column]: prevState[column].filter((task) => task.id !== taskId),
    }));
  };

  return (
    <div className="kanban-board-container">
      <div className="kanban-header">
        <input
          type="text"
          placeholder="Digite o nome da sua tarefa"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>Criar tarefa</button>
      </div>

      <div className="kanban-board">
        {Object.keys(tasks).map((column) => (
          <div key={column} className="kanban-column">
            <h2>{columnNames[column]}</h2>
            {tasks[column].map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                column={column}
                onMoveTask={handleMoveTask}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
