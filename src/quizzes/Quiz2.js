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
  const token = '6MlYn5XJh5l2icjeXahh'
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
          <body className="body-quiz-two">
            <main className="main-two">
              <div className="header-two">
                <div className="quiz-title-two">
                  <div>
                    <h1 className="guess-who-two">
                      <img className="map-bg-two has-shadow" src='https://fontmeme.com/permalink/210312/b567537bc8add4475c084dfe4899196e.png' />
                      <br/>
                      <img className="map-bg-three has-shadow" src='https://fontmeme.com/permalink/210312/550abc4b8cf6fe63735bfd067fc45af1.png' />
                    </h1>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="counter-two">
                <div className="right-two">
                  <p>Right: {counterRight}</p>
                </div>
                <div className="wrong-two">
                  <p>Wrong: {counterWrong}</p>
                </div>
              </div>
              <div className="character-name">
                {`${filteredCharacters[0].name}:`}
              </div>
              <div>
                <div className="quotes-two box">
                  <p className="quote-two">{rightAnswerQuote}</p>
                </div>
                <div className="top-buttons-two">
                  <div>
                    <button onClick={handleChoice} value="The Fellowship of the Ring" className={`${characters._id} button is-dark is-large`} id="choice1">
              The Fellowship of the Ring { }<img src="https://img.icons8.com/color/48/000000/frodo.png"/>
                    </button>
                  </div>
                  <div>
                    <button onClick={handleChoice} value="The Two Towers" className={`${characters._id} button is-dark is-large`} id="choice2">
              The Two Towers { } <img src="https://img.icons8.com/color/48/000000/legolas.png"/>
                    </button>
                  </div>
                </div>
                <div className="bottom-buttons-two">
                  <button onClick={handleChoice} value="The Return of the King" className={`${characters._id} button is-dark is-large`} id="choice3">
            The Return of the King { } <img src="https://img.icons8.com/color/48/000000/gandalf.png"/>
                  </button>
                </div>
              </div>
            </main>
          </body>
        </>
      }
    </>
  )
}

export default Quiz2
