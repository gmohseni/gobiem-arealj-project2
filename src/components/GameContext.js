import React from 'react';
import {createContext, useReducer} from 'react';
import {Shapes} from './Shapes';
import Card from "./Card";
import combineReducers from 'react-combine-reducers';

const initialState = {deck: [], board: []}

export const GameContext = createContext();

function boardReducer(state, action) {
    if (action.type === "CREATE_BOARD") {
        let newBoard = [];
        let currentDeck = state.deck;
        for (var i = currentDeck.length; i >=0; i--) {
            if (newBoard.length !== 12) {
                newBoard.push(currentDeck[i]);
                currentDeck = currentDeck.pop(i);
            }
        }
        return {...state, deck: currentDeck, board: newBoard};
    } else if (action.type === "ADD_THREE") {
        let currentBoard = state.board;
        let currentDeck = state.deck;
        let num = 3;
        for (var i = currentDeck.length; i >=0; i--) {
            if (num !== 0) {
                currentBoard.push(currentDeck[i]);
                currentDeck = currentDeck.pop(i);
                num -= 1;
            }
        }
        return {...state, deck: currentDeck, board: currentBoard};
    }
}

function easyGameReducer(state, action) {
    if (action.type === "CREATE_DECK") {
        let cards = [];
        Shapes.map((shape) => 
            cards.push(<Card type={shape.url}/>)
        )
        let newDeck = [];
        let numberOfCards = 27;
        while (numberOfCards > 0) {
            let randomNumber = Math.floor(Math.random() * numberOfCards);
            newDeck.push(cards[randomNumber]);
            cards.pop(randomNumber);
            numberOfCards -= 1;
        }
        return {...state, deck: newDeck};
    } else if (action.type === "RESET") {
        return {...state, deck: [], board: []}
    }
}

function regularGameReducer(state, action) {
    if (action.type === "CREATE_DECK") {
        let cards = [];
        Shapes.map((shape) => 
            cards.push(<Card type={shape.url}/>)
        )
        let newDeck = [];
        let numberOfCards = 81;
        while (numberOfCards > 0) {
            let randomNumber = Math.floor(Math.random() * numberOfCards);
            newDeck.push(cards[randomNumber]);
            cards.pop(randomNumber);
            numberOfCards -= 1;
        }
        return {...state, deck: newDeck};
    } else if (action.type === "RESET") {
        return {...state, deck: [], board: []}
    }
}

export function GameContextComponent(props) {
    const [rootReducerCombined, initialStateCombined] = combineReducers({
        board: [boardReducer, initialState],
        easyGame: [easyGameReducer, initialState],
        RegularGame: [regularGameReducer, initialState]});
    const [gameState, gameDispatch] = useReducer(rootReducerCombined, initialStateCombined);

    return (
        <GameContext.Provider value={[gameState, gameDispatch]}>
            {props.children}
        </GameContext.Provider>
    )
}
