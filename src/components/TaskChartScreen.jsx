import React, { useContext } from 'react';
import TaskChart from './TaskChart';
import { TaskContext } from './TaskContext'; // Importa o contexto
import './TaskChartScreen.css';

const TaskChartScreen = () => {
  const { tasks } = useContext(TaskContext); // Usa o contexto para acessar as tarefas

  return (
    <div className="chart-screen">
      <h2>Progresso das Tarefas</h2>
      <TaskChart tasks={tasks} />
    </div>
  );
};

export default TaskChartScreen;
