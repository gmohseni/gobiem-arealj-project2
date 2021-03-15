import React from 'react';
import {createContext, useReducer} from 'react';
import combineReducers from 'react-combine-reducers';
import {Shapes} from './Shapes';
import Card from "./Card";

const initialState = {deck: [], board: [], difficulty: "EASY"};

export const GameContext = createContext();

function gameReducer(state, action) {
    if (action.type === "CREATE_BOARD") {
        let newBoard = [];
        let currentDeck = state.deck;
        for (let i = currentDeck.length; i >=0; i--) {
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
    } else if (action.type === "RESET_EASY") {
        return {...state, deck: [], board: []}
    } else if (action.type === "CREATE_REGULAR_DECK") {
        let cards = [];
        Shapes.map((shape, i) =>  {
            cards.push(<Card key={i} type={shape.url}/>)
        })
        console.log(cards);
        let newDeck = [];
        let numberOfCards = 81;
        while (numberOfCards > 0) {
            let randomNumber = Math.floor(Math.random() * numberOfCards);
            console.log(cards[randomNumber]);
            newDeck.push(cards[randomNumber]);
            cards.pop(randomNumber);
            numberOfCards -= 1;
        }
        return {...state, deck: newDeck};
    } else if (action.type === "DIFFICULTY") {
        return {...state, difficulty: action.payload};
    } else {
        return state;
    }
}

// function easyGameReducer(state, action) {
//     if (action.type === "CREATE_EASY_DECK") {
//         let cards = [];
//         Shapes.map((shape) => 
//             cards.push(<Card type={shape.url}/>)
//         )
//         let newDeck = [];
//         let numberOfCards = 27;
//         while (numberOfCards > 0) {
//             let randomNumber = Math.floor(Math.random() * numberOfCards);
//             newDeck.push(cards[randomNumber]);
//             cards.pop(randomNumber);
//             numberOfCards -= 1;
//         }
//         return {...state, deck: newDeck};
//     } else if (action.type === "RESET_EASY") {
//         return {...state, deck: [], board: []}
//     }
// }

// function regularGameReducer(state, action) {
        
//     if (action.type === "CREATE_REGULAR_DECK") {
//         console.log(action.type);
//         let cards = [];
//         Shapes.map((shape) => 
//             cards.push(<Card type={shape.url}/>)
//         )
//         console.log(cards);
//         let newDeck = [];
//         let numberOfCards = 81;
//         while (numberOfCards > 0) {
//             let randomNumber = Math.floor(Math.random() * numberOfCards);
//             newDeck.push(cards[randomNumber]);
//             cards.pop(randomNumber);
//             numberOfCards -= 1;
//         }
//         return {...state, deck: newDeck};
//     }
//     // } else if (action.type === "RESET") {
//     //     return {...state, deck: [], board: []}
//     // }
// }

// function settingGameReducer(state, action){
//     if (action.type === "DIFFICULTY") {
//         return {...state, difficulty: action.payload};
//     } else {
//         return state;
//     }
// }

export function GameContextComponent(props) {
    // const [rootReducerCombined, initialStateCombined] = combineReducers({
    //     board: [boardReducer, initialState],
    //     easyGame: [easyGameReducer, initialState],
    //     RegularGame: [regularGameReducer, initialState],
    //     settingGame: [settingGameReducer, initialState]});
    // const [gameState, gameDispatch] = useReducer(rootReducerCombined, initialStateCombined);
    const [state, dispatch] = useReducer(gameReducer, initialState);

    return (
        <GameContext.Provider value={[state, dispatch]}>
            {props.children}
        </GameContext.Provider>
    )
}
