import React, {useState} from 'react';
import './App.css';

import Question from './components/Questions';
import questions from './shared/data';

const App = () => {
  const [quests, setQuestions] = useState(questions);
  let displayQuestion = quests.map(element => <Question key={element.id} {...element} />)
  return (
    <main>
      <section className="container">
        <h2> Questions And Answers About Login</h2>
        <div className="questions">
          {displayQuestion}
        </div>
      </section>
    </main>
  );
}

export default App;
