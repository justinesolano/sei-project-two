// import { useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Quiz1End from './Quiz1End'



const Quiz1 = () => {

  const [quotes, setQuotes] = useState(null)
  const [characters, setCharacters] = useState(null)

  const [counterWrong, setCounterWrong] = useState(0)
  const [counterRight, setCounterRight] = useState(0)
  const token = '9cbWfQjSMiEwOyMVpK9c' //'UiMcVRqTZfm9cd5rumQy'
  

  // const history = useHistory()
 

  useEffect(()=>{
    const getData = async () =>{
      const response = await axios.get('https://the-one-api.dev/v2/character', 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      // console.log(response)
      setCharacters(response.data.docs)
      
    }
    getData()
  }, [])
  
  useEffect(()=>{
    const getData = async () =>{
      const response = await axios.get('https://the-one-api.dev/v2/quote', 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      // console.log(response)
      setQuotes(response.data.docs)
      
    }
    getData()
  }, [])
  

  if (!quotes || !characters) return ''

  const randomQuote = Math.floor(Math.random() * quotes.length)
  const randomCharacter1 = Math.floor(Math.random() * characters.length)
  const randomCharacter2 = Math.floor(Math.random() * characters.length)
  const randomCharacter3 = Math.floor(Math.random() * characters.length)


  const rightAnswerRandom = quotes[randomQuote].character
  // console.log('right answer random', rightAnswerRandom)

  const filteredCharacters = characters.filter(character => {
    return character._id === rightAnswerRandom
  })
  // console.log(filteredCharacters[0].name) 

  function buttonNumberGenerator() {
    return Math.floor(Math.random() * 4)
  }
  
  const buttonsOrder = buttonNumberGenerator()

  const randomButtonsOrder = () => {
    if (buttonsOrder === 0){
      return (
        <div>
          <div className="top-two">
            <div>
              <button onClick={handleChoice} className={`${characters._id} button is-dark is-large`} id="choice1">
                {filteredCharacters[0].name}
              </button>
            </div>
            <div>
              <button onClick={handleChoice} className={`${characters._id} button is-dark is-large`} id="choice2">
                {characters[randomCharacter1].name}
              </button>
            </div>
            <div className="bottom-two">
              <div>
                <button onClick={handleChoice} className={`${characters._id} button is-dark is-large`} id="choice3">
                  {characters[randomCharacter2].name}
                </button>
              </div>
              <div>
                <button onClick={handleChoice}  className={`${characters._id} button is-dark is-large`} id="choice4">
                  {characters[randomCharacter3].name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (buttonsOrder === 1){
      return (
        <div>
          <div className="top-two">
            <div>
              <button onClick={handleChoice} className={`${characters._id} button is-dark is-large`} id="choice2">
                {characters[randomCharacter1].name}
              </button>
            </div>
            <div>
              <button onClick={handleChoice} className={`${characters._id} button is-dark is-large`} id="choice3">
                {characters[randomCharacter2].name}
              </button>
            </div>
          </div>
          <div className="bottom-two">
            <div>
              <button onClick={handleChoice}  className={`${characters._id} button is-dark is-large`} id="choice4">
                {characters[randomCharacter3].name}
              </button>
            </div>
            <div>
              <button onClick={handleChoice} className={`${characters._id} button is-dark is-large`} id="choice1">
                {filteredCharacters[0].name}
              </button>
            </div>
          </div>
        </div>
      )
    } else if (buttonsOrder === 2){
      return (
        <div>
          <div className="top-two">
            <div>
              <button onClick={handleChoice} className={`${characters._id} button is-dark is-large`} id="choice3">
                {characters[randomCharacter2].name}
              </button>
            </div>
            <div>
              <button onClick={handleChoice}  className={`${characters._id} button is-dark is-large`} id="choice4">
                {characters[randomCharacter3].name}
              </button>
            </div>
          </div>
          <div className="bottom-two">
            <div>
              <button onClick={handleChoice} className={`${characters._id} button is-dark is-large`} id="choice1">
                {filteredCharacters[0].name}
              </button>
            </div>
            <div>
              <button onClick={handleChoice} className={`${characters._id} button is-dark is-large`} id="choice2">
                {characters[randomCharacter1].name}
              </button>
            </div>
          </div>
        </div>
      )
    } else if (buttonsOrder === 3){
      return (
        <div> 
          <div className="top-two">
            <div>
              <button onClick={handleChoice}  className={`${characters._id} button is-dark is-large`} id="choice4">
                {characters[randomCharacter3].name}
              </button>
            </div>
            <div>
              <button onClick={handleChoice} className={`${characters._id} button is-dark is-large`} id="choice1">
                {filteredCharacters[0].name}
              </button>
            </div>
          </div>
          <div className="bottom-two">
            <div>
              <button onClick={handleChoice} className={`${characters._id} button is-dark is-large`} id="choice2">
                {characters[randomCharacter1].name}
              </button>
            </div>
            <div>
              <button onClick={handleChoice} className={`${characters._id} button is-dark is-large`} id="choice3">
                {characters[randomCharacter2].name}
              </button>
            </div>
          </div>
        </div>
      )
    }
  }
  

  const handleChoice = (event)=>{
    event.target.id === 'choice1' ? setCounterRight(counterRight + 1) : setCounterWrong(counterWrong + 1)
    randomButtonsOrder()
  }
  // console.log('counter right', counterRight)
  // console.log('counter wrong', counterWrong)
 
  if (counterRight + counterWrong === 20){
    console.log('end of the quiz')
    // history.push('/quiz-end')
  }
  
  return (
    <>
      { counterRight + counterWrong === 20 ?
        <Quiz1End 
          counterWrong={counterWrong}
          counterRight={counterRight}
        />
        :
        <>
          <body className="body-quiz">
            <main className="main">
              <div className="header">
                <div className="quiz-title">
                  <h1 className="guess-who">
                    <img className="map-bg has-shadow" src='https://fontmeme.com/permalink/210311/99bfe0553a465f1d960eb1896f2abec6.png' />
                  </h1>
                </div>
                <div className="counter">
                  <div className="right">
                    <p>Right: {counterRight}</p>
                  </div>
                  <div className="wrong">
                    <p>Wrong: {counterWrong}</p>
                  </div>
                </div>
              </div>
              <div className="question-quiz">
                <div className="question">
                  <hr />
                  <h1>
                    <img className="who-said" src='https://fontmeme.com/permalink/210311/ae4ad838ccbe7f5dce73627f00651c36.png' />
                  </h1>
                </div>
                <div className="quotes box">
                  <p> {quotes[randomQuote].dialog}</p>
                </div>
                <div className="choices">
                  {randomButtonsOrder()}
                </div>
              </div>
              <progress className="progress" value="" max="100"></progress>
            </main>
          </body>
        </>
      }
    </>
  )
}

export default Quiz1


