import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import Board from './board.js';
import initialiseGameBoard from '../helper/initial.js';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          squares: initialiseGameBoard(8,8),
          sourceSelection: 0,
          status: ''
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        
        if(this.state.sourceSelection === -1){ //modifying the source of the hero to current location of it
            console.log('handleclick if');
            this.setState({
                status: "Choose destination for the selected piece",
                sourceSelection: i
            });
        }
        else if(this.state.sourceSelection > -1){
          delete squares[this.state.sourceSelection].style.backgroundColor;
          if(squares[i]){
            this.setState({
              status: "Wrong selection. Choose valid source and destination again.",
              sourceSelection: -1,
            });
          }
          else{
            
            const squares = this.state.squares.slice();
            const isDestEnemyOccupied = squares[i]? true : false; 
            const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied);
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
              });
            }
            else{
              this.setState({
                status: "Wrong selection. Choose valid source and destination again.",
                sourceSelection: -1,
              });
            }
          }
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
        const col = parseInt(prompt("Please enter board Width"));
        const row = parseInt(prompt("Please enter board height"));
        /*this.setState({
            squares: initialiseGameBoard(col,row)
          });*/
        return (
            <div className="game-board">
                <Board
                    squares = {this.state.squares}
                    row = {row}
                    col = {col}
                    onClick = {(i) => this.handleClick(i)}
                    />
            </div>
        );
    }
}