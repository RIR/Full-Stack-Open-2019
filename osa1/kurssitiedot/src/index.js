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
        <Part name={part.name} count={part.count} />
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
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        parts={[
          { name: part1, count: exercises1 },
          { name: part2, count: exercises2 },
          { name: part3, count: exercises3 }
        ]}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
