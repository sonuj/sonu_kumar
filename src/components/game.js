import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import Board from './board.js';

export default class Game extends React.Component {
    render() {
        return (
            <div className="game-board">
                <Board 
                onClick = {(i) => this.handleClick(i)}
                />
            </div>
        );
    }
}