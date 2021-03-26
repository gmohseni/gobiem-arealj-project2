import React from 'react';
import {createContext, useReducer} from 'react';
import {Shapes} from './Shapes';
import Card from "./Card";

const initialState = {deck: [], board: [], difficulty: "EASY", currentCardSelection: [], isSet: false, endGame: false, showAlert: false, alertColor: "none"};

const checkSet = (cardSet) => {
    let shape = ((Shapes[cardSet[0] - 1].shape === Shapes[cardSet[1] - 1].shape 
        && Shapes[cardSet[1] - 1].shape === Shapes[cardSet[2] - 1].shape
        && Shapes[cardSet[0] - 1].shape === Shapes[cardSet[2] - 1].shape) || 
        (Shapes[cardSet[0] - 1].shape !== Shapes[cardSet[1] - 1].shape 
        && Shapes[cardSet[1] - 1].shape !== Shapes[cardSet[2] - 1].shape
        && Shapes[cardSet[0] - 1].shape !== Shapes[cardSet[2] - 1].shape));

    let color = ((Shapes[cardSet[0] - 1].color === Shapes[cardSet[1] - 1].color 
        && Shapes[cardSet[1] - 1].color === Shapes[cardSet[2] - 1].color
        && Shapes[cardSet[0] - 1].color === Shapes[cardSet[2] - 1].color) || 
        (Shapes[cardSet[0] - 1].color !== Shapes[cardSet[1] - 1].color 
        && Shapes[cardSet[1] - 1].color !== Shapes[cardSet[2] - 1].color
        && Shapes[cardSet[0] - 1].color !== Shapes[cardSet[2] - 1].color));
        
    let number = ((Shapes[cardSet[0] - 1].number === Shapes[cardSet[1] - 1].number 
        && Shapes[cardSet[1] - 1].number === Shapes[cardSet[2] - 1].number
        && Shapes[cardSet[0] - 1].number === Shapes[cardSet[2] - 1].number) || 
        (Shapes[cardSet[0] - 1].number !== Shapes[cardSet[1] - 1].number 
        && Shapes[cardSet[1] - 1].number !== Shapes[cardSet[2] - 1].number
        && Shapes[cardSet[0] - 1].number !== Shapes[cardSet[2] - 1].number));

    let fill = ((Shapes[cardSet[0] - 1].fill === Shapes[cardSet[1] - 1].fill 
        && Shapes[cardSet[1] - 1].fill === Shapes[cardSet[2] - 1].fill
        && Shapes[cardSet[0] - 1].fill === Shapes[cardSet[2] - 1].fill) || 
        (Shapes[cardSet[0] - 1].fill !== Shapes[cardSet[1] - 1].fill 
        && Shapes[cardSet[1] - 1].fill !== Shapes[cardSet[2] - 1].fill
        && Shapes[cardSet[0] - 1].fill !== Shapes[cardSet[2] - 1].fill));
    let result = (shape && color && number && fill);

    return result;

}

const checkMedBoard = (newBoard) =>{
    let setFlag = false;
    for ( let i = 0; i < newBoard.length; i++){
        for (let j = 1; j < newBoard.length; j++){
            for (let k = 2; k < newBoard.length; k++){
                if(newBoard[i].props.id !== newBoard[j].props.id && newBoard[i].props.id !== newBoard[k].props.id && newBoard[j].props.id !== newBoard[k].props.id){
                    let checkArray = [newBoard[i].props.id, newBoard[j].props.id, newBoard[k].props.id];
                    if (checkSet(checkArray)){
                        setFlag = true;
                    } 
                }
            }
        }
    }
    console.log(setFlag);
    return setFlag;
}

