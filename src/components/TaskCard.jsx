import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task, column, onMoveTask, onDeleteTask }) => {
  const nextColumn = {
    Backlog: 'AFazer',  // Corrigido para o nome consistente
    AFazer: 'EmAndamento',
    EmAndamento: 'Realizadas',
  };

  const prevColumn = {
    AFazer: 'Backlog',  // Corrigido para o nome consistente
    EmAndamento: 'AFazer',
    Realizadas: 'EmAndamento',
  };

  return (
    <div className="task-card">
      <p>{task.name}</p>
      <div className="task-actions">
        {prevColumn[column] && (
          <button onClick={() => onMoveTask(task.id, column, prevColumn[column])}>←</button>
        )}
        {nextColumn[column] && (
          <button onClick={() => onMoveTask(task.id, column, nextColumn[column])}>→</button>
        )}
        <button onClick={() => onDeleteTask(task.id, column)}>🗑️</button>
      </div>
    </div>
  );
};

export default TaskCard;
