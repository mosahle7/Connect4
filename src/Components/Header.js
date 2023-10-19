import React from 'react';
import { gameStatePlaying,gameStateWin,gameStateDraw} from "../Constants";
const Header = ({gameState,currentPlayer,winPlayer}) => {
  const renderLabel = () => {
    switch(gameState) {
      case gameStatePlaying:
        return <div>Player {currentPlayer}'s Turn</div>;
      case gameStateWin:
        return <div>Player {winPlayer} Wins!</div>;
      case gameStateDraw:
        return <div>It's a Draw!</div>
      default:
    }
  }
  return (
    <div className='panel header'>
        <div className='header-text'>{renderLabel()}</div>
      
    </div>
  );
};

export default Header;