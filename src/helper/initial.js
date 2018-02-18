import Mario from '../characters/mario.js';
import Mushroom from '../characters/mushroom.js';

export default function initialiseGameBoard(c,r){
  const squares = Array(c*r).fill(null);
  squares[0] = new Mario(2);
    const max = c>r ? c:r;
  for(let i = 0; i < max; i++) {
    squares[Math.floor(Math.random() * (c*r-2) + 1)] = new Mushroom(2);
    }

  return squares;
}