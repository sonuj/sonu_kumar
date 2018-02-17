import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import Board from './board.js';
import initialiseGameBoard from '../helper/initial.js';

export default class Game extends React.Component {
    constructor(){
        super();
        this.state = {
          squares: initialiseGameBoard()
        }
    }

    render() {
        return (
            <div className="game-board">
                <Board
                    squares = {this.state.squares}
                />
            </div>
        );
    }
}