import React from 'react';
import { gameStatePlaying } from "../Constants";

const Footer = ({onNewGameClick,onSuggestClick,gameState}) => {
  return (
    <div className='panel footer'>

      {
        gameState === gameStatePlaying &&
        <button onClick={onSuggestClick}>Suggest</button>
      }
      {
        gameState !== gameStatePlaying &&
        <button  onClick={onNewGameClick}>New Game</button>
      }
      
    </div>
  );
};

export default Footer;