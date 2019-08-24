import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => (
  <>
    <h1>{course}</h1>
  </>
);

const Part = ({ name, count }) => (
  <>
    <p>
      {name} {count}
    </p>
  </>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => (
        <Part name={part.name} count={part.exercises} />
      ))}
    </>
  );
};

const Total = ({ total }) => (
  <>
    <p>Number of exercises {total}</p>
  </>
);

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
