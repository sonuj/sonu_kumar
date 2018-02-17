import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import Square from './square.js';

export default class Board extends React.Component {

renderSquare(i) {
    return <Square id={i} />
}

render() {
    const board = [];
    var count = 0;
    const col = parseInt(prompt("Please enter board Width"));
    const row = parseInt(prompt("Please enter board height"));
    for(let i = 0; i < row; i++){
        const squareRows = [];
        for(let j = 0; j < col; j++){
            squareRows.push(this.renderSquare(count));
            count++;
        }
        board.push(<div className="board-row">{squareRows}</div>)
    }

    return (
        <div>
            {board}
        </div>
        );
    }
}