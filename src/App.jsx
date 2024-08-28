import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import KanbanBoard from './components/KanbanBoard';
import TaskChartScreen from './components/TaskChartScreen';
import { TaskProvider } from './components/TaskContext'; // Importa o TaskProvider
import './App.css';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="App">
          <nav className="navigation">
            <Link to="/">Kanban Board</Link>
            <Link to="/charts">Gráficos de Tarefas</Link>
          </nav>
          <Routes>
            <Route path="/" element={<KanbanBoard />} />
            <Route path="/charts" element={<TaskChartScreen />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
