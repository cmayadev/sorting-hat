import './App.css'

import questionList from './api/data.json';

import Home from './components/Home';
import Quizz from './components/Quizz';

function App() {

  const questions = questionList.sort(() => Math.random() - 0.5);

  return (
    <div className="App">
      <Home />
{/*       <Quizz questionList={questions} /> */}
    </div>
  );
}

export default App
