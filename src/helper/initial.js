import Mario from '../characters/mario.js';
import Mushroom from '../characters/mushroom.js';

export default function initialiseGameBoard(){

    const col = parseInt(prompt("Please enter no of columns you want"));
    const row = parseInt(prompt("Please enter no of rows you want"));
    const squares = Array(col*row).fill(null);

    const max = col>row ? col:row;
    const nos = col*row;
    squares[0] = new Mario(2);
    
    for(let i = 0; i < max; i++) {
        squares[Math.floor(Math.random() * nos + 1)] = new Mushroom(2);
    }
    squares[nos]=row;
    squares[nos+1]=col;
  return squares;
}