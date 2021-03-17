import React from 'react';
import {createContext, useReducer} from 'react';
import combineReducers from 'react-combine-reducers';
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
        for (let i = currentDeck.length; i >=0; i--) {
            if (num !== 0) {
                currentBoard.push(currentDeck[i]);
                currentDeck = currentDeck.pop(i);
                num -= 1;
            }
        }
        return {...state, deck: currentDeck, board: currentBoard};
    } else if (action.type === "CREATE_EASY_DECK") {
        let cards = [];

        Shapes.slice(0, 27).map((shape, i) =>  {
            cards.push(<Card key={i} type={shape.url}/>)
        })
        let newDeck = [];
        let numberOfCards = 27;
        while (numberOfCards > 0) {
            let randomNumber = Math.floor(Math.random() * numberOfCards);
           newDeck.push(cards[randomNumber]);
            cards.splice(randomNumber, 1)
            numberOfCards -= 1;
        }
        return {...state, deck: newDeck};
    } else if (action.type === "RESET_EASY") {
        return {...state, deck: [], board: []}
    } else if (action.type === "CREATE_REGULAR_DECK") {
        let cards = [];
        Shapes.map((shape, i) =>  {
            cards.push(<Card key={i} type={shape.url}/>)
        })
        let newDeck = [];
        let numberOfCards = 81;
        while (numberOfCards > 0) {
            let randomNumber = Math.floor(Math.random() * numberOfCards);
           newDeck.push(cards[randomNumber]);
            cards.splice(randomNumber, 1)
            numberOfCards -= 1;
        }
        return {...state, deck: newDeck};
    } else if (action.type === "DIFFICULTY") {
        return {...state, difficulty: action.payload};
    }else if(action.type === "SELECT_CARD"){


    }
    
    else {
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
