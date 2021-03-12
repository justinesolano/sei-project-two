import React from 'react'
import { Link } from 'react-router-dom'

const Quiz2End = (props) => {
 
  
  console.log('PROPS>>>>>>>>', props)
  // console.log('counter wrong', counterWrong)

  const resetGame = ()=>{
    window.location.reload()
  }

  return (
    <div>
      End quiz page 
      <p> {`You go this number of questions right: ${props.counterRight}`}</p>
      <p> {`You go this number of questions wrong: ${props.counterWrong}`}</p>
      <button onClick={resetGame}> play again?</button>
      < Link to="/"> homepage</  Link>
    </div>
  )


}

export default Quiz2End
