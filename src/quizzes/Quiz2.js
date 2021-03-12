import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Quiz2End from './Quiz2End'


const Quiz2 = () => {

  const [quotes, setQuotes] = useState(null)
  const [characters, setCharacters] = useState(null)
  const [movie, setMovie] = useState(null)
  let spreadData = []
  const [counterWrong, setCounterWrong] = useState(0)
  const [counterRight, setCounterRight] = useState(0)  
  const token = '9cbWfQjSMiEwOyMVpK9c'
  useEffect(()=>{
    const getData = async () =>{
      const response = await axios.get('https://the-one-api.dev/v2/character', 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
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
      setQuotes(response.data.docs)      
    }
    getData()
  }, [])

  useEffect(()=>{
    const getData = async () =>{
      const response = await axios.get('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote', 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      setMovie(response.data.docs)      
    }
    getData()
  }, [])
  
  if (!quotes || !characters || !movie) return '' 

  spreadData = [...quotes, ...movie]

  const randomQuote = Math.floor(Math.random() * spreadData.length)
 
  const rightAnswerRandom = spreadData[randomQuote].movie
  const rightAnswerQuote = spreadData[randomQuote].dialog

  const movieName = () =>{
    if (rightAnswerRandom === '5cd95395de30eff6ebccde5b'){
      return 'The Two Towers'
    } else if (rightAnswerRandom === '5cd95395de30eff6ebccde5c'){
      return 'The Fellowship of the Ring'
    } else if (rightAnswerRandom === '5cd95395de30eff6ebccde5d'){
      return 'The Return of the King'
    } 
  }
  movieName()

  const handleChoice = (event)=>{
    console.log('event . target ..... ', event.target.value)
    event.target.value === movieName() ? setCounterRight(counterRight + 1) : setCounterWrong(counterWrong + 1)
  }
  console.log('counter right', counterRight)
  console.log('counter wrong', counterWrong)

  const filteredCharacters = characters.filter(character => {
    return character._id === spreadData[randomQuote].character
  })   

  return (
    <>

      { counterRight + counterWrong === 20 ?
        <Quiz2End 
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

            <div>
              {`${filteredCharacters[0].name}:`}
            </div>
            <div>
              <h1>{rightAnswerQuote}</h1>
            </div>
        
            <div>
              <button onClick={handleChoice} value="The Fellowship of the Ring" className={characters._id} id="choice1">
        The Fellowship of the Ring
              </button>
            </div>
            <div>
              <button onClick={handleChoice} value="The Two Towers" className={characters._id} id="choice2">
        The Two Towers
              </button>
            </div>
            <div>
        
              <button onClick={handleChoice} value="The Return of the King" className={characters._id} id="choice3">
        The Return of the King
              </button>
            </div>
      
          </div>
        </>
      }
    </>
  )
}

export default Quiz2
