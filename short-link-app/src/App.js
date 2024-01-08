// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import CreateLink from './components/CreateLink';
import Analytics from './components/Analytics';

function App() {
  return (
    <Routes>
      
          <Route path="/login" element={<Login/>} />
          <Route path="/create-link" element={<CreateLink/>} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route render={() => <div>Not Found</div>} />
    </Routes>
  );
}

export default App;