const addThree = (board,deck) => {
    let currentBoard = board;
    let currentDeck = deck;
    if (currentDeck.length !== 0) {
        let num = 3;
        while(num > 0) {
            currentBoard.push(currentDeck[num - 1]);
            currentDeck.splice(num - 1, 1);
            num -= 1;
        }
    }
    return [currentBoard, currentDeck];
}

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
            if(state.difficulty === "MEDIUM"){
                while (!checkMedBoard(newBoard)) {
                 let checkMedSet =  addThree(newBoard,currentDeck);
                    newBoard = checkMedSet[0];
                    currentDeck = checkMedSet[1];
                }
            }
            return {...state, deck: currentDeck, board: newBoard};
    } else if (action.type === "ADD_THREE") {
        let addResult =  addThree(state.board, state.deck);
        return {...state, deck: addResult[1], board: addResult[0]};
    } else if (action.type === "CREATE_EASY_DECK") {
        let cards = [];
        Shapes.slice(0, 27).map((shape, i) =>  {
            return cards.push(<Card key={shape.id} id={shape.id} value={false} type={shape.url} shape={shape.shape} number={shape.number} color={shape.color} fill={shape.fill}/>)
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
            return cards.push(<Card key={shape.id} id={shape.id} value={false} type={shape.url} shape={shape.shape} number={shape.number} color={shape.color} fill={shape.fill}/>)
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
    } else if (action.type === "SELECT_CARD") {
        if(!state.currentCardSelection.includes(action.payload)) {
            let i = 0;
            let copyBoard = [];
            let copyCurrentSelection = state.currentCardSelection;
            while (i < state.board.length){
                if (action.payload === state.board[i].props.id){
                    let newCard = <Card key={state.board[i].key} id={state.board[i].props.id} value={true} type={state.board[i].props.type} shape={state.board[i].props.shape} number={state.board[i].props.number} color={state.board[i].props.color} fill={state.board[i].props.fill}/>
                    copyBoard.push(newCard);
                    copyCurrentSelection = copyCurrentSelection.concat(action.payload);
                } else {
                    copyBoard.push(state.board[i]);
                }
                i++;
            }
            if (copyCurrentSelection.length === 3) {
                let result = checkSet(copyCurrentSelection);
                if (result) {
                    return {...state, board: copyBoard, currentCardSelection: copyCurrentSelection, numOfSelectedCards: state.numOfSelectedCards + 1, isSet: true, showAlert: true, alertColor: "success"};
                } 
                else {
                    return {...state, board: copyBoard, currentCardSelection: copyCurrentSelection, numOfSelectedCards: state.numOfSelectedCards + 1, isSet: false, alertColor: "danger"};
                }
            } else {
                return {...state, board: copyBoard, currentCardSelection: copyCurrentSelection, numOfSelectedCards: state.numOfSelectedCards + 1};
            }
        } else {
            return {...state};
        }
    } else if (action.type ==="CHECK_SET") {
            let result = checkSet(state.currentCardSelection);
            if(result) {
                return {...state, isSet: true};
            } else {
                return {...state, isSet: false};
            }
        } else if (action.type === "UNSELECT_CARDS") {
            let i = 0;
            let copyBoard = [];
            while (i < state.board.length) {
                console.log()
                if (state.currentCardSelection[0] === state.board[i].props.id) {
                    let newCard = <Card key={state.board[i].key} id={state.board[i].props.id} value={false} type={state.board[i].props.type} shape={state.board[i].props.shape} number={state.board[i].props.number} color={state.board[i].props.color} fill={state.board[i].props.fill}/>
                    copyBoard.push(newCard);
                } else if (state.currentCardSelection[1] === state.board[i].props.id) {
                    let newCard = <Card key={state.board[i].key} id={state.board[i].props.id} value={false} type={state.board[i].props.type} shape={state.board[i].props.shape} number={state.board[i].props.number} color={state.board[i].props.color} fill={state.board[i].props.fill}/>
                    copyBoard.push(newCard);
                } else if (state.currentCardSelection[2] === state.board[i].props.id) {
                    let newCard = <Card key={state.board[i].key} id={state.board[i].props.id} value={false} type={state.board[i].props.type} shape={state.board[i].props.shape} number={state.board[i].props.number} color={state.board[i].props.color} fill={state.board[i].props.fill}/>
                    copyBoard.push(newCard);
                } else {
                    copyBoard.push(state.board[i]);
                }
                i++;
            }
            return {...state, board: copyBoard, currentCardSelection: [], isSet: false, showAlert: true, alertColor: "danger"};
        } else if(action.type ==="REMOVE_SET") {
            let i = 0;
            let updatedBoard = [];
            let currentDeck = state.deck;
            while (i < state.board.length){
                if (!state.currentCardSelection.includes(state.board[i].props.id)){
                    let newCard = <Card key={state.board[i].key} id={state.board[i].props.id} value={false} type={state.board[i].props.type} shape={state.board[i].props.shape} number={state.board[i].props.number} color={state.board[i].props.color} fill={state.board[i].props.fill}/>
                    updatedBoard.push(newCard);
                }
                i++;
            }
            if (updatedBoard.length < 12) {
                let addCards = addThree(updatedBoard, currentDeck);
                updatedBoard = addCards[0];
                currentDeck = addCards[1];
            }
            if (state.difficulty === "MEDIUM") {
                while (!checkMedBoard(updatedBoard)) {
                    if (currentDeck.length === 0) {
                        break;
                    } else {
                        let checkMedSet =  addThree(updatedBoard,state.deck);
                        updatedBoard = checkMedSet[0];
                        currentDeck = checkMedSet[1];
                    }
                }
            }  
            if (currentDeck.length === 0 && updatedBoard.length === 0) {
                return {...state, board: updatedBoard, deck:currentDeck, currentCardSelection: [], isSet: false, endGame: true, showAlert: true, alertColor: "success"};
            } else {
                return {...state, board: updatedBoard, deck:currentDeck, currentCardSelection: [], isSet: false, showAlert: true, alertColor: "success"};
            }
        } else if(action.type === "RESET") {
            return {...state, endGame: false};
        } else if (action.type === "RESET_ALERT") {
            return {...state, showAlert: false, alertColor: "none"};
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
