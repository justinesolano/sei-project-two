import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Quiz1 from './quizzes/Quiz1'
import Resources from './components/Resources'

import Quiz1End from './quizzes/Quiz1End'
import Quiz2 from './quizzes/Quiz2'
import Quiz2End from './quizzes/Quiz2End'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quiz-1">
          <Quiz1 />
        </Route>
        <Route path="/quiz-end">
          <Quiz1End />
        </Route>
        <Route path="/quiz-2">
          <Quiz2 />
        </Route>
        <Route path="/quiz-2-end">
          <Quiz2End />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
