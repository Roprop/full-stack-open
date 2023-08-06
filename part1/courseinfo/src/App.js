const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}

const Part = ({ part, exercises }) => {
    return (
        <p>
         {part} {exercises}
       </p>
     )
}


const Content = ( {parts }) => {
    return (
        <div>
            <Part part={parts[0].part} exercises={parts[0].exercises} />
            <Part part={parts[1].part} exercises={parts[1].exercises} />
            <Part part={parts[2].part} exercises={parts[2].exercises} />
        </div>
    )
}

const Total = ({ parts }) => {
    return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {part: 'Fundamentals of React', exercises: 10},
            {part: 'Using props to pass data', exercises: 7},
            {part: 'State of a component', exercises: 14}
        ]  
}
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  export default App