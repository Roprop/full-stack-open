import { useState } from 'react'

import "./App.css"

const Anecdote = ({ anecdote }) => {
  return (
    <div className="anecdote">{anecdote}</div>
  )
}

const Button = (props) => {
  const {handleClick, text} = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  const [mostPopular, setMostPopular] = useState(0)

  const selectRandomAnecdote = () => {
    const oldAnecdote = selected
    let selectedAnecdote = Math.floor(Math.random() * anecdotes.length);
    while (oldAnecdote === selectedAnecdote){
      selectedAnecdote = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(selectedAnecdote)
  }

  const voteForAnecdote = () => {
    const newPoints = { ...points }
    newPoints[selected] += 1
    if (newPoints[selected] >= newPoints[mostPopular] & selected !== mostPopular){
      setMostPopular(selected)
    }
    setPoints(newPoints)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]}/>
      <Button handleClick={selectRandomAnecdote} text="Select random anecdote"/>
      <Button handleClick={voteForAnecdote} text="Vote for this anecdote"/>
      <br></br>
      This anecdote has {points[selected]} votes!

      <h1>Most popular anecdote</h1>
      <Anecdote anecdote={anecdotes[mostPopular]}/>

      This anecdote has {points[mostPopular]} votes!
    </div>
  )
}

export default App