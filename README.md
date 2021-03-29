# Project 2 Write-Up:

Teammates: Areal Jones & Gobie Mohseni

Heroku Link: https://gobiem-arealj-webdev2021-pr2.herokuapp.com/

## 1. What were some challenges you faced while making this app?
While making this app we faced some challenges as a team. One of our first obstacles was trying to decide how to create the shapes on the cards. We initially thought that we could make the shapes with CSS and dynamically render them on each card, however, we ran into problems such as the positioning of the shape on each card and having more than one shape on each card. Due to these issues, we then decided to take advantage of SVG images and the opinion of the TA (Shaun) to hard code 81 different SVGs and convert them to JPEG. 
Another challenge we faced was understanding the state management including the proper time to dispatch, and helper functions within the context file. In addition, we learned when it was appropriate to have a global state compared to a local state. 
Lastly, while we were implementing the logic of the game, we were trying to dispatch multiple actions within a nested if statement. However, after some time we understood that we can only run multiple dispatches if they are under the same block. 
## 2. Given more time, what additional features, functional or design changes would you make?
If we had more time we would like to implement a reset button for the current cards that are selected. As of now, our game contains a reset button that resets the entire board. Because of this, it would be beneficial to the user if they had a reset button that also cleared the cards that they have selected.
Another feature we would like to add is when a user reaches the end of the game, we would like to notify the user when there are no more possible sets and that the game is over. As of now, our game does not notify the user that the game is complete unless all the cards are removed and they reach our EndGame page. 
An additional feature we would want to add to our Easy game is to allow the user to pick which attribute they want to keep constant. 
Lastly, some additional features that would make the game more competitive would be to add a scoreboard and a timer. 
## 3.What assumptions did you make while working on this assignment?
There were a few assumptions made for this assignment. One assumption that we made was on our Home page, when the user picks the difficulty of the game we assume that they will click set level, if not our default difficulty level is easy. 
Another assumption we made involved the easy game rules, we assumed that the constant attribute will always be the number of shapes on a card rather than changing with each game.
And lastly, when a user clicks on a card we assume that they know they cannot unclick that selected card.  
## 4. How long did this assignment take to complete?
This assignment took us about 2 ½ weeks, meeting every other day, to complete. 
