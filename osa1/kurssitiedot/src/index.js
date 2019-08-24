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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
