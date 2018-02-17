import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import Square from './square.js';

export default class Board extends React.Component {

renderSquare(i) {
    return <Square
        piece = {this.props.squares[i]}
        style = {this.props.squares[i]? this.props.squares[i].style : null}
        id= {i} />
}

render() {
    //console.log(this.props);
    const board = [];
    const col = parseInt(prompt("Please enter board Width"));
    const row = parseInt(prompt("Please enter board height"));
    for(let i = 0; i < row; i++){
        const squareRows = [];
        for(let j = 0; j < col; j++){
            squareRows.push(this.renderSquare((i*8) + j));
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