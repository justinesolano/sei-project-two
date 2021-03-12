import React from 'react'
import quizOne from '../game-assets/minastirith.jpg'
import quizTwo from '../game-assets/baraddur.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <body className="home-body">
        <div className="home-header">
          <h1>
            <img className="home-title" src="https://fontmeme.com/permalink/210311/6a4aac8c50a4bd9db28d8b1773f7acc3.png" />
          </h1>
          <h2 className="pick-a-quiz">Pick a quiz and test your LOTR knowledge</h2>
        </div>
        <section className="quiz-list">
          <div>
            <Link to={'/quiz-1'}>
              <img className="minas-tirith" src={quizOne} />
              <a href={quizOne}></a>
            </Link> 

          </div>
          <div>
            <Link to={'/quiz-1'}>
              <img className="barad-dur" src={quizTwo} />
              <a href={quizTwo}></a>
            </Link>
          </div>
        </section>
      </body>
    </>
  )
}

export default Home
