import './App.css'

import questionList from './api/data.json';

import Quizz from './components/Quizz';

function App() {

  const questions = questionList.sort(() => Math.random() - 0.5);

  return (
    <div className="App">
      <Quizz questionList={questions} />
    </div>
  );
}

export default App
