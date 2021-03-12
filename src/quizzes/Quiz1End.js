import React from 'react'
import { Link } from 'react-router-dom'

const QuizEnd = (counterWrong) => {

 

  const resetGame = ()=>{
    window.location.reload()

    
  }

  return (
    <div>
      End quiz page 
      <p> {`You go this number of questions right: ${counterWrong.counterRight}`}</p>
      <p> {`You go this number of questions wrong: ${counterWrong.counterWrong}`}</p>
      <button onClick={resetGame}> play again?</button>
      < Link to="/"> homepage</  Link>
    </div>
  )
}

export default QuizEnd
