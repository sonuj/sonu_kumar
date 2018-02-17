import Mario from '../characters/mario.js';
import Mushroom from '../characters/mushroom.js';

export default function initialiseGameBoard(){
  const squares = Array(64).fill(null);

  squares[0] = new Mario(2);
  squares[7] = new Mushroom(2);
  squares[56] = new Mushroom(1);
  squares[63] = new Mushroom(1);

  squares[1] = new Mushroom(2);
  squares[6] = new Mushroom(2);
  squares[57] = new Mushroom(1);
  squares[62] = new Mushroom(1);

  squares[2] = new Mushroom(2);
  squares[5] = new Mushroom(2);
  squares[58] = new Mushroom(1);
  squares[61] = new Mushroom(1);

  squares[3] = new Mushroom(2);
  squares[4] = new Mushroom(2);

  squares[59] = new Mushroom(1);
  squares[60] = new Mushroom(1);

  return squares;
}