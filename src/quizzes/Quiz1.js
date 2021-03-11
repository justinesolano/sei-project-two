import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Quiz1 = () => {

  const [quotes, setQuotes] = useState(null)
  const [characters, setCharacters] = useState(null)
  const token = '9cbWfQjSMiEwOyMVpK9c'
  console.log(characters, setCharacters)
 

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

  console.log('characters>>>>>',characters[9].name)

  return (
    <>
      <div>
        <h1>Who said this quote?</h1>
      </div>
      <div>
        <p> {quotes[randomQuote].dialog}</p>
      </div>
      <div>
        
        <button>
          {quotes[randomQuote].character}
        </button>

        <button>
          {characters[randomCharacter1].name}
        </button>
      </div>
      <div>
        <button>
          {characters[randomCharacter2].name}
        </button>
      </div>
      <div>
        <button>
          {characters[randomCharacter3].name}
        </button>
      </div>
    </>
  )
}

export default Quiz1

