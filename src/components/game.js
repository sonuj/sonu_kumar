import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import Board from './board.js';
import initialiseGameBoard from '../helper/initial.js';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          squares: initialiseGameBoard(),
          sourceSelection: -1,
        //   row: row,
        //   col: col,
          status: ''
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();// array of squares containing mario and mushroom info along with index
        console.log('check i '+ i);
        
        if(this.state.sourceSelection === -1){ //modifying the source of the hero to current location of it
            console.log('handleclick if');
            //squares[i].style = {...squares[i].style, backgroundColor: "RGB(111,143,114)"}; // Emerald from http://omgchess.blogspot.com/2015/09/chess-board-color-schemes.html
            this.setState({
                status: "Choose destination for the selected piece",
                sourceSelection: i
            },() => console.log(this.state.sourceSelection));
        }
        else if(this.state.sourceSelection > -1){
        //delete squares[this.state.sourceSelection].style.backgroundColor;
          if(squares[i]){   //initialize new turn
            console.log('reset '+i);
            //reset is required to initialize new turn
            this.setState({
                status: "Wrong selection. Choose valid source and destination again.",
                sourceSelection: -1,
            },() => console.log(this.state.sourceSelection));
          }
          else{
            const squares = this.state.squares.slice();
            const l = this.state.squares.length;
            const isDestEnemyOccupied = squares[i]? true : false; 
            const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied, this.state.squares[l-1], this.state.squares[l-2]);
            console.log('is move possible '+ isMovePossible);
            const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);
            const isMoveLegal = this.isMoveLegal(srcToDestPath);
    
            if(isMovePossible && isMoveLegal){
            //   if(squares[i] !== null){
            //     if(squares[i].player === 1){
            //       whiteFallenSoldiers.push(squares[i]);
            //     }
            //     else{
            //       blackFallenSoldiers.push(squares[i]);
            //     }
            //   }
              squares[i] = squares[this.state.sourceSelection];
              squares[this.state.sourceSelection] = null;
              this.setState({
                sourceSelection: -1,
                squares: squares,
                status: '',
                },() => console.log(this.state.sourceSelection));
                console.log('restart done');
            }
            else{
              this.setState({
                status: "Wrong selection. Choose valid source and destination again.",
                sourceSelection: -1,
              });
            }
          }
          console.log(this.state.sourceSelection);
        }
    
      }

    isMoveLegal(srcToDestPath){
        let isLegal = true;
        for(let i = 0; i < srcToDestPath.length; i++){
            if(this.state.squares[srcToDestPath[i]] !== null){
            isLegal = false;
            }
        }
        return isLegal;
    }

    render() {
        console.log('game');
        return (
            <div className="game-board">
                <Board
                    squares = {this.state.squares}
                    onClick = {(i) => this.handleClick(i)}
                    />
            </div>
        );
    }
}