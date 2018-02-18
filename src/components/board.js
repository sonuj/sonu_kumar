import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import Square from './square.js';

export default class Board extends React.Component {

renderSquare(i) {
    return <Square
        piece = {this.props.squares[i]}
        style = {this.props.squares[i]? this.props.squares[i].style : null}
        id= {i}
        onClick={() => this.props.onClick(i)}
        />
}

render() {
    console.log('board');
    const l = this.props.squares.length;
    const board = [];
    let count=0;
    for(let i = 0; i < this.props.squares[l-2]; i++){
        const squareRows = [];
        for(let j = 0; j < this.props.squares[l-1]; j++){
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