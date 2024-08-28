import React, { createContext, useState } from 'react';

// Cria o contexto
export const TaskContext = createContext();

// Componente de provedor do contexto
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState({
    Backlog: [],
    AFazer: [],
    EmAndamento: [],
    Realizadas: [],
  });

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
