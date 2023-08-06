import { useState } from 'react'
import './App.css'


const Button = (props) => {
  const {handleClick, text} = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => {
  const {text, value, type} = props
  if (type == "Percentage"){
    return (
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    )
  }
  else {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }

}


const Statistics = (props) => {
  const {good, neutral, bad, all, average, percentage} = props

  if (all > 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Statistic</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={all} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Percentage" value={percentage} type="Percentage" />
          </tbody>
        </table>
      </div>
    ) 
  }
  else {
    return (
    <div>
      <h2>Statistics</h2>
      No feedback given
    </div>
    )
  }
  
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [percentage, setPercentage] = useState(null)

    const calculateAndSetAverage = (newGood, newNeutral, newBad) => {
      const total = newGood + newNeutral + newBad
      const avg = (newGood - newBad) / total
      setAverage(avg)
    }
    const calculateAndSetPercentage = (newGood, newNeutral, newBad) => {
      const total = newGood + newNeutral + newBad
      const perc = newGood / total * 100
      setPercentage(perc)
    }
    const handleGoodFeedback = () => {
      const updatedGood = good + 1
      setGood(updatedGood)
      setAll(updatedGood + neutral + bad)
      calculateAndSetAverage(updatedGood, neutral, bad)
      calculateAndSetPercentage(updatedGood, neutral, bad)
    }
    const handleNeutralFeedback = () => {
      const updatedNeutral = neutral + 1
      setNeutral(updatedNeutral)
      setAll(good + updatedNeutral + bad)
      calculateAndSetAverage(good, updatedNeutral, bad)
      calculateAndSetPercentage(good, updatedNeutral, bad)
    }
    const handleBadFeedback = () => {
      const updatedBad = bad + 1
      setBad(updatedBad)
      setAll(good + neutral + updatedBad)
      calculateAndSetAverage(good, neutral, updatedBad)
      calculateAndSetPercentage(good, neutral, updatedBad)
    }

    const resetFeedback = () => {
      setGood(0)
      setNeutral(0)
      setBad(0)
      setAll(0)
      setAverage(0)
      setPercentage(null)
    }


  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGoodFeedback} text="Good"/>
      <Button handleClick={handleNeutralFeedback} text="Neutral"/>
      <Button handleClick={handleBadFeedback} text="Bad"/>
      
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} percentage={percentage} />

      <h2>Reset</h2>
      <Button handleClick={resetFeedback} text="Reset all Feedback"/>
    </div>
  )
}


export default App