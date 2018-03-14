import Character from './character.js';

export default class Mushroom extends Character {
  constructor(player){
    super(player, "https://res.cloudinary.com/payjo-in/image/upload/c_scale,w_24/v1502452864/mushroom-512_f9ma5t.png");
  }

  isMovePossible(src, dest){
    return ( 
      src - 0 === dest || 
      src + 0 === dest);
    }

    getSrcToDestPath(src, dest){
        return [];
    }
}