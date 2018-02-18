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
    //console.log(this.props);
    const board = [];
    for(let i = 0; i < this.props.row; i++){
        const squareRows = [];
        for(let j = 0; j < this.props.col; j++){
            squareRows.push(this.renderSquare((i*this.props.row) + j));
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