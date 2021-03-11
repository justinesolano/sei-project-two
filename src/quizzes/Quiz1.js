// import { useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuizEnd from './QuizEnd'



const Quiz1 = () => {

  const [quotes, setQuotes] = useState(null)
  const [characters, setCharacters] = useState(null)

  const [counterWrong, setCounterWrong] = useState(0)
  const [counterRight, setCounterRight] = useState(0)
  const token = '9cbWfQjSMiEwOyMVpK9c'
  

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
          <div>
            <button onClick={handleChoice} className={characters._id} id="choice1">
              {filteredCharacters[0].name}
            </button>
          </div>
          <div>
            <button onClick={handleChoice} className={characters._id} id="choice2">
              {characters[randomCharacter1].name}
            </button>
          </div>
          <div>
            <button onClick={handleChoice} className={characters._id} id="choice3">
              {characters[randomCharacter2].name}
            </button>
          </div>
          <div>
            <button onClick={handleChoice}  className={characters._id} id="choice4">
              {characters[randomCharacter3].name}
            </button>
          </div>
        </div>
      )
    } else if (buttonsOrder === 1){
      return (
        <div>
          <div>
            <button onClick={handleChoice} className={characters._id} id="choice2">
              {characters[randomCharacter1].name}
            </button>
          </div>
          <div>
            <button onClick={handleChoice} className={characters._id} id="choice3">
              {characters[randomCharacter2].name}
            </button>
          </div>
          <div>
            <button onClick={handleChoice}  className={characters._id} id="choice4">
              {characters[randomCharacter3].name}
            </button>
          </div>
          <div>
            <button onClick={handleChoice} className={characters._id} id="choice1">
              {filteredCharacters[0].name}
            </button>
          </div>
        </div>
      )
    } else if (buttonsOrder === 2){
      return (
        <div>
          <div>
            <button onClick={handleChoice} className={characters._id} id="choice3">
              {characters[randomCharacter2].name}
            </button>
          </div>
          <div>
            <button onClick={handleChoice}  className={characters._id} id="choice4">
              {characters[randomCharacter3].name}
            </button>
          </div>
          <div>
            <button onClick={handleChoice} className={characters._id} id="choice1">
              {filteredCharacters[0].name}
            </button>
          </div>
          <div>
            <button onClick={handleChoice} className={characters._id} id="choice2">
              {characters[randomCharacter1].name}
            </button>
          </div>
        </div>
      )
    } else if (buttonsOrder === 3){
      return (
        <div> 
          <div>
            <button onClick={handleChoice}  className={characters._id} id="choice4">
              {characters[randomCharacter3].name}
            </button>
          </div>
          <div>
            <button onClick={handleChoice} className={characters._id} id="choice1">
              {filteredCharacters[0].name}
            </button>
          </div>
          <div>
            <button onClick={handleChoice} className={characters._id} id="choice2">
              {characters[randomCharacter1].name}
            </button>
          </div>
          <div>
            <button onClick={handleChoice} className={characters._id} id="choice3">
              {characters[randomCharacter2].name}
            </button>
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
        <QuizEnd 
          counterWrong={counterWrong}
          counterRight={counterRight}
        />
        :
        <>
          <div>
            <h1>Who said this quote?</h1>
          </div>
          <div>
            <p>Right: {counterRight}</p>
            <p>Wrong: {counterWrong}</p>

            <hr />
          </div>
          <div>
            <p> {quotes[randomQuote].dialog}</p>
          </div>
          {randomButtonsOrder()}
        </>
      }
    </>
  )
}

export default Quiz1

