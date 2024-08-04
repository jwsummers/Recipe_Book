import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RecipesPage from './pages/RecipesPage';
import NavBar from './components/NavBar';
import './App.css';

const App: React.FC = () => {
    return (
      <Router>
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/recipes" element={<RecipesPage />} />
            </Routes>
        </div>
      </Router>
    );
};

export default App;
