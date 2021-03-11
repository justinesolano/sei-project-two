import React from 'react'
import { Link } from 'react-router-dom'

const QuizEnd = (counterWrong, counterRight) => {

  console.log('counter right', counterRight)
  console.log('counter wrong', counterWrong)

  const resetGame = ()=>{
    window.location.reload()
  }

  const scoreProgress = () => {
    if (counterWrong.counterRight <= 5) { // 0, 1, 2, 3, 4, 5
      return (
        <div>
          <p>You did not pass! </p>
          <img src={'https://media3.giphy.com/media/xTiTnhnS1kQKfgpAHK/giphy.gif'}/>
        </div>
      )
    }
    if (counterWrong.counterRight <= 10 && counterWrong.counterRight >= 6) { // 6, 7, 8, 9, 10
      return (
        <div>
          <p>Master needs to watch the movies again! </p>
          <img src={'https://i.gifer.com/PWZT.gif'}/>
        </div>
      )
    }
    if (counterWrong.counterRight <= 15 && counterWrong.counterRight >= 11) { // 11, 12, 13, 14, 15
      return (
        <div>
          <p>Not all those who wander are lost! Certainly not you! </p>
          <img src={'https://media2.giphy.com/media/zGnnFpOB1OjMQ/200.gif'}/>
        </div>
      )
    }
    if (counterWrong.counterRight <= 20 && counterWrong.counterRight >= 16) { // 16, 17, 18, 19, 20
      return (
        <div>
          <p>You bow to no one...you got almost every question correct! </p>
          <img src={'https://i.imgur.com/TblBTz0.gif'}/>
        </div>
      )
    }
  }

  return (
    <div>
      <h1>How well did you fare?</h1> 
      <p> {`You got ${counterWrong.counterRight} question(s) right`}</p>
      <p> {`You got ${counterWrong.counterWrong} question(s) wrong`}</p>
      { scoreProgress() }
      <button onClick={resetGame}> play again?</button>
      < Link to="/"> homepage</  Link>
    </div>
  )
}

export default QuizEnd
