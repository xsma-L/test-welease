import logo from './logo.svg';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import Articles from './Components/Articles';

import './App.css';

function Home() {
  return (
    <>
      <Navigate to={'articles?page=1'}/>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
