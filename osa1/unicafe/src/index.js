import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({ text }) => (
  <>
    <h1>{text}</h1>
  </>
);

const Button = ({ text, handleClick }) => (
  <button className="button" onClick={handleClick}>
    {text}
  </button>
);

const Statistic = ({ text, count }) => (
  <div>
    <b>
      {text} {count}
    </b>
  </div>
);

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text="Give Feedback" />
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />
      <Header text="Statistics" />
      <Statistic text="Good" count={good} />
      <Statistic text="Neutral" count={neutral} />
      <Statistic text="Bad" count={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
