// import { useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Quiz1End from './Quiz1End'
const Quiz1 = () => {
  const [quotes, setQuotes] = useState(null)
  const [characters, setCharacters] = useState(null)
  const [movie, setMovie] = useState(null)

  let spreadData = []
  const [counterWrong, setCounterWrong] = useState(0)
  const [counterRight, setCounterRight] = useState(0)
  // const tokenArray = ['9cbWfQjSMiEwOyMVpK9c', 'F-xdpariq8FTrnifdJOA', '6MlYn5XJh5l2icjeXahh', 'UiMcVRqTZfm9cd5rumQy'] 
  // const token = [tokenArray[Math.floor(Math.random() * tokenArray.length)]]
  const [errors, setErrors] = useState(null)

  const token = '6MlYn5XJh5l2icjeXahh'
  // process.env.REACT_APP_API_TOKEN
  
  useEffect(()=>{
    const getData = async () =>{
      try {
        const response = await axios.get('https://the-one-api.dev/v2/character', 
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        setCharacters(response.data.docs)
      } catch (err) {
        // return <h1>This link is broken</h1>
        setErrors('This page is broken, try again later!')
        // console.log(errors)
      }
      // console.log(response)
    }
    getData()
  }, [])


  useEffect(()=>{
    const getData = async () =>{
      try {
        const response = await axios.get('https://the-one-api.dev/v2/quote', 
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        // console.log(response)
        setQuotes(response.data.docs)
      } catch (err){
        setErrors('This page is broken, try again later!')
      }
    }
    getData()
  }, [])

  useEffect(()=>{
    const getData = async () =>{
      try {
        const response = await axios.get('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote', 
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        setMovie(response.data.docs) 
      } catch (err){
        setErrors('This page is broken, try again later!')
      }    
    }
    getData()
  }, [])



  if (!quotes || !characters || !movie) return <p>{errors}</p> 
  spreadData = [...quotes, ...movie]

  // console.log('spread data',spreadData)
  const randomQuote = Math.floor(Math.random() * spreadData.length)
  const randomCharacter1 = Math.floor(Math.random() * characters.length)
  const randomCharacter2 = Math.floor(Math.random() * characters.length)
  const randomCharacter3 = Math.floor(Math.random() * characters.length)
  const rightAnswerRandom = spreadData[randomQuote].character
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
        <div className="answers">
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
          <div className="body-quiz">
            <div className="extra-div">
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
                    <hr />
                  </div>
                  <div className="quotes box">
                    <p className="quote"> {spreadData[randomQuote].dialog}</p>
                  </div>
                  <div className="choices">
                    {randomButtonsOrder()}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </>
      }
    </>
  )
}
export default Quiz1