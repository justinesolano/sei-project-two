//LOTR API plan
​
//Homepage
​
​
//nav bar
​
    //home 
      //grid thing for the different quizzes
          // links to the different quizzes            
          // emoji giffs or something 
​
​
​
​
​
    //quiz
      // routing to the different quiz pages 
        //categories
            //e.g character quiz
            // all movie quotes
           // choose two characers and a random quote- decide who said the quote
           //which movie did they say this quote in
    //search bar- if time 
​
​
//psuedo code
​
​
// each of the quizzes will be a sepperate component
​
​
​
​
// app.js page 
    //broswer router 
    // switch
    // route
​
​
​
    //homepage
        //like the cheese show page- show an image, some info, 
            //have a card for each of the games- image, info, title 
​
​
    //nav bar 
        // links to the differnet pages 
        //dropdown for the quizzes
            //drop down coming off an icon maybe? like a LOTR icon- ring?
​
​
​
  //quizzes 
      // limit the number  of questions per game
          // if time could have player to choose num of questions
      //button color change depending on if the answer is right or wrong
​
​
​
      //* random quotes quiz- who said this
        // choice of characters- random plus the correct one 
​
        //pull in the quotes 
           //need to use a token to get the data
           //https://the-one-api.dev/v2/quote - this is the endpoint for all the qotes 
          // store the information when it is pulled in - use a useEffect and useState to hande the import of the data 
          
​
        //choose a random question
            // once we have pulled in the data, we need to be able to choose a random quote from the set of data 
                  //math.random to select?
            //need to have a limit set on the number of questions 
                  // counter for the number of questions
                      // when the questions is answered, remove one from the counter
                      // when the quiz is finished- a pop up/another page that tells you the score
            //need to display the question on the screen
                  //quote in a box, with the options bellow it
                  //display a score on the page 
                  //background image 
                  //title of the quiz
            //need to have a choice of options for the user to select asside from the correct answer
                //need to pull in  the list of characters from the API
                    // math.random on each of the buttons so that we get a random selection of characters
                          // need a condition to prevent the same character being chosen twice
                // pull in the list of characters data, and map through
                //choose random names to fill the other options
                
​
        // check if the answer that the player has submitted matches the correct answer
              //store the computers choice and then check the players choice against the computers choice
                  //if they match then correct, if not the wrong
​
        //something to keep track of the score
            // put in a condition to add one to the total for a correct answer- have this out of the amout of questions
​
​
        //displaying the name item from the random computers choice-
            // either :
                  // filter through the list of character names
            //or
                  //do a new get request for the character information using the endpoint in the documentaion 
​
​
            //*which movie did they say this in quiz
        //choice buttosns of the three movies, and the player will have to choose the correct answer 


    //*main character quiz
        //choose the characters you want to compare quotes for 
           //  /character/{id}/quote - endpoint to get all the quotes from a certain character
        
