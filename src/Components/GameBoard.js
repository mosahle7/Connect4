import React, { useEffect, useState } from "react";
import '../Game.css';
import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";
import { isWinner } from "../helper";
import { isDraw } from "../helper";
import { gameStatePlaying,gameStateDraw,PLAYER_1,PLAYER_2,gameStateWin,NO_CIRCLES,NO_PLAYER } from "../Constants";
import { getIntComMove } from "../helper";

const GameBoard=() =>{
    const [gameBoard,setGameBoard] = useState(Array(NO_CIRCLES).fill(NO_PLAYER));
    const [currentPlayer,setCurrentPlayer] = useState(PLAYER_1);
    const [gameState,setGameState] = useState(gameStatePlaying);
    const [winPlayer,setwinPlayer] = useState(NO_PLAYER);
    useEffect(() => {
        initGame();
    }, []);
    const initGame=() => {
        console.log('init game');
        setGameBoard(Array(NO_CIRCLES).fill(NO_PLAYER));
        setCurrentPlayer(PLAYER_1);
        setGameState(gameStatePlaying);
    
    }
    const initBoard=() => {
        const circles=[];

        for(let i=0;i < NO_CIRCLES; i++){
            circles.push(renderCircle(i));
        }
        return circles;
    }
    const suggestMove=() => {
        circleClicked(getIntComMove(gameBoard));

    }
    console.log(gameBoard);
    const circleClicked = (id)=>{
        console.log('circle clicked'+id);
        if (gameBoard[id] !== NO_PLAYER) return;
        if (gameState !== gameStatePlaying) return; 

        if (isWinner(gameBoard,id,currentPlayer)) {
            setGameState(gameStateWin);
            setwinPlayer(currentPlayer);
        }

        if (isDraw(gameBoard,id,currentPlayer)) {
            setGameState(gameStateDraw);
            setwinPlayer(NO_PLAYER);
        }
        setGameBoard(prev => {
            return prev.map((circle,pos) => {
                if (pos === id)
                return currentPlayer;
                return circle;
            })

        })
       
        // const board=[...gameBoard];
        // board[id]=currentPlayer;
        // setGameBoard(board);
        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    }
    const renderCircle = (id) => {
        return <GameCircle key ={id} id={id} className={`player${gameBoard[id]}`} onCircleClicked={circleClicked} ></GameCircle>
    }
    return(
        <>
        <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer}/>
        <div className="gameBoard">
            {initBoard()}
        </div>
        <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState}/>
        </>

    )
    
}
export default GameBoard;