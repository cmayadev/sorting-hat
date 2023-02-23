import { Routes, Route } from "react-router-dom";

import questionList from './api/data.json';

import Home from './pages/Home';
import Quizz from './pages/Quizz';

import Layout from './components/Layout';

import './App.css'

function App() {

  const questions = questionList.sort(() => Math.random() - 0.5);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting" element={<Quizz questionList={questions} />} />
      </Routes>
    </Layout>
  );
}

export default App
