import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart = ({ tasks }) => {
  const totalTasks = tasks.Backlog.length + tasks.AFazer.length + tasks.EmAndamento.length + tasks.Realizadas.length;
  const data = {
    labels: ['Backlog', 'A Fazer', 'Em Andamento', 'Concluídas'],
    datasets: [
      {
        data: [tasks.Backlog.length, tasks.AFazer.length, tasks.EmAndamento.length, tasks.Realizadas.length],
        backgroundColor: ['#f39c12', '#3498db', '#e67e22', '#2ecc71'],
        hoverBackgroundColor: ['#f1c40f', '#2980b9', '#d35400', '#27ae60'],
      },
    ],
  };

  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <h3>Progresso das Tarefas</h3>
      <Doughnut data={data} />
      <p>Total de Tarefas: {totalTasks}</p>
    </div>
  );
};

export default TaskChart;
