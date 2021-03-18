import React from 'react';
import {createContext, useReducer} from 'react';
import {Shapes} from './Shapes';
import Card from "./Card";

const initialState = {deck: [], board: [], difficulty: "EASY", currentCardSelection: []};

export const GameContext = createContext();

function gameReducer(state, action) {
    
    if (action.type === "CREATE_BOARD") {
        let newBoard = [];
        let currentDeck = state.deck;
        let numberOfCards = 12;
        while (numberOfCards > 0) {
            newBoard.push(currentDeck[numberOfCards - 1]);
            currentDeck.splice(numberOfCards - 1, 1);
            numberOfCards -= 1;
        }
        return {...state, deck: currentDeck, board: newBoard};
    } else if (action.type === "ADD_THREE") {
        let currentBoard = state.board;
        let currentDeck = state.deck;
        let num = 3;
        while(num > 0) {
            currentBoard.push(currentDeck[num - 1]);
            currentDeck.splice(num - 1, 1);
            num -= 1;
        }
        return {...state, deck: currentDeck, board: currentBoard};
    } else if (action.type === "CREATE_EASY_DECK") {
        let cards = [];
        Shapes.slice(0, 27).map((shape, i) =>  {
            return cards.push(<Card key={i} id={shape.id} type={shape.url}/>)
        })
        let newDeck = [];
        let numberOfCards = 27;
        while (numberOfCards > 0) {
            let randomNumber = Math.floor(Math.random() * numberOfCards);
            newDeck.push(cards[randomNumber]);
            cards.splice(randomNumber, 1)
            numberOfCards -= 1;
        }
        return {...state, deck: newDeck, currentCardSelection: []};
    } else if (action.type === "CREATE_REGULAR_DECK") {
        let cards = [];
        Shapes.map((shape, i) =>  {
            return cards.push(<Card key={i} id={shape.id} value={false} type={shape.url}/>)
        })
        let newDeck = [];
        let numberOfCards = 81;
        while (numberOfCards > 0) {
            let randomNumber = Math.floor(Math.random() * numberOfCards);
            newDeck.push(cards[randomNumber]);
            cards.splice(randomNumber, 1)
            numberOfCards -= 1;
        }
        return {...state, deck: newDeck, currentCardSelection: []};
    } else if (action.type === "DIFFICULTY") {
        return {...state, difficulty: action.payload};
    } else if(action.type === "SELECT_CARD") {
        let i = 0;
        let copyBoard = [];
        while (i < state.board.length){
            
            if (action.payload === state.board[i].props.id){
                let newCard = <Card key={state.board[i].key} id={state.board[i].props.id} value={true} type={state.board[i].props.type}/>
                copyBoard.push(newCard);
            }
            else{
                copyBoard.push(state.board[i]);
            }
            i++;
            console.log(copyBoard);
        }
  
        return {...state, board: copyBoard, currentCardSelection: state.currentCardSelection.concat(action.payload)};
    } else {
        return state;
    }
}

export function GameContextComponent(props) {
    const [state, dispatch] = useReducer(gameReducer, initialState);
    return (
        <GameContext.Provider value={[state, dispatch]}>
            {props.children}
        </GameContext.Provider>
    )
}
