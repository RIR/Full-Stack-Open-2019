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

const Statistic = ({ text, value }) => (
  <div>
    <b>
      {text} {value}
    </b>
  </div>
);

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const sum = good * 1 + bad * -1;
  const average = sum / all || 0;
  const positive = `${(good / all) * 100 || 0} %`;

  return (
    <div>
      <Header text="Give Feedback" />
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />
      <Header text="Statistics" />
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="All" value={all} />
      <Statistic text="Average" value={average} />
      <Statistic text="Positive" value={positive} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
