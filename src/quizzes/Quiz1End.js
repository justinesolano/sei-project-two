import React from 'react'
import { Link } from 'react-router-dom'

const Quiz1End = (counterWrong) => {

 

  const resetGame = ()=>{
    window.location.reload()

    
  }

  const scoreProgress = () => {
    if (counterWrong.counterRight <= 5) { // 0, 1, 2, 3, 4, 5
      return (
        <div>
          <p className="score-words">You did not pass! </p>
          <img className="score-bad" src={'https://media3.giphy.com/media/xTiTnhnS1kQKfgpAHK/giphy.gif'}/>
        </div>
      )
    }
    if (counterWrong.counterRight <= 10 && counterWrong.counterRight >= 6) { // 6, 7, 8, 9, 10
      return (
        <div>
          <p className="score-words">Master needs to watch the movies again! </p>
          <img className="score-alright" src={'https://i.gifer.com/PWZT.gif'}/>
        </div>
      )
    }
    if (counterWrong.counterRight <= 15 && counterWrong.counterRight >= 11) { // 11, 12, 13, 14, 15
      return (
        <div>
          <p className="score-words">Not all those who wander are lost! Certainly not you! </p>
          <img className="score-good" src={'https://media2.giphy.com/media/zGnnFpOB1OjMQ/200.gif'}/>
        </div>
      )
    }
    if (counterWrong.counterRight <= 19 && counterWrong.counterRight >= 16) { // 16, 17, 18, 19
      return (
        <div>
          <p className="score-words">You bow to no one...you got almost every question correct! </p>
          <img className="score-great" src={'https://i.imgur.com/TblBTz0.gif'}/>
        </div>
      )
    }
    if (counterWrong.counterRight === 20) { // 20
      return (
        <div>
          <p className="score-words">You bow to no one...you got every question correct! </p>
          <img className="score-great" src={'https://i.imgur.com/TblBTz0.gif'}/>
        </div>
      )
    }
  }

  return (
    <body className="end-bg">
      <div>
        <h1 className="how-well-container">
          <img className="how-well" src="https://fontmeme.com/permalink/210312/1a44ba548f4fd6d495fa134e0c576475.png" />  
        </h1> 
        <div className="counter-results">
          <p> {`You got ${counterWrong.counterRight} question(s) right`}
            <br /> {`You got ${counterWrong.counterWrong} question(s) wrong`}</p>
        </div>
        <div className="score-progress">
          { scoreProgress() }
        </div>
        <div className="end-nav">
          <button className="play-again button is-black" onClick={resetGame}> play again?</button>
          <div className="home-link button">
            < Link to="/"> homepage</  Link>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Quiz1End
