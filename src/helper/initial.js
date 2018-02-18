//used for placement of mario and mushrooms on the board
import Mario from '../characters/mario.js';
import Mushroom from '../characters/mushroom.js';

export default function initialiseGameBoard(){// get called only one time at the starting

    const col = parseInt(prompt("Please enter board Width"));
    const row = parseInt(prompt("Please enter board height"));

    const squares = Array(col*row).fill(null);
    squares[0] = new Mario(2);

    const max = col>row ? col:row;
    const nos = col*row - 2;
    
    for(let i = 0; i < max; i++) {
        squares[Math.floor(Math.random() * nos + 1)] = new Mushroom(2);
    }
    squares[nos]=row;
    squares[nos+1]=col;
  return squares;
}